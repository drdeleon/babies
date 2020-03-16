import { combineReducers } from 'redux';

import baby, * as babySelectors from './baby';
import event, * as eventSelectors from './event';

const reducer = combineReducers({
    //Reductores
    baby,
    event,
});

export default reducer;

//Babies global selectors.
export const getBaby = (state, id) => babySelectors.getBaby(state.baby, id);
export const getBabies = state => babySelectors.getBabies(state.baby);
export const getSelectedBaby = state => babySelectors.getSelectedBaby(state.baby)

//Events global selectors
export const getEvent = (state, id) => eventSelectors.getEvent(state.event, id);
export const getAllEvents = state => eventSelectors.getAllEvents(state.event);
export const getBabyEvents = (state, babyId) => eventSelectors.getBabyEvents(state.event, babyId);
export const getBabyEvent = (state, babyId, eventId) => eventSelectors.getBabyEvent(state.event, babyId, eventId);