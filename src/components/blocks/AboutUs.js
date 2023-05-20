import React from "react";
import styled from "styled-components";

const AboutUs = () => {
  return (
    <div>
      <Container>
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio
          purus, viverra in euismod eu, molestie non dui. Duis tempor velit non
          leo iaculis, convallis volutpat leo semper. Donec molestie turpis sed
          consectetur ultricies. Sed semper posuere facilisis. Phasellus et
          sagittis eros. Pellentesque feugiat mauris dolor, sit amet pharetra
          tortor feugiat a.
        </p>
        <p>
          Nam eu viverra ante. Pellentesque in felis massa. Vivamus non risus
          turpis. Integer in congue lacus, ut sodales est. Pellentesque sed dui
          non nulla laoreet efficitur. Sed lobortis sagittis velit, in
          vestibulum ex cursus eu. Integer consectetur, ipsum venenatis placerat
          tincidunt, mauris dolor volutpat felis, eu blandit velit metus non
          ipsum. Morbi id dolor sit amet nibh accumsan convallis et at est.
        </p>
      </Container>
    </div>
  );
};

const Container = styled.div`
  max-width: 1250px;
  margin: 70px auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;

  h2 {
    margin: 30px 0;
  }

  p {
    text-align: justify;
    padding: 20px auto;
  }
`;

export default AboutUs;
