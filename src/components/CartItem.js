import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';

const StyledListItem = styled.li`
    display: grid;
    grid-template-columns: auto auto 1fr auto;
    gap: 2rem;
    margin-bottom: 2rem;
`;

const StyledImage = styled.img`
    width: 60px;
`;

const StyledName = styled.h2`
    margin: 0 0 .25rem 0;
`;

const StyledText = styled.p`
    margin: 0;
    font-weight: 300;
`;

const StyledButton = styled(Button)`
    margin-right: 1rem;
    font-size: 1.25rem;
`;

function CartItem({ name, price, quantity, photo }) {
    return (
        <StyledListItem>
            <StyledImage src={photo} alt={name}/>
            <div>
                <StyledName>{name}</StyledName>
                <StyledText>Price: ${price}</StyledText>
            </div>
            <StyledText>Qty: {quantity}</StyledText>
            <div>
                <StyledButton black small>
                    <i className="fa fa-plus-circle" aria-hidden="true"></i>
                </StyledButton>
                <StyledButton red small>
                    <i className="fa fa-minus-circle" aria-hidden="true"></i>
                </StyledButton>
            </div>
        </StyledListItem>
    );
}

CartItem.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    photo: PropTypes.string.isRequired,
};

export default CartItem;
