import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import { getAllSize } from "../../../api/SizeApi";

const SizeForm = () => {
  const [sizes, setSizes] = useState();
  useEffect(() => {
    async function fetch() {
      const data = await getAllSize();
      setSizes(data);
    }
    fetch();
  }, []);

  const sizeColumn = [
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
      title: "TT",
      render: (_, record) => (
        <Link
          to={`/admin/product/edit/${record._id}`}
          style={{ color: "#ff5f17" }}
        >
          <FiEdit />
        </Link>
      ),
    },
  ];
  return (
    <div className="product-edit product-edit-general">
      <h5 className="title">Kích thước</h5>
      <div className="form">
        <Table
          columns={sizeColumn}
          dataSource={sizes}
          rowKey={(record) => record._id}
        />
      </div>
    </div>
  );
};

export default SizeForm;
