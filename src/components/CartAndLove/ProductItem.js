import React, { useContext } from "react";
import { Row, Col } from "reactstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./style.scss";
import { Link } from "react-router-dom";
import { convertStringtoMoney } from "../../utits/index";
import { ProductLoveContext } from "../../context/ProductLoveContext";

const ProductItemCart = ({ product, fromPage }) => {
  const { removeLove } = useContext(ProductLoveContext);
  const handleRemove = () => {
    if (fromPage && fromPage === "LOVE-PAGE") removeLove(product);
    // if(fromPage && fromPage === 'CART-PAGE')
  };
  return (
    <Row>
      <Col lg="8">
        <div className="prdCart__left">
          <Row>
            <Col lg="3">
              <div className="prdCart__img">
                <Link to={`/product/${product._id}`}>
                  <img src={product.images[0]?.urlPublic} alt="prd" />
                </Link>
              </div>
            </Col>
            <Col lg="9">
              <div className="prdCart__info">
                <Link to={`/product/${product._id}`}>
                  <h5>{product.name}</h5>
                </Link>
                <span>
                  <strong>Giá: </strong>
                  {convertStringtoMoney(product.price)}
                </span>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
      <Col lg="4">
        <div className="prdCart__right">
          <h5>{convertStringtoMoney(product.price)}</h5>
          {product.stock > 0 ? <p>Còn hàng</p> : <p>Hết hàng</p>}
          <button
            type="button"
            className={`btn btn-cart btn-cart--noneBackground `}
            disabled={product.stock < 1 ? true : false}
          >
            <AiOutlineShoppingCart />
          </button>
          <button
            type="button"
            className="btn btn-cart btn-cart--Background"
            onClick={() => handleRemove()}
          >
            <RiDeleteBin6Line />
            {/* {product && <ProductLove product={product} />} */}
          </button>
        </div>
      </Col>
      {/* <div className="divider-img"></div> */}
    </Row>
  );
};

export default ProductItemCart;
