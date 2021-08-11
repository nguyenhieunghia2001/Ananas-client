import React from "react";
import Slider from "react-slick";
import "./style.scss";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import ProductItem from "./ProductItem";

function SampleNextArrow({ className, style, onClick }) {
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

function SamplePrevArrow({ className, style, onClick }) {
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

const Banner = ({ products }) => {
  const settings = {
    dots: true,
    infinite: false,
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
        {products &&
          Array.isArray(products) &&
          products.map((prd) => (
            <div style={{ marginRight: "10px" }} key={prd?._id} >
              <ProductItem product={prd} />
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default Banner;
