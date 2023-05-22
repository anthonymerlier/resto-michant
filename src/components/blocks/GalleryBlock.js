import React from "react";
import styled from "styled-components";
import Carousel from "../lib/Carousel";

const GalleryBlock = () => {
  return (
    <>
      <Container>
        <h2 style={{ fontSize: "2.2rem", fontWeight: "500" }}>Notre galerie</h2>
        <p>
          Découvrez en images l'ambiance chaleureuse et conviviale de notre
          restaurant ainsi que quelques-unes de nos créations culinaires les
          plus appréciées.
        </p>
      </Container>
      <Carousel />
    </>
  );
};

const Container = styled.div`
  max-width: 1250px;
  margin: 120px auto 50px auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px;
`;

export default GalleryBlock;
