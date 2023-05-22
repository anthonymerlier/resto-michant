import React from "react";
import styled from "styled-components";
import ContactImage from "../../images/backgrounds/contact_section.png";
import Button from "../ui/Button";

const ContactUs = () => {
  return (
    <Container>
      <Title>Contactez-nous</Title>
      <Wrapper>
        <div className="image">
          <img src={ContactImage} alt="contact" />
        </div>
        <Content className="primaryColor">
          <div
            className="address"
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 16.25C17.0711 16.25 18.75 14.5711 18.75 12.5C18.75 10.4289 17.0711 8.75 15 8.75C12.9289 8.75 11.25 10.4289 11.25 12.5C11.25 14.5711 12.9289 16.25 15 16.25Z"
                stroke="#372D20"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15 2.5C12.3478 2.5 9.8043 3.55357 7.92893 5.42893C6.05357 7.3043 5 9.84784 5 12.5C5 14.865 5.5025 16.4125 6.875 18.125L15 27.5L23.125 18.125C24.4975 16.4125 25 14.865 25 12.5C25 9.84784 23.9464 7.3043 22.0711 5.42893C20.1957 3.55357 17.6522 2.5 15 2.5V2.5Z"
                stroke="#372D20"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            545 Dong Khoi, District 1, Ho Chi Minh City
          </div>
          <p>+123 12345678</p>
          <Button variant>Contactez-nous</Button>
        </Content>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  margin: 100px auto;
  max-width: 1250px;

  .image {
    text-align: right;
    padding-right: 40px;
  }

  img {
    padding: 40px;
    max-height: 550px;
    max-width: 250px;
  }
`;

const Title = styled.h2`
  font-size: 2.2rem;
  text-align: center;
  font-weight: 500;
`;

const Wrapper = styled.div`
  margin: 100px 0;
  display: flex;
  align-items: center;
  > * {
    width: 50%;
  }
`;

const Content = styled.div`
  display: block;

  & > * {
    margin-bottom: 15px;
    margin-top: 15px;
  }
`;

export default ContactUs;
