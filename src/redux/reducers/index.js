import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import BtnReducer from './BtnReducer';

export default combineReducers({
  auth: AuthReducer,
  btns: BtnReducer
});
