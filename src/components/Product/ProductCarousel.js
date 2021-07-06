import React from "react";
import Slider from "react-slick";
import productImg from "../../assets/images/product/1.jpg";
import "./style.scss";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

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
const dots = () => {};

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
        <div>
          <div className="thumbnail">
            <div className="thumbnail__img">
              <img src={productImg} alt="sản phẩm" />
            </div>
            <div className="thumbnail__caption">
              <h4 className="thumbnail__caption-name">
                <a href="">Baseball Cap - Be Positive</a>
              </h4>
              <p className="thumbnail__caption-color">Pink</p>
              <h4 className="thumbnail__caption-price">
                <a href="">275.000 VND</a>
              </h4>
            </div>
          </div>
        </div>
        <div>
          <div className="thumbnail">
            <div className="thumbnail__img">
              <img src={productImg} alt="sản phẩm" />
            </div>
            <div className="thumbnail__caption">
              <h4 className="thumbnail__caption-name">
                <a href="">Baseball Cap - Be Positive</a>
              </h4>
              <p className="thumbnail__caption-color">Pink</p>
              <h4 className="thumbnail__caption-price">
                <a href="">275.000 VND</a>
              </h4>
            </div>
          </div>
        </div>
        <div>
          <div className="thumbnail">
            <div className="thumbnail__img">
              <img src={productImg} alt="sản phẩm" />
            </div>
            <div className="thumbnail__caption">
              <h4 className="thumbnail__caption-name">
                <a href="">Baseball Cap - Be Positive</a>
              </h4>
              <p className="thumbnail__caption-color">Pink</p>
              <h4 className="thumbnail__caption-price">
                <a href="">275.000 VND</a>
              </h4>
            </div>
          </div>
        </div>
        <div>
          <div className="thumbnail">
            <div className="thumbnail__img">
              <img src={productImg} alt="sản phẩm" />
            </div>
            <div className="thumbnail__caption">
              <h4 className="thumbnail__caption-name">
                <a href="">Baseball Cap - Be Positive</a>
              </h4>
              <p className="thumbnail__caption-color">Pink</p>
              <h4 className="thumbnail__caption-price">
                <a href="">275.000 VND</a>
              </h4>
            </div>
          </div>
        </div>
        <div>
          <div className="thumbnail">
            <div className="thumbnail__img">
              <img src={productImg} alt="sản phẩm" />
            </div>
            <div className="thumbnail__caption">
              <h4 className="thumbnail__caption-name">
                <a href="">Baseball Cap - Be Positive</a>
              </h4>
              <p className="thumbnail__caption-color">Pink</p>
              <h4 className="thumbnail__caption-price">
                <a href="">275.000 VND</a>
              </h4>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
