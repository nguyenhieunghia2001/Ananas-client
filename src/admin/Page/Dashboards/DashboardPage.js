import React from "react";
import { Col, Container, Row } from "reactstrap";
import RevenueChart from "../../Component/Dashboard/ReveneChart";
import RevenueOrder from "../../Component/Dashboard/RevenueOrder";
import Selling from "../../Component/Dashboard/Selling";
import "./style.scss";

const DashboardPage = () => {
  
  return (
    <div className="wrapper wrapper-product">
      <header>
        <h5 className="title">Trang Chính</h5>
        <div className="header-right"></div>
      </header>
      <div className="content">
        <div className="wrapper-order">
          <Container>
            <Row>
              <Col lg={8}>
                <div className="wrapper-white">
                  <div className="item-group">
                    <div className="content ">
                      <RevenueChart />
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="wrapper-white">
                  <div className="item-group">
                    <h5 className="title">Đơn hàng</h5>
                    <div className="content ">
                      <RevenueOrder />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <div className="wrapper-white">
                <div className="item-group">
                  <h5 className="title">Bán chạy</h5>
                  <div className="content ">
                    <Selling />
                  </div>
                </div>
              </div>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
