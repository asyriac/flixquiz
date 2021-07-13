import { useNavigate } from "react-router";
import { useAuthContext } from "../../context/auth.context";
import { useQuizContext } from "../../context/quiz.context";
import useFetchCurrentUser from "../../hooks/useFetchCurrentUser";
import Loading from "../Loading/Loading";
import "./Quizzes.css";

const Quizzes = () => {
  const { quizBank, selectQuiz, quizLoading } = useQuizContext();
  const { isLoggedIn } = useAuthContext();
  const navigate = useNavigate();

  useFetchCurrentUser();
  const handleSelectQuiz = (quizTitle: string) => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      selectQuiz(quizTitle);
      navigate("/quiz");
    }
  };

  if (quizLoading) return <Loading />;

  return (
    <div className="card-list row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 pt-1">
      {quizBank?.map((item) => {
        return (
          <div key={item._id} className="card" onClick={() => handleSelectQuiz(item.title)}>
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
