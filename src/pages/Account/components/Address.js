import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import Modal from "../../../components/Modal/Modal";
import Add_Address from "../../../components/Profile/addAddress";
import {
  getAllAddress,
  removeAddress,
  changeActive,
} from "../../../api/Address";
import useModal from "../../../hooks/useModal";

const Address = () => {
  const [addresses, setAddresses] = useState([]);
  const [selectValue, setSelectValue] = useState({});
  const {isShowing, toggle} = useModal();

  useEffect(() => {
    async function fetch() {
      const data = await getAllAddress();
      setAddresses(data?.addresses);
    }
    fetch();
  }, []);
  const handleRemove = async (id, index) => {
    await removeAddress(id);

    setAddresses([
      ...addresses.slice(0, index),
      ...addresses.slice(index + 1, addresses.length),
    ]);
  };
  const handleChangeActive = async (id) => {
    await changeActive(id);

    const newAddresses = addresses.map((address) => {
      if (address._id === id) address.active = true;
      else address.active = false;
      return address;
    });
    setAddresses(newAddresses);
  };

  const openModalUpdate = (addressItem) => {
    setSelectValue(addressItem);
    toggle();
  }
  return (
    <>
      <div className="inner">
        <div className="inner__top inner__top-between">
          <h4>Địa Chỉ Của Tôi</h4>
          
          <button
            className="btn btn-modal"
            onClick={() => openModalUpdate(null)}
          >
            + Thêm địa chỉ mới
          </button>
        </div>
        <div className="divider-img" />
        <div className="inner__body profile">
          {Array.isArray(addresses) &&
            addresses.length > 0 &&
            addresses.map((item, index) => (
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
                        <div className="control-edit" onClick={() => openModalUpdate(item)}>Sửa</div>
                        {!item?.active && (
                          <div
                            className="control-remove"
                            onClick={() => handleRemove(item._id, index)}
                          >
                            Xóa
                          </div>
                        )}
                      </div>
                      {!item?.active && (
                        <button
                          className="btn btn-medium-border"
                          onClick={() => handleChangeActive(item?._id)}
                        >
                          Thiết Lập Mặc Định
                        </button>
                      )}
                    </div>
                  </Col>
                </Row>
              </div>
            ))}
        </div>
      </div>
      <Modal
        component={Add_Address}
        isShowing={isShowing}
        hide={toggle}
        setAddresses={setAddresses}
        selectValue={selectValue}
      />
    </>
  );
};

export default Address;
