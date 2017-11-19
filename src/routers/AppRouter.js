import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import AddContactPage from '../components/AddContactPage';
import EditContactPage from '../components/EditContactPage';
import NotFoundPage from '../components/NotFoundPage';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <Switch>
            <Route path="/" component={DashboardPage} exact={true} />
            <Route path="/add" component={AddContactPage} />
            <Route path="/edit/:id" component={EditContactPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </Router>
);

export default AppRouter;