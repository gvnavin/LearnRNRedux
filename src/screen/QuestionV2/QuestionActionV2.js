import {
    UPDATE_QUESTION_V2
} from './types';

export const nextQuestionV2 = ({
                                 currentQuestion,
                                 totalQuestions,
                                 questionsVisited
                             }) => {
    
    console.log("nextQuestionV2 currentQuestion : ", currentQuestion)
    
    const nextQuestion = currentQuestion + 1;
    
    console.log("nextQuestionV2 nextQuestion : ", nextQuestion)
    
    return (dispatch) => {
        dispatch({
            type: UPDATE_QUESTION_V2,
            payload: {
                currentQuestion: nextQuestion,
                totalQuestions: 10,
                questionsVisited: questionsVisited,
            }
        })
    }
};

export const previousQuestionV2 = ({
                                     currentQuestion,
                                     totalQuestions,
                                     questionsVisited
                                 }) => {
    
    const previousQuestion = currentQuestion - 1;
    
    return (dispatch) => {
        dispatch({
            type: UPDATE_QUESTION_V2,
            payload: {
                currentQuestion: previousQuestion,
                totalQuestions: 10,
                questionsVisited: questionsVisited,
            }
        })
    }
};