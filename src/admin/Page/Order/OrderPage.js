import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllOrder } from "../../../api/orderApi";
import { FiEdit } from "react-icons/fi";
import { Table } from "antd";
import { convertStringtoMoney } from "../../../utits/index";

const orderColumn = [
  {
    title: "STT",
    dataIndex: "index",
    render: (_, __, index) => +index + 1,
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Sản phẩm",
    dataIndex: "products",
    render: (text) => <div>{text.length}</div>,
  },
  {
    title: "Tổng tiền",
    dataIndex: "totalPrice",
    render: (text) => (
      <div style={{ color: "#ff5f17", fontWeight: "700" }}>
        {convertStringtoMoney(text)}
      </div>
    ),
    sorter: (a, b) => +a.totalPrice - +b.totalPrice,
  },
  {
    title: "Tình trạng",
    dataIndex: "status",
    render: (_, record) => {
      if (record?.status?.find((item) => item.name === "-1")) return "ĐÃ HỦY";
      const pos = record?.status?.reduce(
        (result, item) => (+item.name > result ? +item.name : result),
        0
      );
      if (pos === 2) return "ĐÃ GIAO";
      if (pos === 1) return "ĐANG GIA0";
      if (pos === 0) return "ĐÃ ĐẶT HÀNG";
    },
  },
  {
    title: "TT",
    render: (_, record) => (
      <Link
        to={`/admin/order/detail/${record._id}`}
        style={{ color: "#ff5f17" }}
      >
        <FiEdit />
      </Link>
    ),
  },
];
const OrderPage = () => {
  const [orders, setOrder] = useState();
  useEffect(() => {
    async function fetch() {
      const data = await getAllOrder();
      setOrder(data);
    }
    fetch();
  }, []);
  return (
    <div className="wrapper wrapper-product">
      <header>
        <h5 className="title">Đơn hàng</h5>
        <div className="header-right"></div>
      </header>

      <div className="content">
        <div className="table">
          <Table
            columns={orderColumn}
            dataSource={orders}
            rowKey={(record) => record._id}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
