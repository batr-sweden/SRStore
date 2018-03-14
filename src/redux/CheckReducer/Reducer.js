import * as types from './types';

const INITIAL_STATE = {
  check: null,
  loading: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.CHECK_FETCH:
      return { ...state, loading: false, check: action.payload };
    case types.DELETE_BTN:
      return { ...state, ...INITIAL_STATE };
    default:
      return state;
  }
};
