import React from 'react';

import './styles.css';
import { connect } from 'react-redux';

import * as actions from '../../actions/event';

const DeleteEvent = ({ onClick }) => (
    <button className='delete-event-button' onClick={onClick}>
        {'X'}
    </button>
);

export default connect(
    undefined,
    (dispatch, { babyId, eventId }) => ({
        onClick() {
            dispatch(actions.deleteEvent(babyId, eventId));
        }
    }),
)(DeleteEvent);
