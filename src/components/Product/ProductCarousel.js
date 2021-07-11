import React from "react";
import Slider from "react-slick";
import "./style.scss";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import {Link } from 'react-router-dom'
import ProductItem from "./ProductItem";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <BsChevronRight className="carousel-control" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
        <BsChevronLeft className="carousel-control" />
    </div>
  );
}

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 200,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div
        style={{
          padding: "50px",
          display: "none",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };
  return (
    <div className="carousel-product">
      <Slider {...settings}>
        <div style={{marginRight: "10px"}} >
          <ProductItem />
        </div>
        <div style={{marginRight: "10px"}} >
          <ProductItem />
        </div>
        <div style={{marginRight: "10px"}} >
          <ProductItem />
        </div>
        <div style={{marginRight: "10px"}} >
          <ProductItem />
        </div>
        <div style={{marginRight: "10px"}} >
          <ProductItem />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
