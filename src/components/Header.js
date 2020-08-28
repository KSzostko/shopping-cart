import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledTitle = styled.h1`
    margin-bottom: .25rem;
    font-size: 2.5rem;
    letter-spacing: 5px;
    text-transform: uppercase;
`;

const StyledText = styled.p`
    margin-top: 0;
    color: #bbb;
    font-weight: 300;
`;

function Header() {
    return (
        <StyledHeader>
            <StyledTitle>Store</StyledTitle>
            <StyledText>Happy shopping!</StyledText>
        </StyledHeader>
    );
}

export default Header;
