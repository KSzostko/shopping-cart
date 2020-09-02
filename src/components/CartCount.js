import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    height: 1.05rem;
    width: 1.05rem;
    position: absolute;
    top: 10px;
    right: -10px;
    font-size: .75rem;
    background-color: #0082FA;
    color: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function CartCount(props) {
    return (
        <StyledWrapper>
            {props.children}
        </StyledWrapper>
    );
}

CartCount.propTypes = {
    children: PropTypes.number.isRequired,
};

export default CartCount;