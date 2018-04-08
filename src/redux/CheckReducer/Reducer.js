import * as types from './types';

const INITIAL_STATE = {
  check: null,
  loading: true,
  checkDesc: '',
  checkExpire: '',
  checkOffer: '',
  checkValue: '',
  checkInfo: '',
  btnNote: '',
  btnName: '',
  btnValue: '',
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case types.CHECK_FETCH:
      return { ...state, loading: false, check: action.payload };
    case types.DELETE_BTN:
      return { ...state, ...INITIAL_STATE };
    case types.CHECKNAME_CHANGE:
      return { ...state, checkOffer: action.payload };
    case types.CHECKDESCRIPTION_CHANGE:
      return { ...state, checkDesc: action.payload };
    case types.CHECKEXPIRE_CHANGE:
      return { ...state, checkExpire: action.payload };
    case types.CHECKINFO_CHANGE:
      return { ...state, checkInfo: action.payload };
    case types.CHECKVALUE_CHANGE:
      return { ...state, checkValue: action.payload };
    case types.BTNNOTE_CHANGE:
      return { ...state, btnNote: action.payload };
    case types.BTNNAME_CHANGE:
      return { ...state, btnName: action.payload };
    case types.BTNVALUE_CHANGE:
      return { ...state, btnValue: action.payload };
    case types.CHECK_CREATE_START:
      return { ...state, loading: true, error: '' };
    case types.COOLOR_CHOOSEN:
      return { ...state, coolor: action.payload };
    case types.ICON_CHOOSEN:
      return { ...state, icon: action.payload };
    case types.COLOR_CHANGED_ICON:
      return { ...state, ...INITIAL_STATE, iconName: action.payload };
    case types.COLOR_CHANGED:
      return { ...state, ...INITIAL_STATE, colorName: action.payload };
    case types.CHECK_CREATE_CHECK:
      return { ...state, error: action.payload, ...INITIAL_STATE, loading: false };
    default:
      return state;
  }
};
