import React from "react";
import styled from "styled-components";
import CloseButton from "./CloseButton";

const Navigation = ({ onClick }) => {
  return (
    <>
      <NavigationContent>
        <Links>
          <li>Accueil</li>
          <li>Menus</li>
          <li onClick={onClick}>
            <CloseButton />
          </li>
        </Links>
      </NavigationContent>
    </>
  );
};

const NavigationContent = styled.div`
  background-color: #372d20;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  color: white;
  position: relative;
`;

const Links = styled.ul`
  list-style: none;
  text-align: center;
  font-size: 1.7rem;
  line-height: 3.5rem;
`;

export default Navigation;
