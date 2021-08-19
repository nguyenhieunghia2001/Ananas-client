import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { getAllSize } from "../../../api/SizeApi";
import AddSizeForm from "./AddSizeForm";
import EditSizeForm from "./EditSizeForm";

const SizeForm = () => {
  const [sizes, setSizes] = useState();
  const [isModalAdd, setIsModalAdd] = useState(false);
  const [modalEdit, setModalEdit] = useState({
    isShow: false,
    id: "",
  });
  useEffect(() => {
    async function fetch() {
      const data = await getAllSize();
      setSizes(data);
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

  const sizeColumn = [
    {
      title: "STT",
      dataIndex: "index",
      render: (_, __, index) => +index + 1,
    },
    {
      title: "Kích thước",
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
      <AddSizeForm
        isModalAdd={isModalAdd}
        setIsModalAdd={setIsModalAdd}
        setSizes={setSizes}
      />
      <EditSizeForm
        modalEdit={modalEdit?.isShow}
        setModalEdit={setModalEdit}
        id={modalEdit?.id}
        setSizes={setSizes}
      />
      <div className="top">
        <h5 className="title">Kích thước</h5>
        <button
          className="btn btn-header"
          type="primary"
          onClick={showModalAdd}
        >
          Kích thước mới
        </button>
      </div>
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
