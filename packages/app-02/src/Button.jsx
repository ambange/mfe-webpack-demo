import styled, {css} from "styled-components";
import React from "react";

const StyledButton = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  width: 11rem;
  background: ${props => props.bgColor || 'palevioletred'};
  color: white;
  font-size: 1rem;
  font-family: sans-serif;
`;


const Button = ({bgColor, children}) => <StyledButton bgColor={bgColor}>{children}</StyledButton>;


export default Button;

