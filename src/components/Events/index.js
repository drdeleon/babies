import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import './styles.css';
import * as selectors from '../../reducers'

import Event from '../Event';

const Events = ({ babyEvents, babyId }) => (
    <div className="holahola">
        {
            babyEvents.length === 0 ? (
                <h1>
                    {'No hay evento'}
                </h1>
            ) : (
                babyEvents.map(
                    event => (
                        <Event
                        key={event.id}
                        eventId={event.id}
                        babyId={babyId}
                        />
                    ),
                )
            )
        }
    </div>
);

export default withRouter(connect(
    state => {
        let selectedBaby = selectors.getSelectedBaby(state);

        return {
            babyEvents: selectors.getBabyEvents(state, selectedBaby),
            babyId: selectedBaby,
        }
    },
)( Events ));