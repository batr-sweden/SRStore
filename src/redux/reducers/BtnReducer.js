import {
  BTN_FETCH,
  BONUS_STAMP
} from '../actions/types';

const INITIAL_STATE = {
  logic: null,
  loading: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BTN_FETCH:
      return { ...state, loading: false, logic: action.payload };
    case BONUS_STAMP:
      return { ...state, btnOrStamp: action.payload };
    default:
      return state;
  }
};
