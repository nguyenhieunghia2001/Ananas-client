import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import ProductLove from "../../components/LoveList/ProductLove";
import Expander from "../../components/Properties/Expander";
import ProductSeen from "./Components/ProductSeen";
import ImageGroup from "./Components/ImageGroup";
import { getProductById } from "../../api/ProductApi";
import { addProductHistory } from "../../api/historyApi";
import Combobox from "../../components/Properties/Combobox";
import { convertStringtoMoney } from "../../utits/index";
import { CartContext } from "../../context/CartContext";
import "./style.scss";

const PrdDetail = () => {
  const { CartState, addCart } = useContext(CartContext);
  const { id } = useParams();
  const [productState, setProductState] = useState();
  const [valueSelectedState, setValueSelectedState] = useState({
    SIZE: "",
    QUANTITY: "",
    STOCK: "",
    status: false,
    error: function () {
      if (!this.SIZE || !this.QUANTITY)
        return "Vui lòng chọn Size/Số lượng phù hợp";
    },
  });

  useEffect(() => {
    (async function () {
      try {
        const product = await getProductById(id);
        //them vao lich su da xem
        await addProductHistory(id);
        setProductState(product);
      } catch (error) {
        setProductState({});
      }
    })();
  }, [id]);
  const handleSetValueSelect = (value, type) => {
    if (type === "SIZE") {
      const sizeItem = productState?.sizes?.find((v) => v.size?.name === value);
      const productCart = CartState?.products?.find(
        (p) => p.product._id === productState._id && p.size === value
      );
      const stock = productCart
        ? +sizeItem.quantity - productCart?.quantity
        : +sizeItem.quantity;
      setValueSelectedState((pre) => {
        return {
          ...pre,
          STOCK: stock.toString(),
          [type]: value,
        };
      });
    } else {
      setValueSelectedState((pre) => {
        return {
          ...pre,
          [type]: value,
        };
      });
    }
  };
  const handleAddCart = () => {
    if (valueSelectedState.error()) {
      setValueSelectedState((pre) => {
        return {
          ...pre,
          status: true,
        };
      });
    } else {
      addCart(
        productState,
        valueSelectedState.SIZE,
        valueSelectedState.QUANTITY
      );
    }
  };
  return (
    <>
      <Container>
        <div className="prdDetail">
          <div className="prdDetail__header">
            <p className="prdDetail__header-name">
              {`${productState?.name} - ${productState?.colors?.name}`}
            </p>
          </div>
          <Row>
            <Col lg="7">
              {productState && <ImageGroup images={productState.images} />}
            </Col>
            <Col lg="5">
              <div className="prdDetail__right">
                <h4 className="prdDetail-name">
                  {`${productState?.name} - ${productState?.colors?.name}`}
                </h4>
                <div className="prdDetail-detail detail-space">
                  <span>
                    Mã sản phẩm: <strong> Đã ẩn</strong>
                  </span>
                  <span>
                    Tình trạng: <strong> {productState?.status?.name}</strong>
                  </span>
                </div>
                <div className="prdDetail-price detail-space">
                  <h5>
                    {productState && convertStringtoMoney(productState.price)}
                  </h5>
                </div>
                <div className="divider-img"></div>
                <div className="prdDetail-des detail-space">
                  <span dangerouslySetInnerHTML={{__html: productState?.des}} />
                  {/* <span>{productState?.des}</span> */}
                </div>
                <div className="divider-img"></div>

                {/* SIZE */}
                <div className="prdDetail-select--group detail-space">
                  <Row>
                    <Col lg="6">
                      <div className="wrapper">
                        <h5>SIZE</h5>
                        <div className="select">
                          {/* values là các size của giày nè */}
                          <Combobox
                            type="SIZE"
                            values={productState?.sizes}
                            setValue={handleSetValueSelect}
                            disabled={false}
                          />
                        </div>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="wrapper">
                        <h5>SỐ LƯỢNG</h5>
                        <div className="select">
                          <Combobox
                            type="QUANTITY"
                            values={valueSelectedState.STOCK}
                            setValue={handleSetValueSelect}
                            disabled={valueSelectedState.STOCK ? false : true}
                          />
                        </div>
                      </div>
                    </Col>
                    <div className="error-msg">
                      <p>
                        {valueSelectedState.error() &&
                          valueSelectedState.status &&
                          valueSelectedState.error()}
                      </p>
                    </div>
                  </Row>
                </div>
                <div className="divider-img"></div>

                {/* BUTTON */}
                <div className="prdDetail-btn--group detail-space">
                  <Row>
                    <Col lg="10" md={10} xs={10}>
                      <button
                        type="button"
                        className="btn btn-detail btn-detail--black"
                        onClick={handleAddCart}
                      >
                        THÊM VÀO GIỎ HÀNG
                      </button>
                    </Col>
                    <Col lg="2" md={2} xs={2} style={{ paddingLeft: "0" }}>
                      <div
                        className="btn btn-detail btn-detail--black"
                        style={{ paddingTop: "7px", paddingBottom: "7px" }}
                      >
                        {productState && <ProductLove product={productState} />}
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="12">
                      <Link to="" className="btn btn-detail btn-detail--orange">
                        THANH TOÁN
                      </Link>
                    </Col>
                  </Row>
                </div>

                <div className="divider-img"></div>
                <Expander title="THÔNG TIN SẢN PHẨM">
                  <p>Gender: Unisex</p>
                </Expander>

                <Expander title="QUY ĐỊNH ĐỔI SẢN PHẨM">
                  <p>
                    Đối với những sản phẩm giày và thời trang thuộc phiên bản
                    giới hạn. Vì nhiều lý do chúng tôi sẽ không áp dụng chính
                    sách đổi hàng. Vui lòng cân nhắc kỹ trước khi quyết định
                    mua.
                  </p>
                </Expander>
                {/* <div className="divider-img"></div> */}
                <Expander title="BẢO HÀNH THẾ NÀO ?">
                  <p>
                    Mỗi đôi giày Ananas trước khi xuất xưởng đều trải qua nhiều
                    khâu kiểm tra. Tuy vậy, trong quá trình sử dụng, nếu nhận
                    thấy các lỗi: gãy đế, hở đế, đứt chỉ may,...trong thời gian
                    6 tháng từ ngày mua hàng, mong bạn sớm gửi sản phẩm về
                    Ananas nhằm giúp chúng tôi có cơ hội phục vụ bạn tốt hơn.
                    Vui lòng gửi sản phẩm về bất kỳ cửa hàng Ananas nào, hoặc
                    gửi đến trung tâm bảo hành Ananas ngay trong trung tâm
                    TP.HCM trong giờ hành chính:
                  </p>
                </Expander>
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      <div className="divider-img"></div>
      {productState && <ProductSeen />}
    </>
  );
};

export default PrdDetail;
