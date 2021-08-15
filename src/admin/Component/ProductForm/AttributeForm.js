import React, { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { Input, Select, Table } from "antd";

const { Option } = Select;
const columns = [
  {
    title: "Kích thước",
    dataIndex: "size",
  },
  {
    title: "Số lượng",
    className: "column-money",
    dataIndex: "quantity",
  },
  {
    title: "",
    dataIndex: "edit",
    render: (_, record) => <div onClick={() => {console.log(record)}}>xóa</div>
  },
];

const AttributeForm = ({ form }) => {
  const [quantitysize, setQuantitysize] = useState({
    key: "",
    size: "",
    quantity: "",
    errorSize: function () {
      return this.size ? true : false;
    },
    errorQuantity: function () {
      return this.quantity ? true : false;
    },
  });
  const onChangeSize = (e) => {
    setQuantitysize((pre) => {
      return {
        ...pre,
        size: e,
      };
    });
  };
  const onChangeQuantity = (e) => {
    setQuantitysize((pre) => {
      return {
        ...pre,
        quantity: e.target.value,
      };
    });
  };
  const onSubmitAttribute = async () => {
    if (!quantitysize.errorQuantity() || !quantitysize.errorSize()) return;
    const { sizes } = form.getFieldValue();
    console.log(sizes);
    await form.setFieldsValue({
      ...form.getFieldValue(),
      sizes: !sizes
        ? [{ ...quantitysize, key: 1 }]
        : [...sizes, { ...quantitysize, key: sizes.length + 1 }],
    });
    setQuantitysize((pre) => {
      return {
        ...pre,
        quantity: "",
        size: "",
      };
    });
    console.log(form.getFieldValue());
  };
  return (
    <div className="product-edit product-edit-attribute">
      <h5 className="title">Kích thước và số lượng</h5>
      <div className="form">
        <div className="horizontal">
          <div className="input-group">
            <span className="lable">Kích thước</span>
            <Select
              placeholder="Kích thước"
              value={quantitysize?.size}
              style={{ width: "100%" }}
              onChange={onChangeSize}
              className={quantitysize.errorSize() ? "" : "error-border"}
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled" disabled>
                Disabled
              </Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </div>
          <div className="input-group">
            <span className="lable">Số lượng</span>
            <Input
              name="quantity"
              value={quantitysize?.quantity}
              onChange={onChangeQuantity}
              className={quantitysize.errorQuantity() ? "" : "error-border"}
            />
          </div>
          <button
            className="btn btn-add"
            type="button"
            onClick={onSubmitAttribute}
          >
            <BiPlus />
          </button>
        </div>
        <div className="table-attribute">
          <Table dataSource={form.getFieldValue()?.sizes} columns={columns} />
        </div>
      </div>
    </div>
  );
};

export default AttributeForm;
