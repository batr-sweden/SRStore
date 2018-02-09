import {
  USER_FETCH,
  BONUS_STAMP,
  FAQ_FETCH
} from '../actions/types';

const INITIAL_STATE = {
  faq: null,
  logic: null,
  info: null,
  loading: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_FETCH:
      return {
        ...state,
        loading: false,
        logic: action.payload.logic.rewardBtns,
        info: action.payload.info };
    case FAQ_FETCH:
      return { ...state, faq: action.payload };
    case BONUS_STAMP:
      return { ...state, btnOrStamp: action.payload };
    default:
      return state;
  }
};
