import React from 'react';
import styled from 'styled-components';
import photo from '../img/hmgoepprod.jpg';

const StyledWrapper = styled.div`
    border: 1px solid #000;
    padding: 1rem;
`;

const StyledImage = styled.img`
    width: 100%;
`;

const StyledName = styled.h2`
    font-size: 1.25rem;
`;

const StyledPrice = styled.span`
    font-size: .85rem;
`;

function ProductItem() {
    return (
        <StyledWrapper>
            <StyledImage src={photo} alt="t-shirt"/>
            <div>
                <StyledName>Product Name</StyledName>
                <StyledPrice>$39.11</StyledPrice>
            </div>
        </StyledWrapper>
    );
}

export default ProductItem;
