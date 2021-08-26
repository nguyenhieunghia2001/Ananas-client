import React, { useContext } from "react";
import { Row, Col } from "reactstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./style.scss";
import { Link } from "react-router-dom";
import { convertStringtoMoney } from "../../utits/index";
import { ProductLoveContext } from "../../context/ProductLoveContext";
import ProductLove from "../LoveList/ProductLove";
import { CartContext } from "../../context/CartContext";
import Combobox from "../Properties/Combobox";
import {CLOUDINARY_LINK} from '../../utits/base'

const ProductItemCart = ({ product, fromPage }) => {
  const { removeLove } = useContext(ProductLoveContext);
  const { removeCart, updateQuantity } = useContext(CartContext);
  const handleRemove = () => {
    if (fromPage && fromPage === "LOVE-PAGE") removeLove(product);
    console.log(fromPage);
    if (fromPage && fromPage === "CART-PAGE")
      removeCart(product?.product._id, product?.size);
  };
  const productRender = fromPage === "CART-PAGE" ? product.product : product;
  const hadlleUpdateState = async (item, type) => {
    await updateQuantity(product.product._id, product.size, item);
  };
  const findQuantity = () => {
    const find = productRender?.sizes?.find(
      (item) => +item.size?.name === +product?.size
    );
    return find?.quantity || 0;
  };
  return (
    <Row>
      <Col lg="8" md={12}>
        <div className="prdCart__left">
          <Row>
            <Col lg="3" xs={3}>
              <div className="prdCart__img">
                <Link to={`/product/${productRender._id}`}>
                  <img src={`${CLOUDINARY_LINK}${productRender.images[0]?.urlPublic}`} alt="prd" />
                </Link>
              </div>
            </Col>
            <Col lg="9" xs={9}>
              <div className="prdCart__info">
                <div className="cont">
                  <Link to={`/product/${productRender._id}`}>
                    <h5>{productRender.name}</h5>
                  </Link>
                  <span className="price">
                    <strong>Giá: </strong>
                    {convertStringtoMoney(productRender.price)}
                  </span>
                </div>
                <Row>
                  <Col lg="6" xs={6}>
                    <Combobox
                      type="SIZE"
                      selected={product?.size}
                      values={product?.product?.sizes}
                      // setValue={hadlleUpdateState}
                      disabled={true}
                    />
                  </Col>
                  <Col lg="6" xs={6}>
                    <Combobox
                      type="QUANTITY"
                      selected={product?.quantity}
                      values={findQuantity()}
                      setValue={hadlleUpdateState}
                    />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
      <Col lg="4" md={12}>
        <div className="prdCart__right">
          {fromPage === "LOVE-PAGE" ? (
            <h5>{convertStringtoMoney(productRender.price)}</h5>
          ) : (
            <h5>{convertStringtoMoney(product.total())}</h5>
          )}
          {productRender.stock > 0 ? <p>Còn hàng</p> : <p>Hết hàng</p>}
          <div className="button-group">
            <div>
              <button
                type="button"
                className={`btn btn-cart btn-cart--noneBackground `}
                disabled={productRender.stock < 1 ? true : false}
              >
                {fromPage === "CART-PAGE" ? (
                  <ProductLove product={product.product} />
                ) : (
                  <AiOutlineShoppingCart />
                )}
              </button>
            </div>
            <div>
              <button
                type="button"
                className="btn btn-cart btn-cart--Background"
                onClick={() => handleRemove()}
              >
                <RiDeleteBin6Line />
                {/* {product && <ProductLove product={product} />} */}
              </button>
            </div>
          </div>
        </div>
      </Col>
      {/* <div className="divider-img"></div> */}
    </Row>
  );
};

export default ProductItemCart;
