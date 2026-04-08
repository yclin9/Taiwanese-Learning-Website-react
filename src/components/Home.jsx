function Home({ setPage }) {
    return (
        <main>
            <section className="home-topic">
            <div>
                <h1>
                    若欲媠，食果子；若欲巧，講台語<br/>
                    <span>To be pretty, eat fruits; to be smart, learn Taiwanese!</span>
                </h1>
                <p>Dive into the beautiful language and culture!</p>
                <button className="start-btn" onClick={() => setPage("lessons")}>
                    Get Started
                </button>
            </div>
            </section>
        </main>
    )
}

export default Home;