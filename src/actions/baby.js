import * as types from '../types/baby';
import { v4 as uuidv4 } from 'uuid';

export const createBaby = (name, lastName, birthDate) => ({
    type: types.BABY_CREATED,
    payload: {
        id: uuidv4(),
        name,
        lastName,
        birthDate,
    },
});

export const selectBaby = (id) => ({
    type: types.BABY_SELECTED,
    payload: id,
});