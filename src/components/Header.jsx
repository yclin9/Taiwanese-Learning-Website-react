function Header({ setPage, setNum }) {
    return (
        <header className="navbar">
            <div className="logo">
                <img src="../assets/logo.png" width="200" alt="logo"
                onClick={() => setPage("home")} style={{ cursor: "pointer"}}/>
            </div>
            <nav>
                <button onClick={() => {
                    setPage("tailo");
                    setNum(0);
                }} style={{ cursor: "pointer"}}>
                        Learn Tâi-lô
                </button>
                <button onClick={() => {setPage("lessons");
                    setNum(0);
                }} style={{ cursor: "pointer"}}>
                        Lessons
                </button>
                <button onClick={() => {setPage("articles");
                    setNum(0);
                }} style={{ cursor: "pointer"}}>
                        Articles
                </button>
            </nav>
        </header>
    )
}

export default Header;