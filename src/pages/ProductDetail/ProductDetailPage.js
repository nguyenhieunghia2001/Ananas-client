import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import ProductLove from "../../components/LoveList/ProductLove";
import "./style.scss";
import Expander from "../../components/Properties/Expander";
import ProductSeen from "./Components/ProductSeen";

const PrdDetail = () => {
  return (
    <>
      <div className="prdDetail">
        <Container>
          <div className="prdDetail__header">
            <p className="prdDetail__header-name">Urbas Borderless - Low Top</p>
          </div>
          <Row>
            <Col lg="7"></Col>
            <Col lg="5">
              <div className="prdDetail__right">
                <h4 className="prdDetail-name">
                  URBAS BORDERLESS - LOW TOP - WHITE/PRIDE FLAG
                </h4>
                <div className="prdDetail-detail detail-space">
                  <span>
                    Mã sản phẩm: <strong>ABL2021</strong>
                  </span>
                  <span>
                    Tình trạng: <strong>Pre-order</strong>
                  </span>
                </div>
                <div className="prdDetail-price detail-space">
                  <h5>950.000 VND</h5>
                </div>
                <div className="divider-img"></div>
                <div className="prdDetail-des detail-space">
                  <span>
                    Sử dụng các đường chỉ 6 màu trên lá cờ Pride Flag, đại diện
                    cho những đường “biên giới” giữa các giới tính. “Borderless”
                    mang ý nghĩa của sự giao thoa nhằm xoá nhoà các đường “biên
                    giới”, hướng đến tình yêu bao dung cho tất cả mọi người.
                    Urbas Borderless sở hữu quai dán tiện lợi trên nền chất liệu
                    da chính cao cấp Cachemera Soft Nappa, bề mặt da nhăn tạo
                    cảm giác tự nhiên, nhã nhặn.
                  </span>
                </div>
                <div className="divider-img"></div>

                {/* SIZE */}
                <div className="prdDetail-select--group detail-space">
                  <Row>
                    <Col lg="6">
                      <h5>SIZE</h5>
                    </Col>
                    <Col lg="6">
                      <h5>SỐ LƯỢNG</h5>
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
                        <ProductLove />
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
        </Container>
      </div>

      <div className="divider-img"></div>
      <ProductSeen />
    </>
  );
};

export default PrdDetail;
