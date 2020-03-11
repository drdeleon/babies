import * as types from '../types/event';
import { v4 as uuidv4 } from 'uuid';

export const addEvent = (type, description) => ({
    type: types.NEW_EVENT_ADDED,
    payload: {
        id: uuidv4(),
        type,
        description,
        date: new Date(),
    }
});

export const deleteEvent = (babyId, eventId) => ({
    type: types.EVENT_DELETED,
    payload: {
        baby: babyId,
        event: eventId,
    },
});

export const assignEventToBaby = (babyId, eventId) => ({
    type: types.BABY_EVENT_ASSIGNED,
    payload: {
        baby: babyId,
        event: eventId,
    },
});