import React from "react";
import { Container, Row, Col } from "reactstrap";
import ProductListCart from "../../components/CartAndLove/ProductList";
import { Link } from "react-router-dom";
import "./style.scss";

const LovePage = () => {
  return (
    <Container>
      <div className="love">
        <div className="love__title">
          <h4>DANH MỤC YÊU THÍCH CỦA BẠN</h4>
          <div className="divider-soild"></div>
          <ProductListCart />
          {/* <div className="love__empty">
            <p>Bạn không thích sản phẩm nào!!</p>
            <Link className="btn btn-love" to="/">TIẾP TỤC MUA HÀNG</Link>
          </div> */}
          <div className="divider-soild"></div>
          <div className="love__btn-group">
            <Row>
              <Col lg="6">
                <div className="btn btn-love">XÓA HẾT</div>
              </Col>
              <Col lg="6">
                <Link to="/" className="btn btn-love" style={{float: "right"}}>TIẾP TỤC MUA HÀNG</Link>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LovePage;
