import React from "react";
import { Col, Container, Row } from "reactstrap";
import CategoryForm from "../../Component/Category/CategoryForm";
import SizeForm from "../../Component/Size/SizeForm";
import StatusForm from "../../Component/Status/StatusForm";

const GeneralPage = () => {
  return (
    <div className="wrapper wrapper-product">
      <header>
        <h5 className="title">Thông tin chung</h5>
        <div className="header-right"></div>
      </header>

      <div className="content">
        <Container>
          <Row>
            <Col lg={7}>
              <CategoryForm />
              <StatusForm />
            </Col>
            <Col lg={5}>
              <SizeForm />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default GeneralPage;
