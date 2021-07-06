import { useNavigate } from "react-router";
import { useQuizContext } from "../../context/quiz.context";
import "./Quizzes.css";

const Quizzes = () => {
  const { quizBank, selectQuiz } = useQuizContext();
  const navigate = useNavigate();

  const handleSelectQuiz = (quizTitle: string) => {
    selectQuiz(quizTitle);
    navigate("/quiz");
  };

  return (
    <div className="card-list row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 pt-1">
      {quizBank?.map((item) => {
        return (
          <div key={item.id} className="card" onClick={() => handleSelectQuiz(item.title)}>
            <img src={item.image} alt={item.title} />
            <div className="card-content">
              <h3>{item.title}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Quizzes;
