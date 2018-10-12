import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './routers/AppRouter';

import 'normalize.css/normalize.css'; // <- normalize is used to break default values down so app looks the same in all browsers
import './styles/styles.scss'; // <- custom scss files

ReactDOM.render(<AppRouter />, document.getElementById('app'));