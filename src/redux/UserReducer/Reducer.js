import * as types from './types';

const INITIAL_STATE = {
  faq: null,
  logic: null,
  info: null,
  loading: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.USER_FETCH:
      return {
        ...state,
        loading: false,
        logic: action.payload.logic.rewardBtns,
        info: action.payload.info };
    case types.FAQ_FETCH:
      return { ...state, faq: action.payload };
    case types.BONUS_STAMP:
      return { ...state, btnOrStamp: action.payload };
    default:
      return state;
  }
};
