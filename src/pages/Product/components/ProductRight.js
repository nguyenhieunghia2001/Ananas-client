import React from "react";
import "../style.scss";
import { Row } from "reactstrap";
import PorductBannerImg from '../../../assets/images/prd-banner.jpg'
import ProductList from '../../../components/Product/ProductList'

const ProductRight = () => {
    return (
        <div className="product-right">
        <Row>
            <div className="product-right--banner">
                <img src={PorductBannerImg} alt="prd right banner" />
            </div>
        </Row>
        <ProductList />
        </div>
    )
}
export default ProductRight;