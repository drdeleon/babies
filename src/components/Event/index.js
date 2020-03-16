import React from 'react';
import { connect } from 'react-redux';

import './styles.css';

import DeleteEvent from '../DeleteEvent';
import * as selectors from '../../reducers';
import { withRouter } from 'react-router';

const Event = ({ babyId, eventId, eventType, eventDescription, eventDate }) => (
    <div className='event'>
        <DeleteEvent
        key={eventId}
        babyId={babyId}
        eventId={eventId}/>

    <h1> {`${babyId}`} </h1>
    <h1> {`${eventId}`} </h1>
    <h1> {`${eventType}`} </h1>
    <h1>{`${eventDescription}`}</h1>
    <h1>{`${eventDate}`}</h1>

    </div>
);

export default withRouter(connect(
    (state, { eventId }) => ({
        eventType: selectors.getEvent(state, eventId).type,
        eventDate: selectors.getEvent(state, eventId).date,
        eventDescription: selectors.getEvent(state, eventId).description,
        eventId: eventId,
        babyId: selectors.getSelectedBaby(state),
    }
    ),
)( Event ));