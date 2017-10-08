import {
    GET_ALBUMS
} from './types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
    console.log("state : " + state)
    console.log("action.type : " + action.type)
    console.log("action.payload : " + action.payload)
  switch (action.type) {
    case GET_ALBUMS:
      return action.payload;
    default:
      return INITIAL_STATE;
  }
};
