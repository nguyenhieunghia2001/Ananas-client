import React, { useEffect, useState } from "react";
import { Table } from "antd";
import "./style.scss";
import { Link } from "react-router-dom";
import { getAllProduct } from "../../../api/ProductApi";
import { convertStringtoMoney } from "../../../utits/index";
import {FiEdit} from 'react-icons/fi'

const columns = [
  {
    title: "STT",
    dataIndex: "index",
    render: (_, __, index) => +index + 1,
  },
  {
    title: "Tên sản phẩm",
    dataIndex: "name",
  },
  {
    title: "Danh mục",
    dataIndex: ["category", "name"],
  },
  {
    title: "Trạng thái",
    dataIndex: ["status", "name"],
  },
  {
    title: "Giới tính",
    dataIndex: "gender",
  },
  {
    title: "Giá",
    dataIndex: "price",
    render: (text) => (
      <p style={{ color: "#ff5f17", fontWeight: "700" }}>
        {convertStringtoMoney(text)}
      </p>
    ),
    sorter: (a, b) => +a.price - +b.price,
  },
  {
    title: "TT",
    render: (_, record) => (
      <Link to={`/admin/product/edit/${record._id}`} style={{ color: "#ff5f17" }}>
        <FiEdit />
      </Link>
    ),
  },
];

const ProductPage = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    async function fetch() {
      const data = await getAllProduct();
      setProducts(data);
    }
    fetch();
  }, []);
  const onChange = (pagination, filters, sorter, extra) => {
    // console.log("params", pagination, filters, sorter, extra);
  };
  console.log(products);
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
          <Table
            columns={columns}
            dataSource={products}
            onChange={onChange}
            rowKey={(record) => record._id}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
