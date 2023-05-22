import React from "react";
import styled from "styled-components";
import ChefBG from "../../images/backgrounds/masterchef_section.png";
import Star from "../../images/icons/star.svg";

const MasterchefBlock = () => {
  return (
    <Container>
      <Wrapper>
        <div style={{ margin: "30px 0" }}>
          <img
            src={ChefBG}
            alt="chef Arnaud Michant"
            style={{ height: "auto", objectFit: "cover", width: "100%" }}
          />
          <h3
            style={{ textAlign: "center", fontWeight: "500", fontSize: "2rem" }}
          >
            Arnaud Michant
          </h3>
        </div>
        <Content>
          <h2>Notre Chef</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
            feugiat massa, et condimentum nunc. Praesent consectetur lorem in
            efficitur dictum. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Sed lobortis egestas
            cursus. Vestibulum faucibus molestie est, ac efficitur ex
            ullamcorper a.
          </p>
          <p>
            Phasellus eleifend nisl et sollicitudin ultrices. Curabitur pulvinar
            ac lacus pellentesque pulvinar. Nullam eget nibh tempus, semper diam
            consequat, aliquet velit. Quisque viverra ultricies finibus.{" "}
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "30px 0",
            }}
          >
            <hr style={{ width: "50%", border: "1px solid " }} />
          </div>
          <h4 style={{ fontSize: "1.5rem", fontWeight: "500" }}>Récompenses</h4>
          <div
            style={{
              display: "flex",
              gap: "5px",
              alignItems: "center",
              margin: "20px 0",
            }}
          >
            Etoiles Michelin :
            <div
              style={{
                marginLeft: "10px",
              }}
            >
              <img src={Star} alt="star" /> <img src={Star} alt="star" />
            </div>
          </div>
        </Content>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  background: #372d20;
  @media (max-width: 768px) {
    background: white;
  }
  color: #b4ac99;
  padding: 100px 0;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 0 30px;
  @media (max-width: 768px) {
    display: block;
  }
  max-width: 1250px;
  & > * {
    width: 50%;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

const Content = styled.div`
  padding: 30px;
  @media (max-width: 768px) {
    padding: 0;
  }

  & h2 {
    font-size: 2.2rem;
    font-weight: 500;
    margin-bottom: 20px;
  }

  p {
    padding: 20px 0;
  }
`;

export default MasterchefBlock;
