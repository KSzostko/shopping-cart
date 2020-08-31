import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background-color: #fff;
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
    padding: 1.25rem 0 1rem;
    display: block;
    text-decoration: none;
    color: #000;

    &::after {
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        margin-top: .25rem;
        background-color: #999;
        transform: scale(0);
        transition: transform .25s;
    }

    &:hover::after {
        transform: scale(1);
    }
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
