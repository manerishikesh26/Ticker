import { combineReducers } from 'redux'
import {TickerStore} from './Ticker'


const rootReducer = combineReducers({
  TickerStore,
});

export default rootReducer