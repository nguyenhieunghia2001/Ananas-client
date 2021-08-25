import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Sidebar from "./components/Sidebar";
import { getAllProductByQuery } from "../../api/ProductApi";
import ProductList from "../../components/Product/ProductList";
import PorductBannerImg from "../../assets/images/prd-banner.jpg";
import EmptyImg from "../../assets/images/empty.png";
import { useQuery } from "../../hooks";

const ProductPage = () => {
  const [productsState, setproductsState] = useState([]);

  const query = useQuery();
  const genderQuery = query.get("gender");
  const catQuery = query.get("cat");
  const statusQuery = query.get("status");
  //DID-MOUNT
  useEffect(() => {
    (async function () {
      const products = await getAllProductByQuery(
        genderQuery,
        catQuery,
        statusQuery
      );
      setproductsState(products);
    })();
  }, [genderQuery, catQuery, statusQuery]);
  //hàm set lại sp khi filter
  const handleFilter = async (getGender, getCat, getStatus) => {
    const products = await getAllProductByQuery(getGender, getCat, getStatus);
    setproductsState(products);
  };
  return (
    <div className="product">
      <Container>
        <Row>
          <Col lg="3" md={12} sm={12} xs={12}>
            <Sidebar handleProduct={handleFilter} />
          </Col>
          <Col lg="9" md={12} sm={12} xs={12}>
            <div className="product-right">
              <Row>
                <div className="product-right--banner">
                  <img src={PorductBannerImg} alt="prd right banner" />
                </div>
              </Row>
              {productsState &&
                Array.isArray(productsState) &&
                (productsState.length ? (
                  <ProductList products={productsState} />
                ) : (
                  <div className="empty-box">
                    <img src={EmptyImg} alt="Foo eating a sandwich." />
                    <p>Không tồn tại sản phẩm</p>
                  </div>
                ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductPage;
