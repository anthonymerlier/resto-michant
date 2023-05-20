import styled from "styled-components";
import Button from "../ui/Button";
import HeroBG from "../../images/backgrounds/hero_section.png";

export default function HeroSection() {
  return (
    <Section>
      <Container>
        <Title className="primaryColor">
          <div>Bons ingrédients,</div> <div>Bonnes saveurs, </div>
          <div>Belle passion</div>
        </Title>
        <Description className="primaryColor">
          <p>
            Bienvenue au Quai Antique, l'adresse incontournable de la
            gastronomie à savourer. Plongez dans un univers enchanteur, où les
            saveurs d'antan se marient à l'élégance contemporaine, et l'œuvre
            d'un maître culinaire renommé, Monsieur Michant, dont l'expertise et
            la passion se dévoilent à chaque bouchée.
          </p>
          <p>
            <span>Réservez votre table dès maintenant</span> et préparez-vous à
            embarquer pour un voyage gustatif hors du commun au Quai Antique.
          </p>
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
  padding: 100px 30px;
  max-width: 1250px;
  margin: auto;
  width: auto;

  & > * {
    margin: 25px auto;
  }

  p {
    margin: 15px auto;

    span {
      font-weight: bold;
    }
  }
`;

const Title = styled.h1`
  font-family: "Montserrat";
  font-weight: bold;
  line-height: 1.35;
`;

const Description = styled.p`
  font-size: 16px;
`;
