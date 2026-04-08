function Header({ setPage, setNum }) {
    return (
        <header className="navbar">
            <div className="logo">
                <img src="/public/logo.png" width="200" alt="logo"
                onClick={() => setPage("home")} style={{ cursor: "pointer"}}/>
            </div>
            <nav>
                <button onClick={() => {
                    setPage("tailo");
                    setNum(0);
                }}>
                        Learn Tâi-lô
                </button>
                <button onClick={() => {setPage("lessons");
                    setNum(0);
                }}>
                        Lessons
                </button>
                <button onClick={() => {setPage("articles");
                    setNum(0);
                }}>
                        Articles
                </button>
            </nav>
        </header>
    )
}

export default Header;