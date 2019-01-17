import { combineReducers } from 'redux';

import post from './post';
import posts from './posts';

export default combineReducers({
  post,
  posts,
});
