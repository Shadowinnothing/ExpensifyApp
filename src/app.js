// react stuff
import React from 'react';
import ReactDOM from 'react-dom';

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
  createdAt: -11
}));
store.dispatch(addExpense({
  description: 'Gas Bill',
  amount: 84.67,
  createdAt: 10
}));

store.dispatch(setTextFilter('bill'));
const state = store.getState();
console.log(getVisibleExpenses(state.expenses, state.filters));

ReactDOM.render(<AppRouter />, document.getElementById('app'));
