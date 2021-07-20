import React, { useContext } from "react";
import { Container, Row, Col } from "reactstrap";
import ProductListCart from "../../components/CartAndLove/ProductList";
import { Link } from "react-router-dom";
import "./style.scss";
import { ProductLoveContext } from "../../context/ProductLoveContext";

const LovePage = () => {
  const { productLoveState } = useContext(ProductLoveContext);
  return (
    <Container>
      <div className="love">
        {Array.isArray(productLoveState) && productLoveState.length > 0 && (
          <div className="love__title">
            <h4>DANH MỤC YÊU THÍCH CỦA BẠN</h4>
            <div className="divider-soild"></div>
            <ProductListCart products={productLoveState} fromPage="LOVE-PAGE" />

            <div className="divider-soild"></div>
            <div className="love__btn-group">
              <Row>
                <Col lg="6">
                  <div className="btn btn-love">XÓA HẾT</div>
                </Col>
                <Col lg="6">
                  <Link
                    to="/products"
                    className="btn btn-love"
                    style={{ float: "right" }}
                  >
                    TIẾP TỤC MUA HÀNG
                  </Link>
                </Col>
              </Row>
            </div>
          </div>
        )}
        {Array.isArray(productLoveState) && productLoveState.length < 1 && (
          <div className="love__empty">
            <p>Bạn không thích sản phẩm nào!!</p>
            <Link className="btn btn-love" to="/products">
              TIẾP TỤC MUA HÀNG
            </Link>
          </div>
        )}
      </div>
    </Container>
  );
};

export default LovePage;
