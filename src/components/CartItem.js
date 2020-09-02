import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const StyledListItem = styled.li`
    display: grid;
    grid-template-columns: auto auto 1fr auto;
`;

const StyledImage = styled.img`
    width: 60px;
`;

function CartItem() {
    return (
        <StyledListItem>
            <StyledImage src="https://lp2.hm.com/hmgoepprod?set=quality[79],source[/b1/6e/b16e4c7d672dc9ae8503cb0a88713a0aeca57ab1.jpg],origin[dam],category[men_tshirtstanks_bestbasics],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/main]" alt="product"/>
            <div>
                <h2>Product Name</h2>
                <p>Price: $39.11</p>
            </div>
            <p>Qty: 1</p>
            <div>
                <Button>+</Button>
                <Button>-</Button>
            </div>
        </StyledListItem>
    );
}

export default CartItem;
