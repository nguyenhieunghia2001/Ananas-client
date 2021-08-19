import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {getAllOrder} from '../../../api/orderApi'
import {FiEdit} from 'react-icons/fi'
import { Table } from "antd";

const orderColumn = [
  {
    title: "STT",
    dataIndex: "index",
    render: (_, __, index) => +index + 1,
  },
  {
    title: "Email",
    dataIndex: 'email',
  },
  {
    title: "Số điện thoại",
    dataIndex: 'phone',
    render: text => <div >{text ? text : 'Chưa cập nhật'}</div>
  },
  {
    title: "TT",
    render: (_, record) => (
      <Link
        to={`/admin/customer/edit/${record._id}`}
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
    async function fetch( ){
      const data = await getAllOrder();
      setOrder(data);
    }
    fetch ();
  }, [])
  console.log(orders);
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
