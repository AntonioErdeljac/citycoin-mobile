import { combineReducers } from 'redux';

import authentication from './authentication';
import city from './city';
import service from './service';
import user from './user';

export default combineReducers({
  authentication,
  city,
  service,
  user,
});
