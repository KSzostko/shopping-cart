import React from 'react';
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

function CartItem() {
    return (
        <StyledListItem>
            <StyledImage src="https://lp2.hm.com/hmgoepprod?set=quality[79],source[/b1/6e/b16e4c7d672dc9ae8503cb0a88713a0aeca57ab1.jpg],origin[dam],category[men_tshirtstanks_bestbasics],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/main]" alt="product"/>
            <div>
                <StyledName>Product Name</StyledName>
                <StyledText>Price: $39.11</StyledText>
            </div>
            <StyledText>Qty: 1</StyledText>
            <div>
                <StyledButton black small>
                    <i class="fa fa-plus-circle" aria-hidden="true"></i>
                </StyledButton>
                <StyledButton red small>
                    <i class="fa fa-minus-circle" aria-hidden="true"></i>
                </StyledButton>
            </div>
        </StyledListItem>
    );
}

export default CartItem;
