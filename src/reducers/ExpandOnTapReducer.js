import {
    EXPAND_ON_TAP,
} from '../actions/types';

const INITIAL_STATE = {
    title: 'physics-redux-init-title',
    message: 'physics-redux-init-message',
    isClosed: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EXPAND_ON_TAP:
      return action.payload
    default:
      return INITIAL_STATE;
  }
};
