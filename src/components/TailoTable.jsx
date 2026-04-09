import { useState, useEffect } from "react";

function TailoTable({ tailoType }) {
    const [alphabet, setAlphabet] = useState([]);

    useEffect(() => {
        async function fetchData() {
                try {
                    const response = await fetch(`/json/tailo/${tailoType}.json`);
                    console.log(`/json/tailo/${tailoType}.json`);
                    const data = await response.json();
                    setAlphabet(data);
                } catch (error) {
                    console.error(error);
                }
           }

           fetchData();
    }, [tailoType]);

    
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Letter</th>
                    <th>Example</th>
                    <th>Translation</th>
                    <th>Audio</th>
                </tr>
            </thead>

            <tbody>
                {alphabet.map((item, index) => (
                    <tr key={index}>
                        <td>{item.letter}</td>
                        <td>{item.example}</td>
                        <td>{item.translation}</td>
                        <td>
                            <audio preload="none" src={`/${item.audio}`} controls></audio>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TailoTable;