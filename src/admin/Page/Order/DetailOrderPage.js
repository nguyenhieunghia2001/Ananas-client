import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { getOrderById } from "../../../api/orderApi";
import ProductItem from "../../../components/Purchase/ProductItem";
import "./style.scss";

const DetailOrderPage = () => {
  const { id } = useParams();
  const [order, setOrder] = useState();
  useEffect(() => {
    async function fetch() {
      const data = await getOrderById(id);
      setOrder(data);
    }
    fetch();
  }, []);
  console.log(order);
  return (
    <div className="wrapper wrapper-product">
      <header>
        <h5 className="title">Thông tin đơn hàng</h5>
        <div className="header-right"></div>
      </header>
      <div className="content">
        <div className="wrapper-order">
          <Container>
            <Row>
              <Col lg={7}>
                <div className="wrapper-white">
                  <div className="item-group">
                    <h5 className="title">
                      Mã đơn hàng:{" "}
                      <strong style={{ color: "#ff5f17" }}>#TRRDDOJC</strong>
                    </h5>
                  </div>
                </div>
                <div className="wrapper-white">
                  <div className="item-group">
                    <h5 className="title">Thông tin giao nhận</h5>
                    <div className="content ">
                      <div className="child">
                        <Row>
                          <Col lg={3}>Tên người nhận: </Col>
                          <Col lg={9}>{order?.address?.username}</Col>
                        </Row>
                      </div>
                      <div className="child">
                        <Row>
                          <Col lg={3}>Số điện thoại: </Col>
                          <Col lg={9}>{order?.address?.phone}</Col>
                        </Row>
                      </div>
                      <div className="child">
                        <Row>
                          <Col lg={3}>Địa chỉ: </Col>
                          <Col lg={9}>
                            {order?.address?.ward?.name},{" "}
                            {order?.address?.district?.name},{" "}
                            {order?.address?.province?.name}
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wrapper-white">
                  <div className="item-group">
                    <h5 className="title">Thông tin sản phẩm</h5>
                    {order &&
                      Array.isArray(order?.products) &&
                      order?.products?.map((product) => (
                        <div className="product__item" key={product?._id}>
                          <ProductItem product={product} fromPage="order" />
                        </div>
                      ))}
                  </div>
                </div>
              </Col>
              <Col lg={5}>
                <div className="wrapper-white">
                  <div className="item-group">
                    <h5 className="title">Trạng thái đơn hàng</h5>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default DetailOrderPage;
