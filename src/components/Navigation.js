import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
    box-shadow: 0 2px 2px #bbb;
`;

const StyledList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
`;

const StyledListItem = styled.li`
    margin: 0 1rem;
`;

const StyledLink = styled.a`
    display: block;
    text-decoration: none;
    color: #000;
`;

function Navigation() {
    return (
        <StyledNav>
            <StyledList>
                <StyledListItem>
                    <StyledLink href="">Store</StyledLink>
                </StyledListItem>
                <StyledListItem>
                    <StyledLink href="">Cart</StyledLink>
                </StyledListItem>
            </StyledList>
        </StyledNav>
    );
}

export default Navigation;
