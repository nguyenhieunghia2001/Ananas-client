import React from "react";
import { Container, Row, Col } from "reactstrap";
import ProductCarousel from "../../../components/Product/ProductCarousel";

const BestSeller = () => {
  return (
    <div className="home__bestseller">
      <Container>
        <div className="home__bestseller-title">BEST SELLER</div>
        <ProductCarousel />
      </Container>
    </div>
  );
};

export default BestSeller;
