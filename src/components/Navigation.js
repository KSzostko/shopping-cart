import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import CartCount from './CartCount';

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
    position: relative;
    margin: 0 2rem;
`;

const StyledLink = styled(Link)`
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
    const cart = useSelector(state => state.cart);
    const totalItems = cart.reduce((acc, curr) => acc + curr.quantity, 0);
    
    return (
        <StyledNav>
            <StyledList>
                <StyledListItem>
                    <StyledLink to="/">Store</StyledLink>
                </StyledListItem>
                <StyledListItem>
                    <StyledLink to="/about">About</StyledLink>
                </StyledListItem>
                <StyledListItem>
                    <StyledLink to="/cart" data-testid="nav-cart">
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        <CartCount>{totalItems}</CartCount>
                    </StyledLink>
                </StyledListItem>
            </StyledList>
        </StyledNav>
    );
}

export default Navigation;
