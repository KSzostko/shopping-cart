import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';

const StyledText = styled.p`
    margin-top: 6rem;
`;

function ProductView(props) {
    const { name, price, photo } = props.location.state;
    
    return (
        <>
            <Navigation />
            <StyledText>
                this is product {name} with the price {price}
            </StyledText>
        </>
    );
}

export default ProductView;