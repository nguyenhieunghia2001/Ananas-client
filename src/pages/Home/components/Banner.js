import React from "react";
import Slider from "react-slick";
import Banner1Img from "../../../assets/images/banner1.jpg";
import Banner2Img from "../../../assets/images/banner2.jpg";
import Banner3Img from "../../../assets/images/banner3.jpg";
import "../style.scss";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div
        style={{
          padding: "50px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };
  return (
    <div className="home__banner">
      <Slider {...settings}>
        <div>
          <img src={Banner1Img} alt="ảnh bìa" />
        </div>
        <div>
          <img src={Banner2Img} alt="ảnh bìa" />
        </div>
        <div>
          <img src={Banner3Img} alt="ảnh bìa" />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
