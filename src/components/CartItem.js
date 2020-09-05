import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { removeItem, addQuantity, subtractQuantity } from '../redux/actions';
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

function CartItem({ productId, name, price, quantity, photo }) {
    const dispatch = useDispatch();
    
    const handleAddClick = () => {
        dispatch(addQuantity(productId));
    };

    const handleSubtractClick = () => {
        if(quantity === 1) {
            dispatch(removeItem(productId));
        } else {
            dispatch(subtractQuantity(productId));
        }
    };
    
    return (
        <StyledListItem>
            <StyledImage src={photo} alt={name}/>
            <div>
                <StyledName>{name}</StyledName>
                <StyledText data-testid={`cart-price${productId}`}>Price: ${price}</StyledText>
            </div>
            <StyledText data-testid={`cart-qty${productId}`}>Qty: {quantity}</StyledText>
            <div>
                <StyledButton data-testid={`cart-add${productId}`} onClick={handleAddClick} black small>
                    <i className="fa fa-plus-circle" aria-hidden="true"></i>
                </StyledButton>
                <StyledButton data-testid={`cart-remove${productId}`} onClick={handleSubtractClick} red small>
                    <i className="fa fa-minus-circle" aria-hidden="true"></i>
                </StyledButton>
            </div>
        </StyledListItem>
    );
}

CartItem.propTypes = {
    productId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    photo: PropTypes.string.isRequired,
};

export default CartItem;
