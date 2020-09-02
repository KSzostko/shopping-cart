import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const StyledWrapper = styled.div`
    max-width: 1200px;
    margin: 10rem auto;
    display: flex;
`;

const StyledTextWrapper = styled.div`
    margin-left: 4rem;
    display: flex;
    flex-direction: column;
`;

const StyledName = styled.h1`
    margin: 0;
    font-weight: 700;
`;

const StyledPrice = styled.span`
    font-size: 1.25rem;
    font-weight: 300;
    margin: 1rem 0 4rem;
`;

const StyledInput = styled.input`
    box-sizing: border-box;
    width: 180px;
    margin-bottom: 2rem;
    padding: .5rem .25rem .5rem .5rem;
`;

function ProductDetails({ name, price, photo }) {
    return (
        <StyledWrapper>
            <img src={photo} alt={name}/>
            <StyledTextWrapper>
                <StyledName>{name}</StyledName>
                <StyledPrice>${price}</StyledPrice>
                <StyledInput type="number" min="1"/>
                <Button>Add To Cart</Button>
            </StyledTextWrapper>
        </StyledWrapper>
    );
}

export default ProductDetails;
