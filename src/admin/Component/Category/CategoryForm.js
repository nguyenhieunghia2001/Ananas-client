import React, { useEffect, useState } from "react";
import { Table, Modal } from "antd";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import { getAllCategory } from "../../../api/CategoryApi";
import AddCategoryForm from "./AddCategoryForm";
import EditCategoryForm from "./EditCategoryForm";

const CategoryForm = () => {
  const [categories, setCategories] = useState();
  const [isModalAdd, setIsModalAdd] = useState(false);
  const [modalEdit, setModalEdit] = useState({
    isShow: false,
    id: "",
  });
  useEffect(() => {
    async function fetch() {
      const data = await getAllCategory();
      setCategories(data);
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
  const categoryColumn = [
    {
      title: "STT",
      dataIndex: "index",
      render: (_, __, index) => +index + 1,
    },
    {
      title: "Tên danh mục",
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
      <AddCategoryForm
        isModalAdd={isModalAdd}
        setIsModalAdd={setIsModalAdd}
        setCategories={setCategories}
      />
      <EditCategoryForm
        modalEdit={modalEdit?.isShow}
        setModalEdit={setModalEdit}
        id={modalEdit?.id}
        setCategories={setCategories}
      />

      <div className="top">
        <h5 className="title">Danh mục</h5>
        <button
          className="btn btn-header"
          type="primary"
          onClick={showModalAdd}
        >
          Danh mục mới
        </button>
      </div>
      <div className="form">
        <Table
          columns={categoryColumn}
          dataSource={categories}
          rowKey={(record) => record._id}
        />
      </div>
    </div>
  );
};

export default CategoryForm;
