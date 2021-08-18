import React, { useEffect, useState } from "react";
import { Table } from "antd";
import "./style.scss";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { getAllAccount } from "../../../api/accountApi";

const columns = [
  {
    title: "STT",
    dataIndex: "index",
    render: (_, __, index) => +index + 1,
  },
  {
    title: "Tên khách hàng",
    dataIndex: "username",
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
const CustomerPage = () => {
  const [accounts, setAccounts] = useState();
  useEffect(() => {
    async function fetch() {
      const data = await getAllAccount();
       console.log(data);
      setAccounts(data);
    }
    fetch();
  }, []);
  const onChange = (pagination, filters, sorter, extra) => {
    // console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <div className="wrapper wrapper-product">
      <header>
        <h5 className="title">Khách hàng</h5>
        <div className="header-right">
          <Link to="/admin/customer/add" className="btn btn-header">
            Khách hàng mới
          </Link>
        </div>
      </header>
      <div className="content">
        <div className="table">
          <Table
            columns={columns}
            dataSource={accounts}
            onChange={onChange}
            rowKey={(record) => record._id}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerPage;
