// react stuff
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import moment from 'moment';

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
import 'react-dates/lib/css/_datepicker.css'; // <- makes react-dates look sexy as hell

const store = configureStore();
// store.dispatch(addExpense({
//   description: 'Water Bill',
//   amount: 12043,
//   createdAt: 43526000
// }));
// store.dispatch(addExpense({
//   description: 'Gas Bill',
//   amount: 8467,
//   createdAt: 108453
// }));
// store.dispatch(addExpense({
//   description: 'Rent',
//   amount: 109569,
//   createdAt: 165482
// }));

//const state = store.getState();
//console.log(getVisibleExpenses(state.expenses, state.filters));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
