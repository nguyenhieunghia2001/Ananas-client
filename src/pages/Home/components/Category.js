import React from "react";
import { Container, Row, Col } from "reactstrap";
import Cat1Img from '../../../assets/images/cat/cat-1.jpg'
import Cat2Img from '../../../assets/images/cat/cat-2.jpg'
import Cat3Img from '../../../assets/images/cat/cat-3.jpg'
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="home__cat">
      <Container>
          <div className="home__cat-title">DANH MỤC MUA HÀNG</div>
          <Row> 
            <Col lg="4">
                <div className="cat__item">
                    <div className="item__bg">
                        <div className="item__bg-black"></div>
                        <img src={Cat1Img} alt="cat" />
                    </div>
                    <div className="item__group">
                        {/* <a href="" className="item__group-title">GIÀY NAM</a> */}
                        <Link to="" className="item__group-title">GIÀY NAM</Link>
                        <Link to="" className="item__group-sub">New Arrivals</Link>
                        <Link to="" className="item__group-sub">Best Seller</Link>
                        <Link to="" className="item__group-sub">Sale-off</Link>
                    </div>
                </div>
            </Col>
            <Col lg="4">
                <div className="cat__item">
                    <div className="item__bg">
                        <div className="item__bg-black"></div>
                        <img src={Cat2Img} alt="cat" />
                    </div>
                    <div className="item__group">
                        <Link to="" className="item__group-title">GIÀY NỮ</Link>
                        <Link to="" className="item__group-sub">New Arrivals</Link>
                        <Link to="" className="item__group-sub">Best Seller</Link>
                        <Link to="" className="item__group-sub">Sale-off</Link>
                    </div>
                </div>
            </Col>
            <Col lg="4">
                <div className="cat__item">
                    <div className="item__bg">
                        <div className="item__bg-black"></div>
                        <img src={Cat3Img} alt="cat" />
                    </div>
                    <div className="item__group">
                        <Link to="" className="item__group-title">DÒNG SẢN PHẨM</Link>
                        <Link to="" className="item__group-sub">Basas</Link>
                        <Link to="" className="item__group-sub">Vintas</Link>
                        <Link to="" className="item__group-sub">Urbar</Link>
                        <Link to="" className="item__group-sub">Pattas</Link>
                    </div>
                </div>
            </Col>
          </Row>
      </Container>
    </div>
  );
};

export default Category;
