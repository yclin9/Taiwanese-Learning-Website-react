import { useEffect, useState } from "react";

import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Topic from "./components/Topic";
import List from "./components/List";
import Sidebar from "./components/Sidebar";
import LessonText from "./components/LessonText";
import VocabTable from "./components/VocabTable";
import Grammar from "./components/Grammar";
import Quiz from "./components/Quiz";
import Tailo from "./components/Tailo";
import Article from "./components/Article";

function App() {
  const [page, setPage] = useState("home");
  const [num, setNum] = useState(0);
  const [section, setSection] = useState("text");

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
          
          {(num > 0 && page !== "articles") && (
            <Sidebar />
          )}
          
          {(num > 0 && page === "lessons") && (
            <>
              {section === "text" && <LessonText />}
              {section === "vocabulary" && <VocabTable />}
              {section === "grammar" && <Grammar />}
              {section === "quiz" && <Quiz />}
            </>
          )}
          
          {(num > 0 && page === "tailo") && (
            <Tailo />
          )}
          
          {(num > 0 && page === "articles") && (
            <Article />
          )}
        </>
      )}
      
      <Footer />
    </>
  )
}

export default App;