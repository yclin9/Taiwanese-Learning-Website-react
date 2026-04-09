function Sidebar({ currPage, num, setNum, setSection }) {

    return(
        <>
            {currPage === "tailo" && (
                <aside className="sidebar">
                    <h3>Tâi-lô</h3>
                    <ul>
                        <li><button onClick={() => setNum(1)} style={{ cursor: "pointer"}}>Vowels</button></li>
                        <li><button onClick={() => setNum(2)} style={{ cursor: "pointer"}}>Consonants</button></li>
                        <li><button onClick={() => setNum(3)} style={{ cursor: "pointer"}}>Tones</button></li>
                    </ul>
                </aside>
            )}
            
            {currPage === "lessons" && (
                <aside className="sidebar">
                    <h3>Lesson {num}</h3>
                    <ul>
                        <li><button onClick={() => setSection("text")} style={{ cursor: "pointer"}}>Text</button></li>
                        <li><button onClick={() => setSection("vocabulary")} style={{ cursor: "pointer"}}>Vocabulary</button></li>
                        <li><button onClick={() => setSection("grammar")} style={{ cursor: "pointer"}}>Grammar</button></li>
                        <li><button onClick={() => setSection("quiz")} style={{ cursor: "pointer"}}>Quiz</button></li>
                    </ul>
                </aside>
            )}
        </>
    );
}

export default Sidebar;