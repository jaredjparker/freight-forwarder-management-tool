import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import AirlineMgmt from './components/AirlineMgmt/AirlineMgmt';


export default (
    <HashRouter>
        <div>
            <Route component={Login} exact path='/' />
            <Route component={Dashboard} path='/dashboard' />
            <Route component={AirlineMgmt} path='/airlinemgmt' />
        </div>
    </HashRouter>
)