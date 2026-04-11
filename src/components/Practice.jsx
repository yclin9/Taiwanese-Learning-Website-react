import { useState, useEffect } from "react";

function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

function getRandomItems(arr, num) {
    return shuffle(arr).slice(0, num);
}

function generateChoices(correct, pool, field) {
    const wrongAnswers = shuffle(
        pool.filter(item => item[field] !== correct)
    ).slice(0, 3);

    return shuffle([correct, ...wrongAnswers.map(item => item[field])]);
}

function Practice({ num }) {
    const [vocabulary, setVocab] = useState([]);
    const [quizData, setQuizData] = useState([]);
    const [answers, setAnswers] = useState({});
    const [result, setResult] = useState("");

    useEffect(() => {
        async function fetchData() {
              try {
                  const response = await fetch(`/json/vocab/lesson${num}.json`);
                  const data = await response.json();
                  setVocab(data);
              } catch (error) {
                  console.error(error);
              }
          }

          fetchData();
    }, [num]);

    useEffect(() => {
        if (vocabulary.length === 0) return;

        let questions = [];
        let index = 0;

        const sections = [
            { type: "english-tailo", title: "Part 1: Translate English to Tâi-lô" },
            { type: "tailo-english", title: "Part 2: Translate Tâi-lô to English" },
            { type: "audio-english", title: "Part 3: Listen and choose the correct translation" }
        ];

        sections.forEach(section => {
            const items = getRandomItems(vocabulary, 5);

            items.forEach(item => {
                let correct, choices;

                if (section.type === "english-tailo") {
                    correct = item.tailo;
                    choices = generateChoices(correct, vocabulary, "tailo");
                } else if (section.type === "tailo-english") {
                    correct = item.english;
                    choices = generateChoices(correct, vocabulary, "english");
                } else if (section.type === "audio-english") {
                    correct = item.english;
                    choices = generateChoices(correct, vocabulary, "english");
                }

                questions.push({
                    id: index,
                    section: section.title,
                    type: section.type,
                    question: item,
                    correct,
                    choices
                });

                index++;
            });
        });

        setQuizData(questions);
    }, [vocabulary]);

    function handleChange(qid, value) {
        setAnswers(prev => ({
            ...prev, [qid]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        let score = 0;

        quizData.forEach(q => {
            if (answers[q.id] === q.correct) {
                score++;
            }
        });

        setResult(`You scored ${score} out of ${quizData.length}`);
    }

    const grouped = quizData.reduce((acc, q) => {
        if (!acc[q.section]) acc[q.section] = [];
        acc[q.section].push(q);
        return acc;
    }, {});

    return (
        <section className="main-part">
        <form onSubmit={handleSubmit}>
            {Object.entries(grouped).map(([sectionTitle, questions]) => (
                <div key={sectionTitle} className="practice-box">
                    <h3>{sectionTitle}</h3>

                    {questions.map((q, i) => (
                        <div
                        key = {q.id}
                        className="question-block"
                        style={{
                            border:
                                result &&
                                (answers[q.id] === q.correct ? "2px solid green" : "2px solid red")
                        }}>
                            <p>
                                <strong>{i + 1}. </strong>
                                {q.type === "english-tailo" && q.question.english}
                                {q.type === "tailo-english" && q.question.tailo}
                            </p>

                            {q.type === "audio-english" && (
                                <audio controls src = {`audio/${q.question.audio}`}/>
                            )}

                            {q.choices.map(choice => (
                                <label key={choice} style={{ display: "block" }}>
                                    <input
                                    type="radio"
                                    name={`q${q.id}`}
                                    value={choice}
                                    onChange={() => handleChange(q.id, choice)}
                                    />
                                    {choice}
                                </label>
                            ))}
                        </div>
                    ))}
                </div>
            ))}

            <button type="submit">Submit</button>

            {result && <p>Submit</p>}
        </form>
        </section>
    );
}

export default Practice;