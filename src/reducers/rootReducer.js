import { combineReducers } from 'redux';
import jobReducer from './job';
import authReducer from './auth';

const rootReducer = combineReducers({
  job: jobReducer,
  auth: authReducer
})

export default rootReducer;
