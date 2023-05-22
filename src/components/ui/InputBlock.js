import React from "react";
import styled from "styled-components";

const InputBlock = ({ type, label, placeholder = "" }) => {
  return (
    <InputContainer>
      <label
        htmlFor="name"
        className="primaryColor"
        style={{ marginBottom: "20px" }}
      >
        {label}
      </label>
      <Input type={type} placeholder={placeholder} />
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 1rem;
  padding: 10px;
  border-bottom: 1px solid white;
`;

export default InputBlock;
