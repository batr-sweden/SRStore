import {
  EMAIL_CHANGED,
  CONTACT_CHANGED,
  STORENAME_CHANGED,
  PASSWORD_CHANGED,
  PHONE_CHANGED,
  RE_PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_START,
  PASSWORD_CHECK,
  ANNONIMOUS_ACTION,
  USER_SIGN_OUT,
  SIGNIN_SIGNUP
 } from '../actions/types';

 const INITIAL_STATE = {
  email: '',
  password: '',
  rePassword: '',
  storeName: '',
  contactName: '',
  phone: '',
  user: null,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload, error: '' };
    case CONTACT_CHANGED:
      return { ...state, contactName: action.payload, error: '' };
    case STORENAME_CHANGED:
      return { ...state, storeName: action.payload, error: '' };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload, error: '' };
    case RE_PASSWORD_CHANGED:
      return { ...state, rePassword: action.payload, error: '' };
    case PHONE_CHANGED:
      return { ...state, phone: action.payload, error: '' };
    case LOGIN_USER_START:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_USER_FAIL:
      return {
        ...state, error: action.payload.message, password: '', rePassword: '', loading: false
      };
    case PASSWORD_CHECK:
      return {
        ...state, error: action.payload, password: '', rePassword: '', loading: false
      };
    case SIGNIN_SIGNUP:
      return { ...state, ...INITIAL_STATE, signUp: action.payload
      };
    case ANNONIMOUS_ACTION:
      return { ...state, ...INITIAL_STATE };
    case USER_SIGN_OUT:
        //Set all states back to initial when user signs out
        return { ...state, ...INITIAL_STATE };
    default:
      return state;
  }
};
