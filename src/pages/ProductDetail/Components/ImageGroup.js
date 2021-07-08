import React, {useState} from "react";
import Slider from "react-slick";
import { Row } from "reactstrap";
import "../style.scss";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import productImg from "../../../assets/images/product/1.jpg";
import productImg2 from "../../../assets/images/product/2.jpg";

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
const ImageGroup = () => {
    const [ imgSelectedState, setImgSelectedState] = useState(productImg2);
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
    <div className="imggroup">
      <Row>
        <div className="imggroup__primary">
            <img src={imgSelectedState} alt="Product image selected" />
        </div>
      </Row>
      <Row>
        <div className="imggroup__carousel">
          <Slider {...settings}>
            <div>
                <img src={productImg} alt="product detail item" onClick={() => setImgSelectedState(productImg)} />
            </div>
            <div>
                <img src={productImg} alt="product detail item" />
            </div>
            <div>
                <img src={productImg} alt="product detail item" />
            </div>
            <div>
                <img src={productImg} alt="product detail item" />
            </div>
            <div>
                <img src={productImg} alt="product detail item" />
            </div>
            <div>
                <img src={productImg} alt="product detail item" />
            </div>
            <div>
                <img src={productImg} alt="product detail item" />
            </div>
            <div>
                <img src={productImg} alt="product detail item" />
            </div>
            <div>
                <img src={productImg} alt="product detail item" />
            </div>
          </Slider>
        </div>
        {/* <ProductCarousel /> */}
      </Row>
    </div>
  );
};

export default ImageGroup;
