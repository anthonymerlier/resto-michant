import React from "react";
import styled from "styled-components";

const Burger = ({ onClick }) => {
  return (
    <BurgerButton onClick={onClick}>
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_44_142)">
          <path
            d="M12.5 16.6667H37.5V19.4445H12.5V16.6667ZM12.5 23.6112H37.5V26.389H12.5V23.6112ZM12.5 30.5556H37.5V33.3334H12.5V30.5556Z"
            fill="#372D20"
          />
          <circle cx="25" cy="25" r="24.5" stroke="#372D20" />
        </g>
        <defs>
          <clipPath id="clip0_44_142">
            <rect width="50" height="50" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </BurgerButton>
  );
};

const BurgerButton = styled.div`
  cursor: pointer;
`;

export default Burger;
