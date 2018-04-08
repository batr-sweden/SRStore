import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import CheckReducer from './CheckReducer';
import UserReducer from './UserReducer';

export default combineReducers({
  auth: AuthReducer,
  checks: CheckReducer,
  user: UserReducer
});
