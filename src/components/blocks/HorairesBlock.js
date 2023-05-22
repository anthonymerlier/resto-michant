import React from "react";
import styled from "styled-components";
import HorairesBG from "../../images/backgrounds/horaires_section.png";

const HorairesBlock = () => {
  const ouvertures = [
    {
      date: "Lundi",
      heure: "9h - 18h",
    },
    {
      date: "Mardi",
      heure: "9h - 18h",
    },
    {
      date: "Mercredi",
      heure: "9h - 18h",
    },
    {
      date: "Jeudi",
      heure: "9h - 18h",
    },
    {
      date: "Vendredi",
      heure: "9h - 18h",
    },
    {
      date: "Samedi",
      heure: "9h - 18h",
    },
    {
      date: "Dimanche",
      heure: "9h - 18h",
    },
  ];

  return (
    <Container>
      <Wrapper>
        <Title className="primaryColor">Horaires</Title>
        <Horaires>
          {ouvertures.map((ouverture, index) => {
            return (
              <>
                <Day className="primaryColor">{ouverture.date}</Day>
                <Time className="primaryColor">{ouverture.heure}</Time>
              </>
            );
          })}
        </Horaires>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  background-image: url(${HorairesBG});
  background-size: cover;
  background-repeat: no-repeat;
  }
`;

const Wrapper = styled.div`
  text-align: center;
  max-width: 1250px;
  margin: auto;
  padding: 50px;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
`;

const Horaires = styled.div`
  margin: 100px auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr); // 2 colonnes avec une largeur égale
  grid-gap: 0.5rem; // espace entre les éléments de la grille
`;

const Day = styled.div`
  font-weight: bold;
`;

const Time = styled.div``;

export default HorairesBlock;
