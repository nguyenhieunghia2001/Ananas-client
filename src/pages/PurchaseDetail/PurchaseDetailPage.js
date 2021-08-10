import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { useQuery } from "../../hooks";
import { getPurchaseById } from "../../api/PurchaseApi";
import { convertStringtoMoney } from "../../utits/index";
import "./style.scss";

const PurchaseDetail = () => {
  const query = useQuery();
  const id = query.get("id");
  const [purchase, setPurchase] = useState();
  useEffect(() => {
    async function fetch() {
      const data = await getPurchaseById(id);
      setPurchase(data?.purchase);
    }
    fetch();
  }, []);
  return (
    <div className="purchasedetail">
      <Container>
        <header>
          <h2>THÔNG TIN ĐƠN HÀNG</h2>
        </header>
        <div className="progress-status">
          <div className="top">
            <h4>
              TRẠNG THÁI ĐƠN HÀNG <span className="id">W0221924</span>
            </h4>
            <span>Thanh toán COD - Tốc độ tiêu chuẩn</span>
          </div>
          <Row style={{ margin: "0" }}>
            <Col lg={3} md={6} sm={6} xs={12}>
              <div className="progress-1 active">ĐẶT HÀNG THÀNH CÔNG</div>
              <div className="cont active">
                <span className="time">Vào lúc 10:04 - 02/08/2021</span>
                <span>
                  Thời gian xử lý đơn hàng có thể từ 1-2 ngày làm việc. Vui lòng
                  gọi đến hotline 0963 429 749 (trong giờ hành chính) nếu bạn
                  muốn thay đổi thông tin đơn hàng trước khi đơn hàng của bạn
                  được CHUYỂN QUA GIAO NHẬN.
                </span>
              </div>
            </Col>
            <Col lg={3} md={6} sm={6} xs={12}>
              <div className="progress-2">ĐƠN HÀNG ĐÃ HỦY</div>
              <div className="cont">
                <span className="time">Vào lúc 10:06 - 02/08/2021</span>
                <span>
                  Đơn hàng của bạn đã bị huỷ bởi một trong những lí do sau: -
                  Bạn chủ động huỷ nó. - Thẻ thanh toán của bạn không được chấp
                  nhận. - Chúng tôi không liên lạc được hoặc số điện thoại trong
                  thông tin của bạn bị nhầm lẫn. - Sản phẩm bạn đặt không đủ
                  điều kiện để chúng tôi giao hàng ra khỏi kho (hết hàng hoặc
                  sản phẩm bị lỗi).
                </span>
              </div>
            </Col>
            <Col lg={3} md={6} sm={6} xs={12}>
              <div className="progress-3">ĐANG GIAO HÀNG</div>
              <div className="cont ">
                <span>
                  Thời gian giao hàng tuỳ thuộc vào địa điểm và phương thức giao
                  hàng bạn đã chọn. Hãy tin rắng chúng tôi luôn cố gắng để hàng
                  đến tay bạn sớm nhất!
                </span>
              </div>
            </Col>
            <Col lg={3} md={6} sm={6} xs={12}>
              <div className="progress-4">GIAO HÀNG THÀNH CÔNG</div>
              <div className="cont ">
                <span>
                  Đơn hàng đã được giao thành công ! Chúc bạn có một trải nghiệm
                  thú vị ^^
                </span>
              </div>
            </Col>
          </Row>
        </div>
        <div className="divider-img"></div>
        <div className="info">
          <Row>
            <Col lg={6}>
              <div className="wrapper">
                <div className="top">
                  <h4>THÔNG TIN KHÁCH HÀNG</h4>
                </div>
                <div className="content">
                  <p>Họ tên: {purchase?.address?.username}</p>
                  <p>Điện thoại: {purchase?.address?.phone}</p>
                  <p>Email: {purchase?.email}</p>
                  <p>
                    Địa chỉ:{" "}
                    {`${purchase?.address?.detail}, ${purchase?.address?.ward?.name}, ${purchase?.address?.district?.name}, ${purchase?.address?.province?.name}`}
                  </p>
                  <p>Phường/xã: {purchase?.address?.ward?.name}</p>
                  <p>Quận/Huyện: {purchase?.address?.district?.name}</p>
                  <p>Thành phố/Tỉnh: {purchase?.address?.province?.name}</p>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="wrapper">
                <div className="top">
                  <h4>THÔNG TIN GIAO NHẬN</h4>
                </div>
                <div className="content">
                  <p>Họ tên: {purchase?.address?.username}</p>
                  <p>Điện thoại: {purchase?.address?.phone}</p>
                  <p>Email: {purchase?.email}</p>
                  <p>
                    Địa chỉ:{" "}
                    {`${purchase?.address?.detail}, ${purchase?.address?.ward?.name}, ${purchase?.address?.district?.name}, ${purchase?.address?.province?.name}`}
                  </p>
                  <p>Phường/xã: {purchase?.address?.ward?.name}</p>
                  <p>Quận/Huyện: {purchase?.address?.district?.name}</p>
                  <p>Thành phố/Tỉnh: {purchase?.address?.province?.name}</p>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="wrapper">
                <div className="top">
                  <h4>DANH SÁCH SẢN PHẨM</h4>
                </div>
                <div className="content product-list">
                  {purchase &&
                    Array.isArray(purchase?.products) &&
                    purchase?.products.map((product) => (
                      <Row style={{ height: "100%" }} key={product?._id}>
                        <Col
                          lg={4}
                          md={4}
                          sm={4}
                          xs={4}
                          style={{ height: "100%" }}
                        >
                          <div className="product-img">
                            <img
                              src={product?.product?.images[0].urlPublic}
                              alt="product"
                            />
                          </div>
                        </Col>
                        <Col lg={8} md={8} sm={8} xs={8}>
                          <div className="product-info">
                            <h6>{product?.product?.name}</h6>
                            <div className="cont">
                              <span className="title">Giá: </span>
                              <span>{convertStringtoMoney(product?.product?.price)}</span>
                            </div>
                            <div className="cont">
                              <span className="title">Size: </span>
                              <span>{product?.size}</span>
                            </div>
                            <div className="cont">
                              <span className="title">Số lượng: </span>
                              <span>{product?.quantity}</span>
                            </div>
                            <h6 className="total">{convertStringtoMoney(product?.total)}</h6>
                          </div>
                        </Col>
                      </Row>
                    ))}
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="wrapper">
                <div className="top">
                  <h4>THANH TOÁN</h4>
                </div>
                <div className="content">
                  <div className="group">
                    <span>Trị giá đơn hàng:</span>
                    <p>
                      {purchase && convertStringtoMoney(purchase?.totalPrice)}
                    </p>
                  </div>
                  <div className="group">
                    <span>Giảm giá:</span>
                    <p>0 VND</p>
                  </div>
                  <div className="group">
                    <span>Phí giao hàng:</span>
                    <p>40.000 VND</p>
                  </div>
                  <div className="group">
                    <span>Phí thanh toán:</span>
                    <p>0 VND</p>
                  </div>
                </div>
                <div className="divider-img"></div>
                <div className="bottom">
                  <div className="group">
                    <span className="total">Tổng thanh toán:</span>
                    <p>
                      {purchase &&
                        convertStringtoMoney(+purchase?.totalPrice + 40000)}
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default PurchaseDetail;
