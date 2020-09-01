import React from 'react';
import styled from 'styled-components';
import products from '../products';
import ProductItem from './ProductItem';

const StyledSection = styled.section`
    max-width: 1024px;
    margin: 0 auto;
`;

const StyledList = styled.ul`
    list-style: none;
    padding-left: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, 208px);
    gap: 2rem 4rem;
`;

function ProductsList() {
    return (
        <StyledSection>
            <StyledList>
                {products.map(product => (
                    <ProductItem key={product.id} item={product} />
                ))}
            </StyledList>
        </StyledSection>
    );
}

export default ProductsList;
