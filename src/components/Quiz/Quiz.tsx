import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useQuizContext } from "../../context/quiz.context";
import { Question, Quiz, QuizHistory } from "../../types/quiz.types";
import "./Quiz.css";

type Prop = {
  question: Question;
};

const Review = ({ data, quizDetails }: { data: QuizHistory[]; quizDetails: Quiz }) => {
  return (
    <div className="review">
      {quizDetails?.questions.map((item, i) => {
        return (
          <div key={item._id}>
            <h3 className="text-center mt-1">{item.question}</h3>
            <div className="flex flex-col mt-lg flex-center" style={{ gap: "0.5em" }}>
              {item.options.map((item) => (
                <button
                  key={item._id}
                  className={`btn btn-secondary-disabled ${data[i].selectedOption === item._id && !item.isRight && "red"} ${item.isRight && "green"}`}
                  style={{ width: "100%", maxWidth: "800px" }}
                >
                  {item.text}
                </button>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const CurrentQuestion = ({ question }: Prop) => {
  const [disabledButton, setDisabledButton] = useState(false);
  const { incrementQuestion, logAnswer, incrementScore, decrementScore } = useQuizContext();
  const delayRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      window.clearInterval(delayRef.current || 0);
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLElement>, selectedOption: string, isRight: boolean) => {
    const selectedOpt = e.target;
    logAnswer({
      id: question._id,
      selectedOption,
    });

    setDisabledButton(true);
    if (isRight) {
      (selectedOpt as HTMLElement).classList.add("green");
      incrementScore(question.points);
      delayRef.current = window.setTimeout(() => {
        (selectedOpt as HTMLElement).classList.remove("green");
        incrementQuestion();
        setDisabledButton(false);
      }, 500);
    } else {
      (selectedOpt as HTMLElement).classList.add("red");
      decrementScore(question.negativePoints);
      delayRef.current = window.setTimeout(() => {
        (selectedOpt as HTMLElement).classList.remove("red");
        incrementQuestion();
        setDisabledButton(false);
      }, 500);
    }
  };

  return (
    <>
      <h3 className="text-center mt-md">{question.question}</h3>
      <div className="flex flex-col mt-lg flex-center" style={{ gap: "0.5em" }}>
        {question.options.map((item) => (
          <button
            key={item._id}
            onClick={disabledButton ? undefined : (e) => handleClick(e, item._id, item.isRight)}
            className="btn btn-secondary"
            style={{ width: "100%", maxWidth: "800px" }}
          >
            {item.text}
          </button>
        ))}
      </div>
    </>
  );
};

const TakeQuiz = () => {
  const { quizBank, selectedQuiz, currentQuestionNumber, history, score, resetGame } = useQuizContext();
  const [timer, setTimer] = useState(60);
  const quizDetails = quizBank.filter((item) => item.title === selectedQuiz)[0];
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      setTimer((timer) => {
        if (timer > 1) return timer - 1;
        resetTimer();
        resetGame();
        return 0;
      });
    }, 1000);
    return () => {
      window.clearInterval(timerRef.current || 0);
    };
  }, [resetGame]);

  const resetTimer = () => {
    window.clearInterval(timerRef.current || 0);
    timerRef.current = null;
  };

  return (
    <>
      {quizDetails?.questions[currentQuestionNumber] ? (
        <>
          <h4 className="text-center pt-1">Time left: {timer} sec</h4>
          <div className="flex flex-space-between mt-md">
            <h4 className="question-count">
              Question: {currentQuestionNumber + 1} / {quizDetails?.questions.length}
            </h4>
            <h4>Score: {score}</h4>
          </div>
          <CurrentQuestion question={quizDetails?.questions[currentQuestionNumber]} />{" "}
        </>
      ) : (
        <>
          {resetTimer()}
          <h2 className="text-center mt-md mb-sm">Game over! You scored {score} points</h2>
          <h2 className="text-center mb-sm">
            <Link to="/" className="replay-game" onClick={() => resetGame()}>
              Play again?
            </Link>
          </h2>
          <Review data={history} quizDetails={quizDetails} />
        </>
      )}
    </>
  );
};

export default TakeQuiz;
