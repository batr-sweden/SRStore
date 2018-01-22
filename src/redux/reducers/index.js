import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import BtnReducer from './BtnReducer';
import CheckReducer from './CheckReducer';

export default combineReducers({
  auth: AuthReducer,
  btns: BtnReducer,
  checks: CheckReducer
});
