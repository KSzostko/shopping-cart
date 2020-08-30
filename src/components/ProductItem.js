import React from 'react';
import styled from 'styled-components';
import photo from '../img/hmgoepprod.jpg';

const StyledImage = styled.img`
    width: 100%;
`;

const StyledName = styled.h2`
    font-size: 1.25rem;
    margin: .5rem 0 .75rem;
`;

const StyledPrice = styled.span`
    color: #333;
    font-size: .85rem;
`;

function ProductItem() {
    return (
        <div>
            <StyledImage src={photo} alt="t-shirt"/>
            <div>
                <StyledName>Product Name</StyledName>
                <StyledPrice>$39.11</StyledPrice>
            </div>
        </div>
    );
}

export default ProductItem;
