import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import { getAllStatus } from "../../../api/StatusApi";

const StatusForm = () => {
  const [statuses, setStatuses] = useState();
  useEffect(() => {
    async function fetch() {
      const data = await getAllStatus();
      setStatuses(data);
    }
    fetch();
  }, []);

  const statusColumn = [
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
      <h5 className="title">Trạng thái</h5>
      <div className="form">
        <Table
          columns={statusColumn}
          dataSource={statuses}
          rowKey={(record) => record._id}
        />
      </div>
    </div>
  );
};

export default StatusForm;
