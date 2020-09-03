import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Button from '../components/Button';

const StyledWrapper = styled.div`
    margin-left: 4rem;
    width: 250px;
    height: fit-content;
    border: 1px solid #bbb;
    padding: 1rem 2rem;
`;

const StyledText = styled.p`
    margin-bottom: .5rem;
    font-size: 1.15rem;
    font-weight: 300;
`;

const StyledNumber = styled.span`
    font-size: 1.5rem;
`;

const StyledPaymentWrapper = styled.div`
    margin-bottom: 1rem;
`;

const StyledButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid #bbb;
    padding-top: 1rem;
`;

function CartCheckout() {
    const cart = useSelector(state => state.cart);
    const totalItems = cart.reduce((acc, curr) => acc + curr.quantity, 0);
    const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
    
    return (
        <StyledWrapper>
            <div>
                <StyledText>Total items</StyledText>
                <StyledNumber>{totalItems}</StyledNumber>
            </div>
            <StyledPaymentWrapper>
                <StyledText>Total payment</StyledText>
                <StyledNumber>${totalPrice.toFixed(2)}</StyledNumber>
            </StyledPaymentWrapper>
            <StyledButtonWrapper>
                <Button black>Clear</Button>
                <Button black>Checkout</Button>
            </StyledButtonWrapper>
        </StyledWrapper>
    );
}

export default CartCheckout;
