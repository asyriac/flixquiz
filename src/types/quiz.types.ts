export type Option = {
    id: string;
    text: string;
    isRight: boolean;
}

export type Question = {
    id: string;
    question: string;
    points: number;
    negativePoints: number;
    options: Option[];
}

export type Quiz = {
    id: string;
    title: string;
    image: string;
    questions: Question[];
}

export type QuizHistory = {
    id: string;
    selectedOption: string;
}

export type QuizState = {
    quizBank: Quiz[];
    score: number;
    currentQuestionNumber: number;
    selectedQuiz: string;
    history: QuizHistory[];
}

export type ActionType = 
    | {type: "FETCH_QUIZZES", payload:Quiz[]}
    | {type:"SELECT_QUIZ", payload:string}
    | {type:"NEXT_QUESTION"}
    | {type: "LOG_ANSWER", payload: QuizHistory}
    | {type:"INCREMENT_SCORE", payload: number}
    | {type:"DECREMENT_SCORE", payload: number}
    | {type:"RESET_GAME"}
