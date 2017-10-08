import {
    EXPAND_ON_TAP
} from './types';

export const expandOnTap = ({ title, message, isClosed }) => {
  return {
    type: EXPAND_ON_TAP,
    payload: { title, message, isClosed }
  };
};