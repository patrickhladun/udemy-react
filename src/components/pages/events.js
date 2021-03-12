import React, { Fragment } from 'react';
import ListEvents from '../event/listEvents.js'
import AddEvent from '../event/addEvent.js'

const Events = () => {
    return(
        <Fragment>
            <h2>Events</h2>
            <AddEvent />
            <ListEvents />
        </Fragment>
    );
}

export default Events;