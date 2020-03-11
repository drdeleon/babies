import { combineReducers } from 'redux';

import * as types from '../types/baby';

const order = (state = [], action) => {
    switch (action.type) {
        case types.BABY_CREATED:
            {
                return [...state, action.payload.id]
            }

        default:
            return state;
    }
};

const byId = (state = {}, action) => {
    switch (action.type) {
        case types.BABY_CREATED:
            {
                return {
                    ...state,
                    [action.payload.id]: action.payload,
                }
            }

        default:
            return state;
    }
}

const selected = (state = null, action) => {
    switch (action.type) {
        case types.BABY_SELECTED:
            {
                return action.payload;
            }

        default:
            return state;
    }
};

const baby = combineReducers({
    order,
    byId,
    selected,
});

export default baby;

//Local baby selectors.
export const getBaby = (state, id) => state.byId[id]
export const getBabies = state => state.order.map(
    id => getBaby(state, id),
).filter(agent => agent != null);

export const getSelectedBaby = (state) => state.selected