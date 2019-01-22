import { combineReducers } from 'redux';

import authentication from './authentication';
import city from './city';

export default combineReducers({
  authentication,
  city,
});
