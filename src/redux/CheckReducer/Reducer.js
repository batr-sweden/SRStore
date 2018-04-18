import * as types from './types';

const INITIAL_STATE = {
  check: null,
  loading: true,
  checkDesc: '',
  checkExpire: '',
  checkInfo: '',
  checkOffer: '',
  checkValue: '',
  iconName: '',
  icon: '',
  coolor: '',
  btnSettings: '',
  btnNote: '',
  btnValue: '',
  btnName: '',
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.CHECK_FETCH:
      return { ...state, loading: false, check: action.payload };
    case types.DELETE_BTN:
      return { ...state, ...INITIAL_STATE };
    case types.CHECKOFFER_CHANGE:
      return { ...state, checkOffer: action.payload };
    case types.CHECKDESCRIPTION_CHANGE:
      return { ...state, checkDesc: action.payload };
    case types.CHECKEXPIRE_CHANGE:
      return { ...state, checkExpire: action.payload };
    case types.CHECKINFO_CHANGE:
      return { ...state, checkInfo: action.payload };
    case types.CHECKVALUE_CHANGE:
      return { ...state, checkValue: action.payload };
    case types.BTNVALUE_CHANGE:
      return { ...state, btnValue: Number(action.payload) };
    case types.BTNNAME_CHANGE:
      return { ...state, btnName: action.payload };
    case types.BTNNOTE_CHANGE:
      return { ...state, btnNote: action.payload };
    case types.BTNCOLOR_CHOOSEN:
      return { ...state, btnColor: action.payload };
    case types.BTNICON_CHOOSEN:
      return { ...state, btnIcon: action.payload };
    default:
      return state;
  }
};
