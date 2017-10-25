import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import AirlineMgmt from './components/AirlineMgmt/AirlineMgmt';
import AirlineRecord from './components/AirlineMgmt/AirlineRecord/AirlineRecord';
import AirlineNewRecord from './components/AirlineMgmt/AirlineNewRecord/AirlineNewRecord';
import AirlineUpdate from './components/AirlineMgmt/AirlineUpdate/AirlineUpdate';
import ProfitComparison from './components/ProfitComparison/ProfitComparison';
import CustomerMgmt from './components/CustomerMgmt/CustomerMgmt';
import CustomerRecord from './components/CustomerMgmt/CustomerRecord/CustomerRecord';
import CustomerUpdate from './components/CustomerMgmt/CustomerUpdate/CustomerUpdate';


export default (
    <HashRouter>
        <div>
            <Route component={Login} exact path='/' />
            <Route component={Dashboard} path='/dashboard' />
            <Route component={AirlineMgmt} path='/airlinemgmt' />
            <Route component={AirlineRecord} path='/airlinerecord' />
            <Route component={AirlineNewRecord} path='/airlinenewrecord' />
            <Route component={AirlineUpdate} path='/airlineupdate' />
            <Route component={ProfitComparison} path='/profitcomparison' />
            <Route component={CustomerMgmt} path='/customermgmt' />
            <Route component={CustomerRecord} path='/customerrecord' />
            <Route component={CustomerUpdate} path ='/customerupdate' />
        </div>
    </HashRouter>
)