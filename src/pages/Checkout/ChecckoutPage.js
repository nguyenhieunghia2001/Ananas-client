import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { Checkbox, Radio } from "antd";
import "./component/ProductList";
import "./style.scss";
import ProductList from "./component/ProductList";
import { getAllAddress, getAddressDefault } from "../../api/Address";
import { addPurchase } from "../../api/PurchaseApi";
import { CartContext } from "../../context/CartContext";
import { convertStringtoMoney } from "../../utits/index";
import Loading from "../../components/Loading/LoadingSpinning";

const CheckoutPage = () => {
  const [loadingState, setLoadingState] = useState(false);
  const [radioAddress, setRadioAddress] = useState();
  const [showChooseAddress, setshowChooseAddress] = useState(false);
  const [addressSelected, setAddressSelctet] = useState();
  const [addresses, setAddresses] = useState();
  const { CartState } = useContext(CartContext);

  useEffect(() => {
    async function fetch() {
      const { addresses } = await getAllAddress();
      const { addressDefault } = await getAddressDefault();
      setAddresses(addresses);
      setAddressSelctet(addressDefault);
    }
    fetch();
  }, []);
  const onChange = (e) => {
    setRadioAddress(e.target.value);
  };
  const chooseAddress = () => {
    const addressFind = addresses?.find(
      (address) => address._id === radioAddress
    );
    setAddressSelctet(addressFind);
    setshowChooseAddress(false);
  };
  const closrChooseAddress = () => {
    setRadioAddress();
    setshowChooseAddress(false);
  };
  const handleSubmitCheckout = async () => {
    setLoadingState(true);
    const formData = {
      addressId: addressSelected?._id,
      cartId: CartState?._id,
    };
    const sunmit = await addPurchase(formData);
    setLoadingState(false);
  };
  return (
    <Container>
      <div className="checkout">
        <Row>
          <Col lg={7}>
            <div className="checkout__left">
              <div className="header">
                <p>THÔNG TIN GIAO HÀNG</p>
                <span onClick={() => setshowChooseAddress(true)}>Thay đổi</span>
              </div>
              {showChooseAddress && (
                <div className="choose-address">
                  <Radio.Group
                    onChange={onChange}
                    value={radioAddress || addressSelected?._id}
                  >
                    <ul>
                      {addresses &&
                        Array.isArray(addresses) &&
                        addresses.map((address) => (
                          <li key={address?._id}>
                            <div className="address-item">
                              <Radio value={address?._id}>
                                <div className="account-info">
                                  <span className="name">
                                    {address?.username}
                                  </span>
                                  <span className="phone">
                                    {address?.phone}
                                  </span>
                                </div>
                                <div className="address-full">
                                  {`${address?.ward?.name}, ${address?.district?.name}, ${address?.province?.name}`}
                                </div>
                              </Radio>
                            </div>
                          </li>
                        ))}

                      <li>
                        <button
                          className="btn btn-address btn-address--finish"
                          onClick={chooseAddress}
                        >
                          Hoàn thành
                        </button>
                        <button
                          className="btn btn-address btn-address--close"
                          onClick={closrChooseAddress}
                        >
                          Đóng
                        </button>
                      </li>
                    </ul>
                  </Radio.Group>
                </div>
              )}

              <form className="orderForm">
                <div className="input-group">
                  <input
                    type="text"
                    name="username"
                    placeholder="Họ tên"
                    defaultValue={addressSelected?.username}
                    readOnly
                  />
                  {/* <div className="error-msg">Vui lòng nhập họ tên</div> */}
                </div>
                <div className="input-group">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Số điện thoại"
                    defaultValue={addressSelected?.phone}
                    readOnly
                  />
                </div>
                <div className="input-group">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    defaultValue={addressSelected?.email}
                    readOnly
                  />
                </div>
                <div className="input-group">
                  <input
                    type="text"
                    name="address"
                    placeholder="Địa chỉ"
                    defaultValue={
                      addressSelected &&
                      `${addressSelected?.ward?.name}, ${addressSelected?.district?.name}, ${addressSelected?.province?.name}`
                    }
                    readOnly
                  />
                </div>
                <div className="input-group">
                  <Checkbox>
                    Cập nhật các thông tin mới nhất về chương trình từ Ananas
                  </Checkbox>
                </div>
              </form>
              <div className="shipping">
                <div className="header">
                  <p>PHƯƠNG THỨC GIAO HÀNG</p>
                </div>
                <div className="shipping__info">
                  <Checkbox checked={true}>
                    Tốc độ tiêu chuẩn (từ 2 - 5 ngày làm việc)
                  </Checkbox>
                  <h5 className="charge">40.000 VND</h5>
                </div>
              </div>
              <div className="payment">
                <div className="header">
                  <p>PHƯƠNG THỨC THANH TOÁN</p>
                </div>
                <div className="payment__info">
                  <div className="check-group">
                    <Checkbox checked={true}>
                      Thanh toán trực tiếp khi giao hàng
                    </Checkbox>
                  </div>
                  <div className="check-group">
                    <Checkbox>
                      Thanh toán bằng thẻ quốc tế và nội địa (ATM)
                    </Checkbox>
                  </div>
                  <div className="check-group">
                    <Checkbox>Thanh toán bằng ví MoMo</Checkbox>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className="checkout__right">
              <div className="header">
                <h3>ĐƠN HÀNG</h3>
              </div>
              <div className="divider-soild"></div>
              {CartState && <ProductList products={CartState?.products} />}
              <div className="divider-img"></div>
              <div className="order__info">
                <div className="item-group">
                  <span className="title">Đơn hàng</span>
                  <span className="content">
                    {CartState && convertStringtoMoney(CartState?.totalPrice())}
                  </span>
                </div>
                <div className="item-group">
                  <span className="title">Giảm</span>
                  <span className="content">- 0 VND</span>
                </div>
                <div className="item-group">
                  <span className="title">Phí vận chuyển</span>
                  <span className="content">40.000 VND</span>
                </div>
                <div className="item-group">
                  <span className="title">Phí thanh toán</span>
                  <span className="content">0 VND</span>
                </div>
              </div>
              <div className="divider-img"></div>
              <div className="totalPrice">
                <span className="title">TỔNG CỘNG</span>
                <span className="content">
                  {CartState &&
                    convertStringtoMoney(+CartState?.totalPrice() + 40000)}
                </span>
              </div>
              <button className="btn btn-checkout" onClick={handleSubmitCheckout}>HOÀN TẤT ĐẶT HÀNG</button>
            </div>
          </Col>
        </Row>
        <div
          className={`loading ${
            loadingState ? "loading-active" : ""
          }`}
        >
          <Loading color="#FF5F17" />
        </div>
      </div>
    </Container>
  );
};

export default CheckoutPage;
