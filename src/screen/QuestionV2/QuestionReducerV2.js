import {
    UPDATE_QUESTION_V2
} from './types';

const INITIAL_STATE = {
    currentQuestion: 0,
    totalQuestions: 10,
    questionsVisited: 0,
};

export default (state = INITIAL_STATE, action) => {
    console.log("state : " + state)
    console.log("action.type : " + action.type)
    console.log("action.payload : " + action.payload)
    
    switch (action.type) {
        case UPDATE_QUESTION_V2:
            const { currentQuestion, totalQuestions, questionsVisited } = action.payload;
            console.log("reducer currentQuestion: ", currentQuestion)
            console.log("reducer totalQuestions: ", totalQuestions)
            console.log("reducer questionsVisited: ", questionsVisited)
             const o = {
                ...state,
                currentQuestion: action.payload.currentQuestion,
                questionsVisited: action.payload.questionsVisited + 1
            };
            console.log("reducer - o:", o);
            return o;
        default:
            return INITIAL_STATE;
    }
};
