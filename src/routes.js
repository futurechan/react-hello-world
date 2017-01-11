import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Dashboard from './components/dashboard/Dashboard';
import Threats from './components/threats/Threats';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Dashboard} />
        <Route path="/threats" component={Threats} />
    </Route>
);