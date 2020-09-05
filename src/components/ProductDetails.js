import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, addQuantity } from '../redux/actions';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';

const StyledWrapper = styled.div`
    max-width: 1200px;
    margin: 10rem auto 2rem;
    display: flex;
`;

const StyledImage = styled.img`
    width: 400px;
`;

const StyledTextWrapper = styled.div`
    margin-left: 4rem;
    display: flex;
    flex-direction: column;
`;

const StyledName = styled.h1`
    margin: 0;
    font-weight: 700;
`;

const StyledPrice = styled.span`
    font-size: 1.25rem;
    font-weight: 300;
    margin: 1rem 0 4rem;
`;

const StyledInput = styled.input`
    box-sizing: border-box;
    width: 180px;
    margin-bottom: 2rem;
    padding: .5rem .25rem .5rem .5rem;
`;

function ProductDetails({ name, price, photo, prodId }) {
    const [amount, setAmount] = useState(1);

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const cartItems = cart.length;

    const handleChange = e => {
        const number = e.target.value;
        setAmount(number);
    };

    const updateCart = () => {
        const index = cart.findIndex(({ productId }) => productId === prodId);

        if(index === -1) {
            const cartItem = {
                id: cartItems + 1,
                productId: prodId,
                name,
                price,
                photo,
                quantity: parseInt(amount),
            };
    
            dispatch(addItem(cartItem));
        } else {
            dispatch(addQuantity(prodId, parseInt(amount)));
        }
    };
    
    return (
        <StyledWrapper>
            <StyledImage src={photo} alt={name}/>
            <StyledTextWrapper>
                <StyledName>{name}</StyledName>
                <StyledPrice>${price}</StyledPrice>
                <StyledInput
                    data-testid="amount-input"
                    onChange={handleChange} 
                    type="number" 
                    min="1"
                    value={amount}
                />
                <Button onClick={updateCart} black>Add To Cart</Button>
            </StyledTextWrapper>
        </StyledWrapper>
    );
}

ProductDetails.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    photo: PropTypes.string.isRequired,
    prodId: PropTypes.number.isRequired,
};

export default ProductDetails;
