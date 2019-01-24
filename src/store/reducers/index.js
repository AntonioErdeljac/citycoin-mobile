import { combineReducers } from 'redux';

import authentication from './authentication';
import city from './city';
import service from './service';

export default combineReducers({
  authentication,
  city,
  service,
});
