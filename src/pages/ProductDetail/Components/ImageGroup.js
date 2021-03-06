import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Row } from "reactstrap";
import "../style.scss";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { CLOUDINARY_LINK } from "../../../utits/base";

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
const ImageGroup = ({ images }) => {
  const [imgSelectedState, setImgSelectedState] = useState();
  useEffect(() => setImgSelectedState(images && images[0].urlPublic), [images]);
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
    <div className="prd-imggroup">
      <Row>
        <div className="imggroup__primary">
          <img
            src={`${CLOUDINARY_LINK}${imgSelectedState}`}
            alt="Foo eating a sandwich."
          />
        </div>
      </Row>
      <Row>
        <div className="imggroup__carousel">
          <Slider {...settings}>
            {images &&
              images.map((image) => (
                <div key={image._id}>
                  <img
                    src={`${CLOUDINARY_LINK}${image?.urlPublic}`}
                    alt="product detail item"
                    onClick={() => setImgSelectedState(image.urlPublic)}
                  />
                </div>
              ))}
          </Slider>
        </div>
      </Row>
    </div>
  );
};

export default ImageGroup;
