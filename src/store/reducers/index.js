import { combineReducers } from 'redux';

import authentication from './authentication';
import city from './city';
import service from './service';
import subscribedService from './subscribedService';
import user from './user';
import wallet from './wallet';

export default combineReducers({
  authentication,
  city,
  service,
  subscribedService,
  user,
  wallet,
});
