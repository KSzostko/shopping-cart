import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';

const StyledWrapper = styled.div`
    margin-left: 10rem;
    width: 250px;
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
    return (
        <StyledWrapper>
            <div>
                <StyledText>Total items</StyledText>
                <StyledNumber>3</StyledNumber>
            </div>
            <StyledPaymentWrapper>
                <StyledText>Total payment</StyledText>
                <StyledNumber>$117.33</StyledNumber>
            </StyledPaymentWrapper>
            <StyledButtonWrapper>
                <Button black>Clear</Button>
                <Button black>Checkout</Button>
            </StyledButtonWrapper>
        </StyledWrapper>
    );
}

export default CartCheckout;
