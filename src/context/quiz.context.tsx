import { createContext, useContext, useEffect, useReducer } from "react";
import { initialState, quizReducer } from "../reducers/quiz.reducer";
import { QuizHistory, QuizState } from "../types/quiz.types";
import data from "../data";

interface ContextType extends QuizState {
  selectQuiz: (selectedQuizTitle: string) => void;
  incrementQuestion: () => void;
  logAnswer: (userAnswer: QuizHistory) => void;
  incrementScore: (points: number) => void;
  decrementScore: (points: number) => void;
  resetGame: () => void;
}

const QuizContext = createContext<ContextType>({} as ContextType);

export const QuizProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  const fetchQuizzes = () => {
    dispatch({ type: "FETCH_QUIZZES", payload: data });
  };

  const selectQuiz = (selectedQuizTitle: string) => {
    dispatch({ type: "SELECT_QUIZ", payload: selectedQuizTitle });
  };

  const incrementQuestion = () => {
    dispatch({ type: "NEXT_QUESTION" });
  };

  const logAnswer = (userAnswer: QuizHistory) => {
    dispatch({ type: "LOG_ANSWER", payload: userAnswer });
  };

  const incrementScore = (points: number) => {
    dispatch({ type: "INCREMENT_SCORE", payload: points });
  };

  const decrementScore = (points: number) => {
    dispatch({ type: "DECREMENT_SCORE", payload: points });
  };

  const resetGame = () => {
    dispatch({ type: "RESET_GAME" });
  };

  useEffect(() => {
    fetchQuizzes();
  }, []);

  return (
    <QuizContext.Provider
      value={{
        ...state,
        selectQuiz,
        incrementQuestion,
        logAnswer,
        incrementScore,
        decrementScore,
        resetGame,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizContext = () => {
  return useContext(QuizContext);
};
