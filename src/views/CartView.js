import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';

const StyledText = styled.p`
    margin-top: 6rem;
`;

function CartView() {
    return (
        <>
            <Navigation />
            <StyledText>
                this is cart view
            </StyledText>
        </>
    );
}

export default CartView;
