import React from 'react';

import './styles.css';
import { connect } from 'react-redux';

import * as actions from '../../actions/event';

const DeleteEvent = ({ onClick }) => (
    <button className='delete-event-button' onClick={onClick}>
        {'x'}
    </button>
);

export default connect(
    undefined,
    (dispatch, { babyId, eventId }) => ({
        onClick() {
            console.log("DeleteEventID:", eventId);
            dispatch(actions.deleteEvent(babyId, eventId));
        }
    }),
)(DeleteEvent);
