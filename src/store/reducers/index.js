import { combineReducers } from 'redux';

import authentication from './authentication';
import city from './city';
import service from './service';
import user from './user';
import wallet from './wallet';

export default combineReducers({
  authentication,
  city,
  service,
  user,
  wallet,
});
