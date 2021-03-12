import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/structure/header';
import Sidebar from '../components/structure/sidebar';
import Dashboard from '../components/pages/dashboard';
import Contacts from '../components/pages/contacts';
import Events from '../components/pages/events';
import Event from '../components/pages/event';
import Orders from '../components/pages/orders';
import NotFound from '../components/pages/notfound';

const AppRouter = () => (
    <BrowserRouter>
        <Fragment>
            <div className="page-wrapper">
                <div className="sidebar">
                    <Sidebar />
                </div>
                <div className="content">
                    <Header title='Fitsoft' description='Welcome all Personal Trainers'/>
                    <Switch>
                        <Route path="/" component={Dashboard} exact={true}/>
                        <Route path="/events" component={Events} />
                        <Route path="/event/:id" component={Event} />
                        <Route path="/orders" component={Orders} />
                        <Route path="/contacts" component={Contacts} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </div>
        </Fragment>
        
    </BrowserRouter>
);

export default AppRouter;