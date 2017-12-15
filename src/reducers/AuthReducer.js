import {
  ANNONIMOUS_ACTION,
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  RE_PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_START,
  PASSWORD_CHECK,
  SIGNIN_SIGNUP,
  STORE_NAME_CHANGE,
  CITY_NAME_CHANGE,
 } from '../actions/types';

const INITIAL_STATE = {
  city: '',
  store: '',
  email: '',
  password: '',
  rePassword: '',
  user: null,
  error: '',
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case STORE_NAME_CHANGE:
      return { ...state, store: action.payload };
    case CITY_NAME_CHANGE:
      return { ...state, city: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload, error: '' };
    case RE_PASSWORD_CHANGED:
      return { ...state, rePassword: action.payload, error: '' };
    case LOGIN_USER_START:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        user: action.payload };
    case SIGNIN_SIGNUP:
      return { ...state, ...INITIAL_STATE, signUp: action.payload };
    case LOGIN_USER_FAIL:
      return {
        ...state, error: action.payload.message, password: '', rePassword: '', loading: false
      };
    case PASSWORD_CHECK:
      return {
        ...state, error: action.payload, password: '', rePassword: '', loading: false
      };
    case ANNONIMOUS_ACTION:
      return { ...state, ...INITIAL_STATE };
    default:
      return state;
  }
};
