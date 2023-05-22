import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";

import Image1 from "../../images/backgrounds/gallery/image1.png";
import Image2 from "../../images/backgrounds/gallery/image2.png";
import Image3 from "../../images/backgrounds/gallery/image3.png";
import styled from "styled-components";

const Carousel = () => {
  const settings = {
    className: "center",
    centerMode: true,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    draggable: true,
    pauseOnHover: true,
    swipeToSlide: true,
  };

  return (
    <Slider {...settings} style={{ width: "100%" }}>
      <ImageWrapper>
        <img src={Image1} alt="description1" style={{ objectFit: "cover" }} />
      </ImageWrapper>
      <ImageWrapper>
        <img src={Image2} alt="description2" style={{ objectFit: "cover" }} />
      </ImageWrapper>
      <ImageWrapper>
        <img src={Image3} alt="description3" style={{ objectFit: "cover" }} />
      </ImageWrapper>
    </Slider>
  );
};

const ImageWrapper = styled.div`
  display: flex;
  width: 100%;
  jussify-content: center;

  & > img {
    width: 100%;
    height: 650px;
    cursor: grab;
  }
`;

export default Carousel;
