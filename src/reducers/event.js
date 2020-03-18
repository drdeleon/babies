import { combineReducers } from 'redux';
import omit from 'lodash/omit';

import * as types from '../types/event';

export const EVENT_TYPES = ['Siesta', 'Pacha', 'Cambio de pañal (popó)', 'Cambio de pañal (pipi)', 'Pecho']

const order = (state = [], action) => {
    switch (action.type) {
        case types.NEW_EVENT_ADDED:
            {
                return [...state, action.payload.id]
            }

        case types.EVENT_DELETED:
            {
                return state.filter(id => id !== action.payload.event)
            }

        default:
            return state;
    }
};

const byId = (state = {}, action) => {
    switch (action.type) {
        case types.NEW_EVENT_ADDED:
            {
                return {
                    ...state,
                    [action.payload.id]: action.payload,
                };
            }

        case types.EVENT_DELETED:
            {
                return omit(state, action.payload.event);
            }

        default:
            return state;
    }
}

const eventsToBaby = (state = {}, action) => {
    switch (action.type) {
        case types.BABY_EVENT_ASSIGNED:
            {
                if (action.payload.baby in state) {
                    return {
                        ...state,
                        [action.payload.baby]: [...state[action.payload.baby], action.payload.event]
                    };
                } else {
                    return {
                        ...state,
                        [action.payload.baby]: [action.payload.event],
                    };
                };
            }
        case types.EVENT_DELETED:
            {
                return {
                    ...state,
                    [action.payload.baby]: state[action.payload.baby].filter(event => event !== action.payload.event),
                }
            }

        default:
            return state;
    }
}

const event = combineReducers({
    byId,
    order,
    eventsToBaby,
})

export default event;

//Local event selectors.
export const getEvent = (state, id) => state.byId[id];

export const getAllEvents = state => state.order.map(
    id => getEvent(state, id),
).filter(event => event !== null);

export const getBabyEvents = (state, babyId) => {
    console.log("BabyId:", babyId);
    console.log("Baby events:", state.eventsToBaby[babyId])

    if (state.eventsToBaby[babyId] !== undefined) {
        return state.eventsToBaby[babyId].map(eventId => getEvent(state, eventId)).filter(event => event !== null);
    }

    return [];
};

export const getBabyEvent = (state, babyId, eventId) => getEvent(state, state.eventsToBaby[babyId].find(id => id === eventId));