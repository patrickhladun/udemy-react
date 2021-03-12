import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

class Sidebar extends Component {
    render() {
        return(
            <Fragment>
                <h2>This is my sidebar</h2>
                <ul>
                    <li><NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink></li>
                    <li><NavLink to="/contacts" activeClassName="is-active">Contacts</NavLink></li>
                    <li><NavLink to="/events" activeClassName="is-active">Events</NavLink></li>
                    <li><NavLink to="/event/33" activeClassName="is-active">Event</NavLink></li>
                    <li><NavLink to="/orders" activeClassName="is-active">Orders</NavLink></li>
                    <li><NavLink to="/bookings" activeClassName="is-active">Bookings</NavLink></li>
                </ul>
            </Fragment>
        );
    }
}

export default Sidebar;