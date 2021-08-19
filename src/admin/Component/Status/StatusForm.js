import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { getAllStatus } from "../../../api/StatusApi";
import AddStatusForm from "./AddStatusForm";
import EditStatusForm from "./EditStatusForm";

const StatusForm = () => {
  const [statuses, setStatuses] = useState();
  const [isModalAdd, setIsModalAdd] = useState(false);
  const [modalEdit, setModalEdit] = useState({
    isShow: false,
    id: "",
  });
  useEffect(() => {
    async function fetch() {
      const data = await getAllStatus();
      setStatuses(data);
    }
    fetch();
  }, []);
  const showModalAdd = () => {
    setIsModalAdd(true);
  };
  const showModalEdit = (id) => {
    setModalEdit({
      isShow: true,
      id,
    });
  };
  const statusColumn = [
    {
      title: "STT",
      dataIndex: "index",
      render: (_, __, index) => +index + 1,
    },
    {
      title: "Trạng thái",
      dataIndex: "name",
    },
    {
      title: "TT",
      render: (_, record) => (
        <div
          style={{ color: "#ff5f17", cursor: "pointer" }}
          onClick={() => showModalEdit(record._id)}
        >
          <FiEdit />
        </div>
      ),
    },
  ];
  return (
    <div className="product-edit product-edit-general">
      <AddStatusForm
        isModalAdd={isModalAdd}
        setIsModalAdd={setIsModalAdd}
        setStatuses={setStatuses}
      />
      <EditStatusForm
        modalEdit={modalEdit?.isShow}
        setModalEdit={setModalEdit}
        id={modalEdit?.id}
        setStatuses={setStatuses}
      />
      <div className="top">
        <h5 className="title">Trạng thái</h5>
        <button
          className="btn btn-header"
          type="primary"
          onClick={showModalAdd}
        >
          Trạng thái mới
        </button>
      </div>

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
