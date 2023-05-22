import React from "react";
import styled from "styled-components";
import QuoteBG from "../../images/backgrounds/Quote_section.png";

const QuoteBlock = () => {
  return (
    <Layout>
      <CItation className="primaryColor">
        Un bon restaurant est comme des vacances ; il vous transporte et devient
        bien plus que simplement la nourriture.
      </CItation>
      <Writer className="primaryColor">Philip Rosenthal</Writer>
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 250px 0;
  justify-content: center;
  align-items: center;
  background-image: url(${QuoteBG});
  background-position: center;
  background-size: cover;

  @media (max-width: 768px) {
    display: none;
  }
`;

const CItation = styled.div`
  font-size: 2rem;
  text-align: center;
  width: 55%;

  @media (max-width: 768px) {
    width: 55%;
    font-size: 1.5rem;
  }
`;

const Writer = styled.div`
  font-size: 1.5rem;
`;

export default QuoteBlock;
