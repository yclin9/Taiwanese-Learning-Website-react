import { useState, useEffect } from "react"

function List({ currPage, setNum }) {
    const [list, setList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`/public/json/list/${currPage}.json`);
                const data = await response.json();
                setList(data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, [currPage]);

    return (
        <>
            {list.map((item, index) => (
                <section className="list-item" key={index}>
                    <div onClick={() => setNum(index + 1)} style={{ cursor: "pointer" }}>
                        {currPage === "tailo" && (
                            <>
                                <h2>{item.num}. {item.taiwanese} {item.tailo}</h2>
                                <h3>{item.english}</h3>
                            </>
                        )}
                        {currPage === "lessons" && (
                            <>
                                <h2>{item.num}. {item.taiwanese} {item.tailo}</h2>
                                <h3>{item.english}</h3>
                                <p className="explanation">{item.description}</p>
                            </>
                        )}
                        {currPage === "articles" && (
                            <>
                                <h2>{item.topic}</h2>
                                <h3>{item.author}</h3>
                                <p className="explanation">{item.description}</p>
                            </>
                        )}
                    </div>
                </section>
            ))}
        </>
    );
}

export default List;