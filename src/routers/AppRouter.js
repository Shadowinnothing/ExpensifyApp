import React from 'react';

// Used for browser Routing
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// Components
import ExpenseDashboardPage from '../componenets/ExpenseDashboardPage';
import Header from '../componenets/Header';
import NotFoundPage from '../componenets/NotFoundPage';
import AddExpensePage from '../componenets/AddExpensePage';
import EditExpensePage from '../componenets/EditExpensePage';
import HelpPage from '../componenets/HelpPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}/> {/* exact route so / doesnt get called to every render */}
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;