import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {resultsReducer} from "./reducers/resultsReducer";

const rootReducer = combineReducers({
  results: resultsReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));
