import * as types from './types';

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
    case types.EMAIL_CHANGED:
      return { ...state, email: action.payload, error: '' };
    case types.CONTACT_CHANGED:
      return { ...state, contactName: action.payload, error: '' };
    case types.STORENAME_CHANGED:
      return { ...state, storeName: action.payload, error: '' };
    case types.PASSWORD_CHANGED:
      return { ...state, password: action.payload, error: '' };
    case types.RE_PASSWORD_CHANGED:
      return { ...state, rePassword: action.payload, error: '' };
    case types.PHONE_CHANGED:
      return { ...state, phone: action.payload, error: '' };
    case types.LOGIN_USER_START:
      return { ...state, loading: true, error: '' };
    case types.LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case types.LOGIN_USER_FAIL:
      return {
        ...state, error: action.payload.message, password: '', rePassword: '', loading: false
      };
    case types.PASSWORD_CHECK:
      return {
        ...state, error: action.payload, password: '', rePassword: '', loading: false
      };
    case types.SIGNIN_SIGNUP:
      return { ...state, ...INITIAL_STATE, signUp: action.payload
      };
    case types.ANNONIMOUS_ACTION:
      return { ...state, ...INITIAL_STATE };
    case types.USER_SIGN_OUT:
        //Set all states back to initial when user signs out
        return { ...state, ...INITIAL_STATE };
    default:
      return state;
  }
};
