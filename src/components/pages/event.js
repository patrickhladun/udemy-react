import React, { Fragment } from 'react';

const Event = (props) => {
    console.log(props);
    return(
        <Fragment>
            <h2>Event: {props.match.params.id}</h2>
        </Fragment>
    );
}

export default Event;