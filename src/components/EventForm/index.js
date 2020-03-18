import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import 'semantic-ui-css/semantic.min.css';
import './styles.css';
import { Dropdown } from 'semantic-ui-react';

import * as actions from '../../actions/event';
import * as selectors from '../../reducers';

import { EVENT_TYPES } from '../../reducers/event';

const EventForm = ({ onSubmit, selectedBaby }) => {
    const [eventType, changeEventType] = useState('');
    const [description, changeDescription] = useState('');

    const eventTypes = EVENT_TYPES.map(
        event => ({
            text: event,
            value: event,
        })
    );

    return (
        <div className="event-form">
            <h1 className="event-form-title"> CREAR NUEVO EVENTO </h1>

            <Dropdown
                className="types-dropdown"
                placeholder='Event Type'
                fluid
                selection
                value={eventType}
                onChange={(event, {value}) => changeEventType(value)}
                options={eventTypes}
            />

            <textarea
            className="event-form-description-input"
            type="text"
            placeholder="Descripción"
            cols="40"
            rows="5"
            value={description}
            onChange={e => changeDescription(e.target.value)}
            />  

            <button 
            className="create-event-button"
            type="submit"
            onClick={
                () => onSubmit( selectedBaby, eventType, description, changeEventType, changeDescription )
            }>
                {'CREAR'}
            </button>
        </div>
    )
};

export default withRouter(
    connect(
        state => ({
            selectedBaby: selectors.getSelectedBaby(state),
        }),
        ( dispatch ) => ({
            onSubmit( selectedBaby, type, description, changeEventType, changeDescription ){
                const eventId = uuidv4()

                dispatch(actions.addEvent(eventId, type, description));
                dispatch(actions.assignEventToBaby(selectedBaby, eventId));

                changeEventType('');
                changeDescription('');
            }
        }),
    )( EventForm )
);