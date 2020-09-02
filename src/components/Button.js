import styled from 'styled-components';

const Button = styled.button`
    width: 180px;
    margin: .5rem 0;
    padding: .5rem 0;
    background-color: ${props => props.black ? "#000" : "#ababab"};
    color: #fff;
    border-style: none;
    text-transform: uppercase;
    cursor: pointer;
    font-weight: 300;
`;

export default Button;