import React from 'react';

// Used for browser Routing
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// Components
import Header from '../componenets/Header';
import HelpPage from '../componenets/HelpPage';
import NotFoundPage from '../componenets/NotFoundPage';
import AddExpensePage from '../componenets/AddExpensePage';
import EditExpensePage from '../componenets/EditExpensePage';
import ExpenseDashboardPage from '../componenets/ExpenseDashboardPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}/> {/* exact route so / doesnt get called to every render */}
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;