import React from "react";
import { Container } from "reactstrap";
import ProductCarousel from "../../../components/Product/ProductCarousel";
import '../style.scss'

const ProductSeen = () => {
  return (
    <div className="products-seen detail-space">
      <Container>
        <div className="products-seen--title">
          <h4>SẢN PHẨM ĐÃ XEM</h4>
        </div>
        <ProductCarousel />
      </Container>
    </div>
  );
};

export default ProductSeen;
