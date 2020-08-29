import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    font-size: .75rem;
    display: flex;
    justify-content: center;
    color: #bbb;
    margin: 1rem 0;
`;

function Footer() {
    return (
        <StyledFooter>
            &copy; Shopping Cart
        </StyledFooter>
    );
}

export default Footer;
