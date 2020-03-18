import * as types from '../types/event';

export const addEvent = (id, type, description) => ({
    type: types.NEW_EVENT_ADDED,
    payload: {
        id,
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