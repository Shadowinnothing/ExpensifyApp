import React from 'react';

// Used for browser Routing
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// Components
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={LoginPage} exact={true} /> {/* exact route so / doesnt get called to every render */}
                <Route path="/dashboard" component={ExpenseDashboardPage} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} /> // 404
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
