import React, { useEffect, useState } from "react";
import { Container} from "reactstrap";
import ProductCarousel from "../../../components/Product/ProductCarousel";
import {getAllProductSelling} from '../../../api/ProductApi'

const BestSeller = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    async function fetch(){
      const res = await getAllProductSelling();
      setProducts(res);
    }
    fetch()
  }, [])
  return (
    <div className="home__bestseller">
      <Container>
        <div className="home__bestseller-title">SẢN PHẨM BÁN CHẠY</div>
        <ProductCarousel products={products}/>
      </Container>
    </div>
  );
};

export default BestSeller;
