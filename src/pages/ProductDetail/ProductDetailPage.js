import React, { useEffect, useState } from "react";
import "./style.scss";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import ProductLove from "../../components/LoveList/ProductLove";
import "./style.scss";
import Expander from "../../components/Properties/Expander";
import ProductSeen from "./Components/ProductSeen";
import ImageGroup from "./Components/ImageGroup";
import { getProductById } from "../../api/ProductApi";
import Combobox from "../../components/Properties/Combobox";
import { convertStringtoMoney } from "../../utits/index";

const PrdDetail = () => {
  const { id } = useParams();
  const [productState, setProductState] = useState();
  const [valueSelectedState, setValueSelectedState] = useState({
    SIZE: "",
    QUANTITY: "",
    STOCK: "",
  });

  useEffect(() => {
    (async function () {
      try {
        const product = await getProductById(id);
        setProductState(product);
      } catch (error) {
        setProductState({});
      }
    })();
  }, []);
  const handleSetValueSelect = (value, type) => {
    if (type === "SIZE") {
      const sizeItem = productState?.sizes.find((v) => v.size?.name === value);
      setValueSelectedState((pre) => {
        return {
          ...pre,
          ["STOCK"]: sizeItem.quantity?.toString(),
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
  // console.log(valueSelectedState);
  return (
    <>
      <Container>
        <div className="prdDetail">
          <div className="prdDetail__header">
            <p className="prdDetail__header-name">
              {productState && productState.name} -
              {productState && productState.colors.name}
            </p>
          </div>
          <Row>
            <Col lg="7">
              {productState && <ImageGroup images={productState.images} />}
            </Col>
            <Col lg="5">
              <div className="prdDetail__right">
                <h4 className="prdDetail-name">
                  {productState && productState.name} -
                  {productState && productState.colors.name}
                </h4>
                <div className="prdDetail-detail detail-space">
                  <span>
                    Mã sản phẩm:{" "}
                    <strong> {productState && productState._id}</strong>
                  </span>
                  <span>
                    Tình trạng:{" "}
                    <strong>
                      {" "}
                      {productState && productState.statuses.name}
                    </strong>
                  </span>
                </div>
                <div className="prdDetail-price detail-space">
                  <h5>
                    {productState && convertStringtoMoney(productState.price)}
                  </h5>
                </div>
                <div className="divider-img"></div>
                <div className="prdDetail-des detail-space">
                  <span>{productState && productState.des}</span>
                </div>
                <div className="divider-img"></div>

                {/* SIZE */}
                <div className="prdDetail-select--group detail-space">
                  <Row>
                    <Col lg="6">
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
                    </Col>
                    <Col lg="6">
                      <h5>SỐ LƯỢNG</h5>
                      <div className="select">
                        <Combobox
                          type="QUANTITY"
                          values={valueSelectedState.STOCK}
                          setValue={handleSetValueSelect}
                          disabled={valueSelectedState.STOCK ? false : true}
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="divider-img"></div>

                {/* BUTTON */}
                <div className="prdDetail-btn--group detail-space">
                  <Row>
                    <Col lg="10">
                      <Link to="" className="btn btn-detail btn-detail--black">
                        THÊM VÀO GIỎ HÀNG
                      </Link>
                    </Col>
                    <Col lg="2" style={{ paddingLeft: "0" }}>
                      <div
                        className="btn btn-detail btn-detail--black"
                        style={{ padding: "7px 0" }}
                      >
                        {productState && <ProductLove product={productState} />}
                      </div>
                    </Col>
                    <Col lg="12">
                      <Link to="" className="btn btn-detail btn-detail--orange">
                        THANH TOÁN
                      </Link>
                    </Col>
                  </Row>
                </div>

                <div className="divider-img"></div>
                <Expander title="THÔNG TIN SẢN PHẨM" des="Gender: Unisex" />
                {/* <div className="divider-img"></div> */}
                <Expander
                  title="QUY ĐỊNH ĐỔI SẢN PHẨM"
                  des="Đối với những sản phẩm giày và thời trang thuộc phiên bản giới hạn. Vì nhiều lý do chúng tôi sẽ không áp dụng chính sách đổi hàng. Vui lòng cân nhắc kỹ trước khi quyết định mua."
                />
                {/* <div className="divider-img"></div> */}
                <Expander
                  title="BẢO HÀNH THẾ NÀO ?"
                  des="Mỗi đôi giày Ananas trước khi xuất xưởng đều trải qua nhiều khâu kiểm tra. Tuy vậy, trong quá trình sử dụng, nếu nhận thấy các lỗi: gãy đế, hở đế, đứt chỉ may,...trong thời gian 6 tháng từ ngày mua hàng, mong bạn sớm gửi sản phẩm về Ananas nhằm giúp chúng tôi có cơ hội phục vụ bạn tốt hơn. Vui lòng gửi sản phẩm về bất kỳ cửa hàng Ananas nào, hoặc gửi đến trung tâm bảo hành Ananas ngay trong trung tâm TP.HCM trong giờ hành chính:"
                />
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      <div className="divider-img"></div>
      <ProductSeen />
    </>
  );
};

export default PrdDetail;
