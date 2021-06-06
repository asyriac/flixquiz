
import Navbar from "./components/Navbar/Navbar";
import Quizzes from "./components/Quizzes/Quizzes";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Quizzes />
      </div>
      </>
  );
}

export default App;
