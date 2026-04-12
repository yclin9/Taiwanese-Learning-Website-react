import { useState, useEffect } from "react";

function VocabTable({ num }) {
    const [vocabulary, setVocab] = useState([]);

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

    return (
        <section className="main-part">
            <div className="content">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Taiwanese</th>
                            <th>Tâi-lô</th>
                            <th>English</th>
                            <th>Audio</th>
                        </tr>
                    </thead>

                    <tbody>
                        {vocabulary.map((item, index) => (
                            <tr key={index}>
                                <td>{item.taiwanese}</td>
                                <td>{item.tailo}</td>
                                <td>{item.english}</td>
                                <td>
                                    <audio preload="none" src={`/public/audio/lesson${num}/${item.audio}`} controls></audio>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default VocabTable;