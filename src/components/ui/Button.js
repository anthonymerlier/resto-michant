import styled from "styled-components";

const Button = ({ children, variant = false }) => {
  return <ButtonStyled variant={variant}>{children}</ButtonStyled>;
};

const ButtonStyled = styled.button`
  display: inline-block;
  padding: 15px 20px;
  width: auto;
  font-size: 16px;
  border-radius: 7px;
  ${({ variant }) =>
    variant
      ? `
    background-color: transparent;
    border: 2px solid #b4ac99;
    color: #b4ac99;
    &:hover {
      background-color: #b4ac99;
      color: white;
      cursor: pointer;
    }
  `
      : `
    border: 0;
    background-color: #b4ac99;
    border: 2px solid #b4ac99;
    &:hover {
      background-color: transparent;
      color: #b4ac99;
      cursor: pointer;
    }
  `};
`;

export default Button;
