import React from 'react';
import ReactDOM from 'react-dom';

// Used for browser Routing
import {BrowserRouter, Route} from 'react-router-dom';

// normalize is used to break default values down so app
// looks the same in all browsers
import 'normalize.css/normalize.css';
import './styles/styles.scss'; // <- custom scss files

const ExpenseDashboardPage = () => (
    <div>
        <p>Dashboard component yo</p>
    </div>
);

const AddExpensePage = () => (
    <div>
        <p>all component yo</p>
    </div>
);

const EditExpensePage = () => (
    <div>
        <p>edit component yo</p>
    </div>
);

const HelpPage = () => (
    <div>
        <p>HHHHHEEEEELLLLLPPPPP</p>
    </div>
);

const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/> {/* exact route so / doesnt get called to every render */}
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));