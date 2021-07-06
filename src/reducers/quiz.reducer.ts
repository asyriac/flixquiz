import {QuizState, ActionType} from '../types/quiz.types'
export const initialState:QuizState = {
    quizBank: [],
    score: 0,
    currentQuestionNumber: 0,
    selectedQuiz: "",
    history: [],
}


export const quizReducer = (state:QuizState, action:ActionType) => {
    switch(action.type){
        case "FETCH_QUIZZES":
            return {
                ...state,
                quizBank: action.payload
            }
        case "SELECT_QUIZ":{
            return {
                ...state,
                selectedQuiz: action.payload
            }
        }
        case "NEXT_QUESTION": {
            return {
                ...state,
                currentQuestionNumber: state.currentQuestionNumber + 1
            }
        }
        case "LOG_ANSWER": {
            return {
                ...state,
                history: [...state.history, action.payload]
            }
        }
        case "INCREMENT_SCORE":{
            return {
                ...state,
                score: state.score + action.payload
            }
        }
        case "DECREMENT_SCORE":{
            return {
                ...state,
                score: state.score + action.payload
            }
        }
        case "RESET_GAME": {
            return{
                ...state,
                score: 0,
                currentQuestionNumber: 0,
                selectedQuiz: "",
                history: [],
            }
        }
        default:
            return state;
    }
}