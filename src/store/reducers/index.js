import { combineReducers } from 'redux';

import authentication from './authentication';
import post from './post';
import posts from './posts';

export default combineReducers({
  authentication,
  post,
  posts,
});
