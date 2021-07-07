import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import Sidebar from './components/Sidebar'
import ProductRight from './components/ProductRight'

const ProductPage = () =>{
    return (
        <div className="product">
        <Container>
            <Row>
                <Col lg="3">
                    <Sidebar />
                </Col>
                <Col lg="9">
                    <ProductRight />
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default ProductPage;