import { combineReducers } from 'redux';
import BeerReducer from './BeerReducer';
import DudeReducer from './DudeReducer';

export default combineReducers({
  beers: BeerReducer,
  dudes: DudeReducer,
});
