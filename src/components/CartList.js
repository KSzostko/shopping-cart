import React from 'react';
import styled from 'styled-components';

const StyledList = styled.ul`
    list-style: none;
    padding-left: 0;
`;

function CartList() {
    return (
        <StyledList>
            This is styled list
        </StyledList>
    );
}

export default CartList;
