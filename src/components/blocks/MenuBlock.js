import React from "react";
import styled from "styled-components";
import MenuBG from "../../images/backgrounds/Menu_section.png";
import MaindishListBlock from "./Maindish/MaindishListBlock";

const MenuBlock = () => {
  const values = [
    {
      recipe: ["Foie gras de canard mi-cuit", "Oeufs"],
      price: "369.00 €",
    },
    {
      recipe: ["Boeuf Bourguignon", "Omelette norvégienne"],
      price: "119.00 €",
    },
    {
      recipe: ["Poulet à la truffe", "Café gourmand"],
      price: "87.00 €",
    },
    {
      recipe: ["Foie gras de canard mi-cuit", "Oeufs"],
      price: "369.00 €",
    },
    {
      recipe: ["Boeuf Bourguignon", "Omelette norvégienne"],
      price: "119.00 €",
    },
    {
      recipe: ["Poulet à la truffe", "Café gourmand"],
      price: "87.00 €",
    },
  ];

  return (
    <Container>
      <Arrows>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 7.5L13.5 15L21 22.5L19.5 25.5L9 15L19.5 4.5L21 7.5Z"
            fill="black"
          />
        </svg>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 7.5L16.5 15L9 22.5L10.5 25.5L21 15L10.5 4.5L9 7.5Z"
            fill="black"
          />
        </svg>
      </Arrows>
      <div>
        <Title>Menu</Title>
        <MaindishContainer className="primaryColor">
          <h2
            style={{
              fontWeight: "500",
              textAlign: "center",
              padding: "30px 0",
              fontSize: "2rem",
            }}
          >
            Plats principaux
          </h2>
          {values.map((value, index) => {
            return <MaindishListBlock key={index} values={value} />;
          })}
        </MaindishContainer>
      </div>
      <BackgroundImage />
    </Container>
  );
};

const Container = styled.div`
  max-width: 1250px;
  margin: 120px auto 170px auto;
  position: relative;
  display: flex;
  gap: 30px;
  @media (max-width: 768px) {
    justify-content: center;
    gap: 0;
    margin: 0;
  }
`;

const Arrows = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 150px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: 500;
  padding: 50px 0;

  @media (max-width: 768px) {
    text-align: center;
    color: white;
  }
`;

const MaindishContainer = styled.div`
  background-color: #372d20;
  border-radius: 12px;
  width: 440px;
  z-index: 100;
  padding: 20px;
  margin: 20px auto;

  @media (max-width: 768px) {
    width: auto;
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  right: 0;
  top 0;
  background-image: url(${MenuBG});
  background-repeat: no-repeat;
  background-size: cover;
  width: 80%;
  height: 110%;
  z-index: -1;

  @media (max-width: 768px) {
      width: 100%;
      height: 100%;
  }
`;

export default MenuBlock;
