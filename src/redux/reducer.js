import { ADD_ITEM, REMOVE_ITEM } from './types';

const initialState = {
    cart: []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ITEM:
            return {
                ...state,
                cart: [
                    ...state.cart,
                    action.payload,
                ],
            };
        case REMOVE_ITEM:
            return {
                ...state,
                cart: state.cart.filter(({ id }) => id !== action.payload),
            };
        default:
            return state;
    }
};

export default reducer;