import React, { useRef } from 'react';
import styled from 'styled-components';
import photo from '../img/hmgoepprod.jpg';
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

function ProductItem() {
    const overlayRef = useRef();

    const handleOverlay = () => {
        const overlay = overlayRef.current;
        overlay.classList.toggle('hide');
    }
    
    return (
        <StyledListItem onMouseEnter={handleOverlay} onMouseLeave={handleOverlay}>
            <StyledOverlay ref={overlayRef}>
                <Button>View</Button>
                <Button>Add to cart</Button>
            </StyledOverlay>
            <StyledImage src={photo} alt="t-shirt"/>
            <div>
                <StyledName>Product Name</StyledName>
                <StyledPrice>$39.11</StyledPrice>
            </div>
        </StyledListItem>
    );
}

export default ProductItem;
