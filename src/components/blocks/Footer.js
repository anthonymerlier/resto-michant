import React from "react";
import Button from "../ui/Button";
import styled from "styled-components";
import Logo from "../../images/logo/Logo.svg";

const Footer = () => {
  return (
    <Wrapper>
      <LogoBlock>
        <img src={Logo} alt="logo" />
      </LogoBlock>
      <Menu>
        <MenuItem>Accueil</MenuItem>
        <MenuItem>Prestations</MenuItem>
        <MenuItem>À propos</MenuItem>
        <MenuItem>Contact</MenuItem>
      </Menu>
      <Button variant>Réservation</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
  justify-content: space-between;
  max-width: 1250px;
  margin: 50px auto;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const LogoBlock = styled.div``;

const Menu = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  padding: 0;
  margin: 0;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MenuItem = styled.li`
  /* Ajouter le style CSS pour chaque élément du menu */
`;

export default Footer;
