import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Sidebar from "./components/Sidebar";
import { getAllProduct } from "../../api/ProductApi";
import ProductList from "../../components/Product/ProductList";
import PorductBannerImg from "../../assets/images/prd-banner.jpg";
import {
  useLocation
} from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const ProductPage = () => {
  const [productsState, setproductsState] = useState([]);
  //DID-MOUNT
  useEffect(() => {
    (async function () {
      const products = await getAllProduct();
      console.log('dis mount');
      setproductsState(products);
    })();
  }, []);

  //DID-UPDATE
  let query = useQuery();
  useEffect(() => {
    const getType = query.get('type');
    const getCat = query.get('cat');
    const getStatus = query.get('status');

    console.log(getType, getCat, getStatus);
  }, [productsState])
  console.log('run page home');
  return (
    <div className="product">
      <Container>
        <Row>
          <Col lg="3">
            <Sidebar />
          </Col>
          <Col lg="9">
            <div className="product-right">
              <Row>
                <div className="product-right--banner">
                  <img src={PorductBannerImg} alt="prd right banner" />
                </div>
              </Row>
              {/* {productsState && <ProductList products={productsState}/>} */}
              <ProductList products={productsState} />
              {/* <ProductList /> */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductPage;
