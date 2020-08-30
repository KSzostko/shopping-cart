import React from 'react';
import styled from 'styled-components';
import ProductItem from './ProductItem';

const StyledSection = styled.section`
    max-width: 1024px;
    margin: 0 auto;
`;

const StyledList = styled.ul`
    list-style: none;
    padding-left: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem 4rem;
`;

function ProductsList() {
    return (
        <StyledSection>
            <StyledList>
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </StyledList>
        </StyledSection>
    );
}

export default ProductsList;
