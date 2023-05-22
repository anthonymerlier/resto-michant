import React from "react";
import styled from "styled-components";

const AboutUs = () => {
  return (
    <div>
      <Container>
        <h2>A propos de nous</h2>
        <p>
          Bienvenue au Quai Antique, un restaurant gastronomique situé dans le
          cœur de la ville. Notre restaurant est fier de proposer une expérience
          culinaire exceptionnelle, offrant une atmosphère chaleureuse et
          accueillante pour tous les convives. Notre menu est composé d'une
          variété de plats gastronomiques, préparés avec les ingrédients les
          plus frais et les plus savoureux.
        </p>
        <p>
          Au-delà de notre passion pour la nourriture, nous sommes également
          passionnés par l'hospitalité et le service à la clientèle. Notre
          équipe de professionnels expérimentés s'efforce toujours de fournir un
          service personnalisé et attentionné pour garantir que chaque client a
          un moment mémorable et satisfaisant.
        </p>
        <p>
          Notre restaurant est conçu pour offrir une expérience intime et
          confortable, idéale pour les occasions spéciales ou les dîners en
          groupe. Nous avons hâte de vous accueillir au Quai Antique pour une
          expérience culinaire exceptionnelle et inoubliable.
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
  gap: 24px;
  padding: 30px;

  h2 {
    margin: 20px 0;
    font-size: 2.2rem;
    font-weight: 500;
  }

  p {
    text-align: justify;
    padding: 20px auto;
  }
`;

export default AboutUs;
