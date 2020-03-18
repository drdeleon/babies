import * as types from '../types/baby';
import { v4 as uuidv4 } from 'uuid';

export const createBaby = (id, name, lastName, birthDate) => ({
    type: types.BABY_CREATED,
    payload: {
        id,
        name,
        lastName,
        birthDate,
    },
});

export const selectBaby = (id) => ({
    type: types.BABY_SELECTED,
    payload: id,
});