import React from 'react';
import styled from 'styled-components';

const StyledSearch = styled.section`
    max-width: 1024px;
    margin: 1rem auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;

const StyledSpan = styled.span`
    font-size: .95rem;
    font-weight: 300;
    margin-bottom: 10px;
    `;

const StyledInput = styled.input`
    min-width: 300px;
    font-size: .95rem;
    padding: .75rem 1rem;
    background-color: #f7f7f9;
    border-style: none;
    margin-bottom: 10px;

    &:focus {
        outline-color: #999;
    }
`;

function Search() {
    return (
        <StyledSearch>
            <StyledSpan>10 products</StyledSpan>
            <StyledInput type="text" placeholder="Search product"/>
        </StyledSearch>
    );
}

export default Search;
