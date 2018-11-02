import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

// for using devtools in the browser
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Store Creation
export default() => {
  const store = createStore(
      combineReducers({
          expenses: expensesReducer,
          filters: filtersReducer
      }),
      composeEnhancers(applyMiddleware(thunk))
      //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // <- redux dev tools in chrome
  );

  return store;
};
