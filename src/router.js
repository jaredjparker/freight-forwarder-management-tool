import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';


export default (
    <HashRouter>
        <div>
            <Route component={Login} exact path='/' />
            <Route component={Dashboard} path='/dashboard' />
        </div>
    </HashRouter>
)