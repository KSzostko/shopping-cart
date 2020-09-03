import { ADD_ITEM, REMOVE_ITEM, ADD_QUANTITY, SUBTRACT_QUANTITY, CLEAR_CART } from './types';

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
        case ADD_QUANTITY:
            return {
                ...state,
                cart: state.cart.map(item => (
                    item.productId === action.payload.id ? {
                        ...item,
                        quantity: item.quantity + action.payload.amount,
                    } : item
                ))
            };
        case SUBTRACT_QUANTITY:
            return {
                ...state,
                cart: state.cart.map(item => (
                    item.productId === action.payload ? {
                        ...item,
                        quantity: item.quantity - 1,
                    } : item
                ))
            };
        case CLEAR_CART:
            return {
                ...state,
                cart: [],
            };
        default:
            return state;
    }
};

export default reducer;