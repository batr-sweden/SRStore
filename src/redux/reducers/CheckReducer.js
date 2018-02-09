import { CHECK_FETCH, DELETE_BTN } from '../actions/types';

const INITIAL_STATE = {
  check: null,
  loading: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHECK_FETCH:
      return { ...state, loading: false, check: action.payload };
    case DELETE_BTN:
      return { ...state, ...INITIAL_STATE };
    default:
      return state;
  }
};
