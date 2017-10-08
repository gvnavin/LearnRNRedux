import {
    UPDATE_QUESTION
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
    case UPDATE_QUESTION:
      return action.payload
    default:
      return INITIAL_STATE;
  }
};
