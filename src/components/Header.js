import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHeader = styled.header`
    margin-top: 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledTitle = styled.h1`
    margin-bottom: .25rem;
    font-size: 2.5rem;
    letter-spacing: 5px;
    text-transform: uppercase;
`;

const StyledText = styled.p`
    margin-top: 0;
    color: #bbb;
    font-weight: 300;
`;

function Header({ title, subtitle }) {
    return (
        <StyledHeader>
            <StyledTitle>{title}</StyledTitle>
            <StyledText>{subtitle}</StyledText>
        </StyledHeader>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
};

export default Header;
