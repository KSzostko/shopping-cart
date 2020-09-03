import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import CartItem from './CartItem';

const StyledList = styled.ul`
    list-style: none;
    padding-left: 0;
    display: flex;
    flex-direction: column;
`;

function CartList() {
    const cart = useSelector(state => state.cart);
    
    return (
        <StyledList>
            {cart.map(item => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    photo={item.photo}
                />
            ))}
        </StyledList>
    );
}

export default CartList;
