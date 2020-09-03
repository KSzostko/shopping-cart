import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';


const StyledText = styled.p`
    max-width: 800px;
    margin: 6rem auto 0;
    text-align: center;
`;

function AboutView() {
    return (
        <>
            <Navigation />
            <StyledText>
                This project was built to practice using react with redux. We can search for the products, add them and remove them from the cart.
            </StyledText>
            <Footer />
        </>
    );
}

export default AboutView;
