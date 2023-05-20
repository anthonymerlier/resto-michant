import styled from "styled-components";
import Button from "../ui/Button";
import HeroBG from "../../images/backgrounds/hero_section.png";

export default function HeroSection() {
  return (
    <Section>
      <Container>
        <Title className="primaryColor">
          Bons ingrédients, <br /> Bonnes saveurs, <br /> Belle passion
        </Title>
        <Description className="primaryColor">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget
          dolor in felis lobortis gravida et et leo. Nullam sed tristique nisi.
          Nunc sapien tortor, accumsan a fermentum sed, pharetra at ante.
        </Description>
        <Button variant>Réserver maintenant</Button>
      </Container>
    </Section>
  );
}

const Section = styled.div`
  background: url(${HeroBG});
  background-position: center;
  min-height: 450px;
  background-size: cover;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  padding: 0 30px;
  max-width: 1250px;
  margin: auto;
  width: auto;

  & > * {
    margin: 20px auto;
  }
`;

const Title = styled.h1`
  font-family: "Montserrat";
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 16px;
`;
