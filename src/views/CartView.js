import React from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import CartCheckout from '../components/CartCheckout';
import Footer from '../components/Footer';

function CartView() {
    return (
        <>
            <Navigation />
            <Header title="Cart" subtitle="Here you can confirm your reservation" />
            <CartCheckout />
            <Footer />
        </>
    );
}

export default CartView;
