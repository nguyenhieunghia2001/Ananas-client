import React, { useEffect, useState } from "react";
import { BiPlus } from "react-icons/bi";
import { Select, Table, Form, InputNumber } from "antd";
import { getAllSize } from "../../../api/SizeApi";

const AttributeForm = ({ form, sizeList }) => {
  const [sizes, setSizes] = useState([]);
  const [dataTable, setDataTable] = useState([]);
  const [quantitysize, setQuantitysize] = useState({
    size: {},
    quantity: "",
    errorSize: function () {
      return this.size ? true : false;
    },
    errorQuantity: function () {
      return this.quantity ? true : false;
    },
  });

  useEffect(() => {
    async function fetch() {
      const data = await getAllSize();

      setSizes(
        data?.map(({ _id, name }) => ({
          label: name,
          value: _id,
        }))
      );
      setDataTable(
        sizeList?.map((item, index) => ({
          key: index + 1,
          quantity: item.quantity,
          size: item.size._id,
          sizeName: item.size.name,
        }))
      );
    }
    fetch();
  }, [sizeList]);
  const onChangeSize = (_, item) => {
    setQuantitysize((pre) => {
      return {
        ...pre,
        size: item,
      };
    });
  };
  const onChangeQuantity = (value) => {
    setQuantitysize((pre) => {
      return {
        ...pre,
        quantity: value,
      };
    });
  };
  const onSubmitAttribute = async () => {
    if (!quantitysize.errorQuantity() || !quantitysize.errorSize()) return;
    await setDataTable((pre) => {
      return [
        ...pre,
        {
          key: +dataTable.length + 1,
          quantity: quantitysize.quantity,
          size: quantitysize.size?.value,
          sizeName: quantitysize.size?.label,
        },
      ];
    });
    setQuantitysize((pre) => {
      return {
        ...pre,
        quantity: "",
        size: "",
      };
    });
  };
  const removeAttribute = async (value) => {
    const index = dataTable.findIndex((item) => item.key === value.key);
    await setDataTable([
      ...dataTable.slice(0, index),
      ...dataTable.slice(index + 1, dataTable.length),
    ]);
  };
  useEffect(() => {
    form.setFieldsValue({
      sizes: dataTable.map((item) => ({
        quantity: item?.quantity,
        size: item?.size,
      })),
    });
  }, [form, dataTable]);
  const columns = [
    {
      title: "Kích thước",
      dataIndex: "sizeName",
    },
    {
      title: "Số lượng",
      className: "column-money",
      dataIndex: "quantity",
    },
    {
      title: "",
      dataIndex: "edit",
      render: (_, record) => (
        <div
          onClick={() => removeAttribute(record)}
          style={{ color: "#ff5f17" }}
        >
          xóa
        </div>
      ),
    },
  ];

  return (
    <div className="product-edit product-edit-attribute">
      <h5 className="title">Kích thước và số lượng</h5>
      <div className="form">
        <div className="horizontal">
          <div className="input-group">
            <span className="lable">Kích thước</span>
            <Select
              allowClear
              placeholder="Kích thước"
              style={{ width: "100%" }}
              value={quantitysize.size?.label}
              onChange={onChangeSize}
              className={quantitysize.errorSize() ? "" : "error-border"}
              options={sizes}
              optionFilterProp="label"
              filterOption={(input, option) =>
                option.label?.toLowerCase().indexOf(input?.toLowerCase()) >= 0
              }
            />
          </div>
          <div className="input-group">
            <span className="lable">Số lượng</span>
            <InputNumber
              name="quantity"
              value={quantitysize?.quantity}
              min={1}
              max={9999}
              defaultValue={1}
              onChange={onChangeQuantity}
              className={quantitysize.errorQuantity() ? "" : "error-border"}
              style={{ width: "100%" }}
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
          <Form.Item name="sizes">
            <Table dataSource={dataTable} columns={columns} />
          </Form.Item>
        </div>
      </div>
    </div>
  );
};

export default AttributeForm;
