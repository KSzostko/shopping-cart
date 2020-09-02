import React from 'react';
import styled from 'styled-components';
import CartItem from './CartItem';

const StyledList = styled.ul`
    list-style: none;
    padding-left: 0;
    display: flex;
    flex-direction: column;
`;

function CartList() {
    return (
        <StyledList>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
        </StyledList>
    );
}

export default CartList;
