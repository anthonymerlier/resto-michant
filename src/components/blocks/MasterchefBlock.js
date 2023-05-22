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
            Notre chef du Quai Antique est un talentueux créateur culinaire
            reconnu pour son savoir-faire et sa passion pour la gastronomie.
            Fort de nombreuses années d'expérience dans les cuisines les plus
            prestigieuses, notre chef apporte un savoir unique à la préparation
            de chaque plat et s'efforce de créer des expériences culinaires
            inoubliables pour nos clients.
          </p>
          <p>
            Il sélectionne avec soin les meilleurs ingrédients locaux et les
            plus frais pour créer des plats uniques et raffinés qui raviront les
            palais les plus exigeants. Chez Quai Antique, notre chef est le cœur
            et l'âme de notre restaurant, apportant une touche personnelle à
            chaque plat et créant une expérience culinaire mémorable pour chaque
            client. Nous sommes fiers de vous présenter notre chef et de
            partager son talent avec vous.
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
