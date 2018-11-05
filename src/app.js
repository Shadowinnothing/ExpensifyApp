// react stuff
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import moment from 'moment';

// app router
import AppRouter from './routers/AppRouter';

// store
import configureStore from './store/configureStore';
import {startAddExpense, startSetExpenses} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

// CSS
import 'normalize.css/normalize.css'; // <- normalize is used to break default values down so app looks the same in all browsers
import './styles/styles.scss'; // <- custom scss files
import 'react-dates/lib/css/_datepicker.css'; // <- makes react-dates look sexy as hell

// firebase
import {firebase} from './firebase/firebase';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p>Loading</p>, document.getElementById('app'));

store.dispatch(startSetExpenses())
  .then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
  });

// for users loging in and out of app
firebase.auth().onAuthStateChanged((user) => {
  if(user){
    console.log('log in');
  } else {
    console.log('log out');
  }
});
