import { combineReducers } from 'redux';
import userResource from './resources/user';
import postResource from './resources/posts';

export default combineReducers({
  users: userResource.reducer,
  posts: postResource.reducer,
});
