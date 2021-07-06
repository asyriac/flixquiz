import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Quiz from "./components/Quiz/Quiz";
import Quizzes from "./components/Quizzes/Quizzes";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Quizzes />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
