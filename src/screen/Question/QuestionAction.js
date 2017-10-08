import {
    UPDATE_QUESTION
} from './types';

export const nextQuestion = ({
                                 currentQuestion,
                                 totalQuestions,
                                 questionsVisited
                             }) => {
    
    console.log("nextQuestion currentQuestion : ", currentQuestion)
    
    const nextQuestion = currentQuestion + 1;
    questionsVisited = questionsVisited + 1;
    
    console.log("nextQuestion nextQuestion : ", nextQuestion)
    console.log("nextQuestion totalQuestions:", totalQuestions)
    console.log("nextQuestion questionsVisited:", questionsVisited)
    
    return (dispatch) => {
        dispatch({
            type: UPDATE_QUESTION,
            payload: {
                currentQuestion: nextQuestion,
                totalQuestions: 10,
                questionsVisited: questionsVisited,
            }
        })
    }
};

export const previousQuestion = ({
                                     currentQuestion,
                                     totalQuestions,
                                     questionsVisited
                                 }) => {
    
    const previousQuestion = currentQuestion - 1;
    questionsVisited = questionsVisited + 1;
    
    console.log("previousQuestion totalQuestions:", totalQuestions)
    console.log("previousQuestion questionsVisited:", questionsVisited)
    
    return (dispatch) => {
        dispatch({
            type: UPDATE_QUESTION,
            payload: {
                currentQuestion: previousQuestion,
                totalQuestions: 10,
                questionsVisited: questionsVisited,
            }
        })
    }
};