import { ADD_ITEM, REMOVE_ITEM, ADD_QUANTITY, SUBTRACT_QUANTITY } from './types';

export const addItem = item => ({
    type: ADD_ITEM,
    payload: item,
});

export const removeItem = id => ({
    type: REMOVE_ITEM,
    payload: id,
});

export const addQuantity = (id, amount = 1) => ({
    type: ADD_QUANTITY,
    payload: {
        id,
        amount,
    },
});

export const subtractQuantity = (id) => ({
    type: SUBTRACT_QUANTITY,
    payload: id
});