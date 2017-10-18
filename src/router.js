import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import AirlineMgmt from './components/AirlineMgmt/AirlineMgmt';
import AirlineRecord from './components/AirlineMgmt/AirlineRecord/AirlineRecord';
import AirlineNewRecord from './components/AirlineMgmt/AirlineNewRecord/AirlineNewRecord';
import AirlineUpdate from './components/AirlineMgmt/AirlineUpdate/AirlineUpdate';


export default (
    <HashRouter>
        <div>
            <Route component={Login} exact path='/' />
            <Route component={Dashboard} path='/dashboard' />
            <Route component={AirlineMgmt} path='/airlinemgmt' />
            <Route component={AirlineRecord} path='/airlinerecord' />
            <Route component={AirlineNewRecord} path='/airlinenewrecord' />
            <Route component={AirlineUpdate} path='/airlineupdate' />
        </div>
    </HashRouter>
)