import React from 'react';
import ReactDOM from 'react-dom';

// Used for browser Routing
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// Used for 404 page, plays youtube video
import YouTube from 'react-youtube';

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

const _404Opts = {
    height: '390', 
    width: '640',
    playerVars: {
        autoplay: 1
    }
}
const NotFoundPage = () => (
    <div>
        <YouTube 
            videoId="ZZ5LpwO-An4"
            opts={_404Opts}
        />
    </div>
);

const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/> {/* exact route so / doesnt get called to every render */}
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));