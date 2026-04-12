import { useEffect, useState } from "react";

import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Topic from "./components/Topic";
import List from "./components/List";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import VocabTable from "./components/VocabTable";
import Practice from "./components/Practice";
import Tailo from "./components/Tailo"

function App() {
  const [page, setPage] = useState("home");
  const [num, setNum] = useState(0);
  const [sectionType, setSection] = useState("text");

  useEffect(() => {
    setNum(0);
    setSection("text");
  }, [page]);

  return (
    <>
      <Header setPage={setPage} setNum={setNum} />

      {page === "home" && <Home setPage={setPage} />}

      {page !== "home" && (
        <>
          <Topic currPage={page} num={num} />
          
          {num === 0 && (
            <List currPage={page} setNum={setNum} />
          )}

          <main className="layout">
            {num > 0 && (
              <Sidebar currPage={page} num={num} setNum={setNum} setSection={setSection} />
            )}
            
            {(num > 0 && page === "lessons") && (
              <>
                {sectionType === "text" && <Content contentType={"lessons_text"} num={num} />}
                {sectionType === "vocabulary" && <VocabTable num={num} />}
                {sectionType === "grammar" && <Content contentType={"lessons_grammar"} num={num} />}
                {sectionType === "practice" && <Practice num={num} />}
              </>
            )}
            
            {(num > 0 && page === "tailo") && (
              <Tailo num={num} />
            )}
            
            {(num > 0 && page === "articles") && (
              <Content contentType={"articles"} num={num} />
            )}
            
            {/* {num > 0 && (
              <aside className="right-side"/>
            )} */}
          </main>
        </>
      )}
      
      <Footer />
    </>
  )
}

export default App;