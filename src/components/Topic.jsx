import { useState, useEffect } from "react";

function Topic({ currPage, num }) {
    const [list, setList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`json/list/${currPage}.json`);
            const data = await response.json();
            setList(data)
        }

        fetchData();
    }, [currPage]);

    if (num === 0) {
        if (currPage === "tailo") {
            return (
                <div className="topic">
                    <h1>台羅 Tâi-lô</h1>
                    <h2>Taiwanese Alphabetic System</h2>
                </div>
            )
        } else if (currPage === "lessons") {
            return (
                <div className="topic">
                    <h1>課程 Khò-tîng</h1>
                    <h2>Lessons</h2>
                </div>
            )
        } else if (currPage === "articles") {
            return (
                <div className="topic">
                    <h1>文章 Bûn-tsiong</h1>
                    <h2>Articles</h2>
                </div>
            )
        }
    }

    const item = list[num - 1];
    if (!item) return null;

    return (
        <div className="topic">
            {currPage === "tailo" && (
                <>
                    <h1>{item.num}. {item.taiwanese} {item.tailo}</h1>
                    <h2>{item.english}</h2>
                </>
            )}
            {currPage === "lessons" && (
                <>
                    <h1>{item.num}. {item.taiwanese} {item.tailo}</h1>
                    <h2>{item.english}</h2>
                </>
            )}
            {currPage === "articles" && (
                <>
                    <h1>{item.topic}</h1>
                    <h2>{item.author}</h2>
                </>
            )}
        </div>
    );
}

export default Topic;