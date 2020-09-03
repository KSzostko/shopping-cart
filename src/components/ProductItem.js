import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { addItem, addQuantity } from '../redux/actions';
import Button from './Button';

const StyledListItem = styled.li`
    position: relative;
    overflow: hidden;
`;

const StyledOverlay = styled.div`
    background-color: rgba(0, 0, 0, .5);
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translateY(-100%);
    transition: transform 0.25s;

    &.hide {
        transform: translateY(0);
    }
`;

const StyledLink = styled(Link)`
    display: block;
    text-decoration: none;
    text-align: center;
    width: 180px;
    margin: .5rem 0;
    padding: .5rem 0;
    background-color: #ababab;
    color: #fff;
    border-style: none;
    text-transform: uppercase;
    cursor: pointer;
    font-weight: 300;
`;

const StyledImage = styled.img`
    width: 100%;
`;

const StyledName = styled.h2`
    font-size: 1.25rem;
    margin: .5rem 0 .75rem;
`;

const StyledPrice = styled.span`
    color: #333;
    font-size: .85rem;
`;

function ProductItem({ item }) {
    const overlayRef = useRef();

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const cartItems = cart.length;

    const { id, name, price, photo } = item;

    const handleOverlay = () => {
        const overlay = overlayRef.current;
        overlay.classList.toggle('hide');
    }

    const updateCart = () => {
        const index = cart.findIndex(({ productId }) => productId === id);

        if(index === -1) {
            const cartItem = {
                id: cartItems + 1,
                productId: id,
                name,
                price,
                photo,
                quantity: 1,
            };
    
            dispatch(addItem(cartItem));
        } else {
            dispatch(addQuantity(id));
        }
    }
    
    return (
        <StyledListItem
            onMouseEnter={handleOverlay}
            onMouseLeave={handleOverlay}
            data-testid={`store-item${id}`}
        >
            <StyledOverlay ref={overlayRef}>
                <StyledLink to={{
                    pathname: `product/${id}`,
                    state: item,
                }}
                    data-testid={`view${id}`}
                >
                    View
                </StyledLink>
                <Button onClick={updateCart} data-testid={`add${id}`}>Add to cart</Button>
            </StyledOverlay>
            <StyledImage src={photo} alt={name}/>
            <div>
                <StyledName>{name}</StyledName>
                <StyledPrice>${price}</StyledPrice>
            </div>
        </StyledListItem>
    );
}

ProductItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        photo: PropTypes.string.isRequired,
    }),
};

export default ProductItem;
