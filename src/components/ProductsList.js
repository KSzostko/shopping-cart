import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
    max-width: 1024px;
    margin: 0 auto;
`;

const StyledList = styled.ul`
    list-style: none;
    padding-left: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 1rem;
`;

function ProductsList() {
    return (
        <StyledSection>
            <StyledList>
                <li>Product item</li>
                <li>Product item</li>
                <li>Product item</li>
                <li>Product item</li>
            </StyledList>
        </StyledSection>
    );
}

export default ProductsList;
