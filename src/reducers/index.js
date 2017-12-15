import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import UserReducer from './UserReducer';
import BtnReducer from './BtnReducer';

export default combineReducers({
  auth: AuthReducer,
  user: UserReducer,
  btns: BtnReducer,
});
