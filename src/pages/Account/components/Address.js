import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import Modal from "../../../components/Modal/Modal";
import Add_Address from "../../../components/Profile/addAddress";
import { getAllAddress } from "../../../api/Address";

const Address = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [addresses, setAddresses] = useState([]);
  useEffect(() => {
    async function fetch() {
      const data = await getAllAddress();
      setAddresses(data?.address);
    }
    fetch();
  }, []);
  return (
    <>
      <div className="inner">
        <div className="inner__top inner__top-between">
          <h4>Địa Chỉ Của Tôi</h4>
          <button
            className="btn btn-modal"
            onClick={() => setIsOpenModal(true)}
          >
            + Thêm địa chỉ mới
          </button>
        </div>
        <div className="divider-img" />
        <div className="inner__body profile">
          {Array.isArray(addresses) &&
            addresses.length > 0 &&
            addresses.map((item) => (
              <div className="address-item" key={item._id}>
                <Row>
                  <Col lg="9">
                    <div className="left">
                      <Row>
                        <Col lg="3">
                          <p>Họ tên</p>
                        </Col>
                        <Col lg="9">
                          <div className="name-group">
                            <h6>{item?.username}</h6>
                            {item?.active && (
                              <div className="address-default">Mặc định</div>
                            )}
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="3">
                          <p>Số điện thoại</p>
                        </Col>
                        <Col lg="9">
                          <h6>{item?.phone}</h6>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="3">
                          <p>Địa chỉ</p>
                        </Col>
                        <Col lg="9">
                          <h6>
                            {`${item?.detail}, ${item?.ward?.name}, ${item?.district?.name}, ${item?.province?.name}`}
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
            ))}
        </div>
      </div>
      <Modal
        component={Add_Address}
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        setAddresses={setAddresses}
      />
    </>
  );
};

export default Address;
