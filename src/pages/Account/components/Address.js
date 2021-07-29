import React, { useState } from "react";
import { Col, Row } from "reactstrap";
// import Loading from "../../../components/Loading/LoadingSpinning";
import Modal from "../../../components/Modal/Modal";
import Add_Address from "../../../components/Profile/addAddress";

const Address = () => {
  // const [loadingState, setLoadingState] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <>
      <div className="inner">
        <div className="inner__top inner__top-between">
          <h4>Địa Chỉ Của Tôi</h4>
          <button className="btn btn-modal" onClick={() => setIsOpenModal(true)} >+ Thêm địa chỉ mới</button>
        </div>
        <div className="divider-img" />
        <div className="inner__body profile">
          <div className="address-item">
            <Row>
              <Col lg="9">
                <div className="left">
                  <Row>
                    <Col lg="3">
                      <p>Họ tên</p>
                    </Col>
                    <Col lg="9">
                      <div className="name-group">
                        <h6>Nguyễn hiếu nghĩa</h6>
                        <div className="address-default">Mặc định</div>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="3">
                      <p>Số điện thoại</p>
                    </Col>
                    <Col lg="9">
                      <h6>(+84) 947094472</h6>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="3">
                      <p>Địa chỉ</p>
                    </Col>
                    <Col lg="9">
                      <h6>
                        L22 cư xá Phú Lâm A, Phường 12, Quận 6, TP. Hồ Chí Minh
                      </h6>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col lg="3">
                <div className="right">
                  <div className="control">
                    <div className="control-edit">Sửa</div>
                    <div className="control-remove">Xóa</div>
                  </div>
                  <button className="btn btn-medium-border">
                    Thiết Lập Mặc Định
                  </button>
                </div>
              </Col>
            </Row>
          </div>
          <div className="address-item">
            <Row>
              <Col lg="9">
                <div className="left">
                  <Row>
                    <Col lg="3">
                      <p>Họ tên</p>
                    </Col>
                    <Col lg="9">
                      <div className="name-group">
                        <h6>Nguyễn hiếu nghĩa</h6>
                        <div className="address-default">Mặc định</div>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="3">
                      <p>Số điện thoại</p>
                    </Col>
                    <Col lg="9">
                      <h6>(+84) 947094472</h6>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="3">
                      <p>Địa chỉ</p>
                    </Col>
                    <Col lg="9">
                      <h6>
                        L22 cư xá Phú Lâm A, Phường 12, Quận 6, TP. Hồ Chí Minh
                      </h6>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col lg="3">
                <div className="right">
                  <div className="right">
                    <div className="control">
                      <div className="control-edit">Sửa</div>
                      <div className="control-remove">Xóa</div>
                    </div>
                    <button className="btn btn-medium-border">
                      Thiết Lập Mặc Định
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        {/* //loading */}
        {/* <div
          className={`inner__loading ${
            loadingState ? "inner__loading-active" : ""
          }`}
        >
          <Loading color="#FF5F17" />
        </div> */}
      </div>
      <Modal
        component={Add_Address}
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
      />
    </>
  );
};

export default Address;
