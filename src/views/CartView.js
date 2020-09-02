import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import CartList from '../components/CartList';
import CartCheckout from '../components/CartCheckout';
import Footer from '../components/Footer';

const StyledSection = styled.section`
    max-width: 1024px;
    margin: 2rem auto;
    display: grid;
    grid-template-columns: 1fr auto;
`;

function CartView() {
    return (
        <>
            <Navigation />
            <Header title="Cart" subtitle="Here you can confirm your reservation" />
            <StyledSection>
                <CartList />
                <CartCheckout />
            </StyledSection>
            <Footer />
        </>
    );
}

export default CartView;
