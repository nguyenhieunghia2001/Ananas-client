import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { getAllProductSelling } from "../../../api/ProductApi";
import { convertStringtoMoney } from "../../../utits/index";

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
    title: "Giá",
    dataIndex: "price",
    render: (text) => <div>{convertStringtoMoney(text)}</div>,
  },
  {
    title: "Đã bán",
    dataIndex: "sold",
  },
];
const Selling = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    async function fetch() {
      const res = await getAllProductSelling();
      setProducts(res);
    }
    fetch();
  }, []);
  console.log(products);
  return (
    <div className="selling">
      <Table
        columns={columns}
        dataSource={products}
        rowKey={(record) => record?._id}
      />
    </div>
  );
};

export default Selling;
