import React, { useEffect, useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { getOrderById } from "../../../api/orderApi";
import ProductItem from "../../../components/Purchase/ProductItem";
import { convertStringtoMoney } from "../../../utits";
import WizardStatus from "../../Component/Order/WizardStatus";
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
  }, [id]);
  console.log(order);
  return (
    <div className="wrapper wrapper-product">
      <header>
        <h5 className="title">Thông tin đơn hàng</h5>
        <div className="header-right"></div>
      </header>
      <div className="content">
        <div className="header-sticky">
          <div className="left">
            <Link to="/admin/order" className="">
              <BsArrowLeftShort />
              <span>Đơn hàng</span>
            </Link>
          </div>
        </div>
        <div className="wrapper-order">
          <Container>
            <Row>
              <Col lg={7}>
                <div className="wrapper-white">
                  <div className="item-group">
                    <h5 className="title">
                      Mã đơn hàng:{" "}
                      <strong style={{ color: "#ff5f17" }}>#{id}</strong>
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
                <div className="wrapper-white" style={{height: '234px'}}>
                  <div className="item-group">
                    <h5 className="title">Trạng thái đơn hàng</h5>
                    <WizardStatus />
                  </div>
                </div>
                <div className="wrapper-white">
                  <div className="item-group">
                    <h5 className="title">Thanh toán</h5>
                    <div className="content">
                      <div className="group">
                        <span>Trị giá đơn hàng:</span>
                        <p>
                          {order && convertStringtoMoney(order?.totalPrice)}
                        </p>
                      </div>
                      <div className="group">
                        <span>Giảm giá:</span>
                        <p>0 VND</p>
                      </div>
                      <div className="group">
                        <span>Phí giao hàng:</span>
                        <p>40.000 VND</p>
                      </div>
                      <div className="group">
                        <span>Phí thanh toán:</span>
                        <p>0 VND</p>
                      </div>
                      <div className="divider-img"></div>
                      <div className="bottom">
                        <div className="group">
                          <span className="total">Tổng thanh toán:</span>
                          <p>
                            {order &&
                              convertStringtoMoney(+order?.totalPrice + 40000)}
                          </p>
                        </div>
                      </div>
                    </div>
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
