// Imports: Dependencies
import {combineReducers} from 'redux';
// Imports: Reducers
import {counterReducer} from './counterReducer';
// Redux: Root Reducer
// const rootReducer = combineReducers({
//   counter1: counterReducer,
// });
// const rootReducer = combineReducers({counterReducer});
const rootReducer = counterReducer;
// Exports
export default rootReducer;
