// react stuff
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

// components
import AppRouter from './routers/AppRouter';

// store
import configureStore from './store/configureStore';
import {addExpense, removeExpense, editExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

// CSS
import 'normalize.css/normalize.css'; // <- normalize is used to break default values down so app looks the same in all browsers
import './styles/styles.scss'; // <- custom scss files

const store = configureStore();
store.dispatch(addExpense({
  description: 'Water Bill',
  amount: 120.43,
  createdAt: 43526000
}));
store.dispatch(addExpense({
  description: 'Gas Bill',
  amount: 84.67,
  createdAt: 108453
}));
store.dispatch(addExpense({
  description: 'Rent',
  amount: 1095.69,
  createdAt: 165482
}));

const state = store.getState();
//console.log(getVisibleExpenses(state.expenses, state.filters));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
