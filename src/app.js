// react stuff
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import moment from 'moment';

// app router
import AppRouter, {history} from './routers/AppRouter';

// components
import LoadingPage from './components/LoadingPage';

// store
import configureStore from './store/configureStore';
import {startAddExpense, startSetExpenses} from './actions/expenses';
import {login, logout} from './actions/auth';
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

// used to prevent app from rerendering
let hasRendered = false;
const renderApp = () => {
  if(!hasRendered){
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  };
};

// rendered loading page until expenses are fetched
ReactDOM.render(<LoadingPage />, document.getElementById('app'));

// for users logging in and out of app
// history is imported from AppRouter, not the client!
firebase.auth().onAuthStateChanged((user) => {
  if(user){
    store.dispatch(login(user.uid));
    // sends expenses from firebase to client
    store.dispatch(startSetExpenses()).then(() => {renderApp()});

    // if user logs in, take them to dashboard
    if(history.location.pathname === '/'){
      history.push('/dashboard');
    };
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/'); // if someone logsout, bring them to login page
  }
});
