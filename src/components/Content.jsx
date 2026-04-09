import { useState, useEffect } from "react";

function Content({ contentType, num }) {
    const [content, setContent] = useState([]);

    useEffect(() => {
        async function fetchHTML() {
            const response = await fetch(`/public/html/${contentType}/${num}.html`);
            const html = await response.text();
            setContent(html);
        }

        fetchHTML();
    }, [num]);

    return (
        <section className="main-part">
            <div className="content" dangerouslySetInnerHTML={{__html: content}}/>
        </section>
    );
}

export default Content;