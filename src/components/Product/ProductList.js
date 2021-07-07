import React from "react";
import "./style.scss";
import { Row, Col } from "reactstrap";
import ProductItemBasic from './ProductItemBasic'

const ProductRight = () => {
    return (
        <Row>
            <Col lg="4" style={{marginBottom: "30px", padding: "0"}}>
                <ProductItemBasic />
            </Col>
            <Col lg="4" style={{marginBottom: "30px", padding: "0"}} >
                <ProductItemBasic />
            </Col>
            <Col lg="4" style={{marginBottom: "30px", padding: "0"}} >
                <ProductItemBasic />
            </Col>
            <Col lg="4" style={{marginBottom: "30px", padding: "0"}} >
                <ProductItemBasic />
            </Col>
            <Col lg="4" style={{marginBottom: "30px", padding: "0"}} >
                <ProductItemBasic />
            </Col>
            <Col lg="4" style={{marginBottom: "30px", padding: "0"}} >
                <ProductItemBasic />
            </Col>
        </Row>
    )
}
export default ProductRight;