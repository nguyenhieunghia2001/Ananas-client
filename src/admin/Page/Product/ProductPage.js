import React from "react";
import { Table } from "antd";
import "./style.scss";
import { Link } from "react-router-dom";

const columns = [
  {
    title: "STT",
    dataIndex: "key",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.key - b.key,
  },
  {
    title: "Tên sản phẩm",
    dataIndex: ["name", 'txt'],
  },
  {
    title: "Danh mục",
    dataIndex: "category",
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
  },
  {
    title: "Giới tính",
    dataIndex: "gender",
  },
  {
    title: "Giá",
    dataIndex: "price",
  },
];

const data = [
  {
    key: "1",
    name: {
      age: 12,
      txt: "nghiadx",
    },
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: {
      age: 12,
      txt: "nghiadx",
    },
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: {
      age: 12,
      txt: "nghiadx",
    },
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: "4",
    name: {
      age: 12,
      txt: "nghiadx",
    },
    age: 32,
    address: "London No. 2 Lake Park",
  },
];

const ProductPage = () => {
  const onChange = (pagination, filters, sorter, extra) => {
    // console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <div className="wrapper wrapper-product">
      <header>
        <h5 className="title">Sản phẩm</h5>
        <div className="header-right">
          <Link to="/admin/product/add" className="btn btn-header">
            Sản phẩm mới
          </Link>
        </div>
      </header>
      <div className="content">
        <div className="table">
          <Table columns={columns} dataSource={data} onChange={onChange} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
