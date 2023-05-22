import React from "react";
import styled from "styled-components";
import Carousel from "../lib/Carousel";

const GalleryBlock = () => {
  return (
    <>
      <Container>
        <h2 style={{ fontSize: "2.2rem", fontWeight: "500" }}>Notre galerie</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
          feugiat massa, et condimentum nunc. Praesent consectetur lorem in
          efficitur dictum. Vestibulum ante ipsum primis in faucibus orci luctus
          et ultrices posuere cubilia curae; Sed lobortis egestas cursus.
          Vestibulum faucibus molestie est, ac efficitur ex ullamcorper a.
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
`;

export default GalleryBlock;
