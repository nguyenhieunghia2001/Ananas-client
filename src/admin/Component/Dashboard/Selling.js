import React from "react";
import { Table } from "reactstrap";

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
      dataIndex: 'price',
    },
    {
      title: "Đã bán",
      dataIndex: '',
    }
  ];
const Selling = () => {
  return <div className="selling">
      <Table
            columns={columns}
            // dataSource={accounts}
            // rowKey={(record) => record._id}
          />
  </div>;
};

export default Selling;
