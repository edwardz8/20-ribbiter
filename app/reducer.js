import { combineReducers } from 'redux';
import userResource from './resources/user';

const reducer = combineReducers({
  users: createResource.reducer
});
