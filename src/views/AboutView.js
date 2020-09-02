import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';


const StyledText = styled.p`
    margin-top: 6rem;
`;

function AboutView() {
    return (
        <>
            <Navigation />
            <StyledText>
                this is about view
            </StyledText>
            <Footer />
        </>
    );
}

export default AboutView;
