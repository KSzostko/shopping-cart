import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ProductDetails from '../components/ProductDetails';

function ProductView(props) {
    const { name, price, photo } = props.location.state;
    
    return (
        <>
            <Navigation />
            <ProductDetails name={name} price={price} photo={photo} />
            <Footer />
        </>
    );
}

export default ProductView;