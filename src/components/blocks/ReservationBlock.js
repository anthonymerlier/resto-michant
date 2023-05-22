import React from "react";
import ReservationBG from "../../images/backgrounds/Reservation_section.png";
import styled from "styled-components";
import InputBlock from "../ui/InputBlock";

const ReservationBlock = () => {
  return (
    <Container>
      <Wrapper>
        <Title className="primaryColor">Réservation</Title>
        <p className="primaryColor">Merci de remplir les champs ci-dessous</p>
        <FormBlock>
          <InputBlock type={"text"} placeholder="Nom" label="Votre nom" />
          <InputBlock
            type={"text"}
            label="Numéro de téléphone"
            placeholder="0102030405"
          />
          <InputBlock
            type={"number"}
            label="Nombre de personnes"
            placeholder="4"
          />
          <InputBlock type={"date"} label="Date" />
          <InputBlock type={"select"} label="Heure" placeholder="11:30" />
        </FormBlock>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  background-image: url(${ReservationBG});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 100px 0;
  margin-top: 100px;
  p {
    text-align: center;
    padding: 50px 0;
  }
`;

const Wrapper = styled.div`
  max-width: 1250px;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.2rem;
  font-weight: 500;
`;

const FormBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }
`;

export default ReservationBlock;
