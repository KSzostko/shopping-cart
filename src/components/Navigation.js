import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
    box-shadow: 0 2px 2px #bbb;
`;

const StyledList = styled.ul`
    list-style: none;
    display: flex;
    max-width: 1024px;
    margin: 0 auto;
`;

const StyledListItem = styled.li`
    margin: 0 2rem;
`;

const StyledLink = styled.a`
    padding: 1.5rem 0;
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
                    <StyledLink href="">About</StyledLink>
                </StyledListItem>
                <StyledListItem>
                    <StyledLink href="">Cart</StyledLink>
                </StyledListItem>
            </StyledList>
        </StyledNav>
    );
}

export default Navigation;
