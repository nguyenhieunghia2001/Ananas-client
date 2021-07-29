import React, { useEffect, useState } from "react";
import { getCity, getDistrict, getWards } from "../../api/Address";
import "./style.scss";

const reduceProvince = (arr) => {
  return arr?.reduce((result, item) => {
    return [
      ...result,
      {
        code: item?.ProvinceID,
        name: item?.ProvinceName,
      },
    ];
  }, []);
};
const reduceDistrict = (arr) => {
  return arr?.reduce((result, item) => {
    return [
      ...result,
      {
        code: item?.DistrictID,
        name: item?.DistrictName,
      },
    ];
  }, []);
};
const reduceWard = (arr) => {
  return arr?.reduce((result, item) => {
    return [
      ...result,
      {
        code: item?.WardCode,
        name: item?.WardName,
      },
    ];
  }, []);
};

const Add_Address = () => {
  const [isSelect, setIsSelect] = useState(false);
  const [address, setAddress] = useState({
    city: [],
    district: [],
    ward: [],
    active: "PROVINCE", //luu lại tab chọn địa chỉ đang dc active (PROVINCE - DISTRICT - WARD)
    selectPROVINCE: {
      code: "",
      name: "",
    },
    selectDISTRICT: {
      code: "",
      name: "",
    },
    selectWARD: {
      code: "",
      name: "",
    },
    valuesSelect: function () {
      // lưu danh sách tỉnh/huyện/xã phụ thuộc theo tab dc active
      // if(this.active === 'PROVINCE')
      return this.active === "PROVINCE"
        ? this.city
        : this.active === "DISTRICT"
        ? this.district
        : this.ward;
    },
  });
  useEffect(() => {
    async function fetch() {
      const Provinces = await getCity();
      const test = await reduceProvince(Provinces.data);
      setAddress((pre) => {
        return {
          ...pre,
          city: test,
        };
      });
    }
    fetch();
  }, []);
  const changeTab = {
    Province: function () {
      setAddress((pre) => {
        return {
          ...pre,
          active: "PROVINCE",
        };
      });
    },
    District: function () {
      setAddress((pre) => {
        return {
          ...pre,
          active: "DISTRICT",
        };
      });
    },
    Ward: function () {
      setAddress((pre) => {
        return {
          ...pre,
          active: "WARD",
        };
      });
    },
    CleaOnTabProvince: function () {
      // clear arr khi click trong tab (VD: chon tỉnh thì clear huyện, xã)
      const object = { code: "", name: "" };
      setAddress((pre) => {
        return {
          ...pre,
          district: [],
          ward: [],
          selectDISTRICT: object,
          selectWARD: object,
        };
      });
    },
    ClearOnTabDistrict: function () {
      setAddress((pre) => {
        return {
          ...pre,
          ward: [],
          selectWARD: { code: "", name: "" },
        };
      });
    },
  };
  const selectOpion = async ({ code, name }) => {
    let values;
    let key;
    if (address.active === "PROVINCE") {
      const fetch = await getDistrict(code);
      values = reduceDistrict(fetch.data);
      key = "district";
      changeTab.District();
      changeTab.CleaOnTabProvince();
    }
    if (address.active === "DISTRICT") {
      const fetch = await getWards(code);
      values = reduceWard(fetch.data);
      key = "ward";
      changeTab.Ward();
      changeTab.ClearOnTabDistrict();
    }

    await setAddress((pre) => {
      return {
        ...pre,
        [`select${address.active}`]: {
          code,
          name,
        },
        [key]: values,
      };
    });
  };
  return (
    <div className="wrapper">
      <div className="wrapper__title">
        <h4>Địa Chỉ Mới</h4>
      </div>
      <div className="wrapper__cont">
        <div className="nameandphone">
          <input className="txtname" name="name" placeholder="Họ và tên" />
          <input
            className="txtphone"
            name="phone"
            placeholder="Số điện thoại"
          />
        </div>
        <div className="select-address">
          <div className="group" onClick={() => setIsSelect(!isSelect)}>
            <input
              value={`${address.selectPROVINCE?.name}${
                address.selectDISTRICT?.name && ","
              } ${address.selectDISTRICT?.name}${
                address.selectWARD?.name && ","
              } ${address.selectWARD?.name}`}
              placeholder="Tỉnh/ Thành phố, Quận/Huyện, Phường/Xã"
              readOnly
            />
            <span>+</span>
          </div>
          {/* {isSelect && ( */}
          <div className="cont">
            <div className="header">
              <div
                onClick={changeTab.Province}
                className={`header-item city ${
                  address.active === "PROVINCE" ? "header-item--active" : ""
                }`}
              >
                Tỉnh/ Thành phố
              </div>
              <div
                onClick={changeTab.District}
                className={`header-item district ${
                  address.active === "DISTRICT" ? "header-item--active" : ""
                }`}
              >
                Quận/Huyện
              </div>
              <div
                onClick={changeTab.Ward}
                className={`header-item wards ${
                  address.active === "WARD" ? "header-item--active" : ""
                }`}
              >
                Phường/Xã
              </div>
            </div>
            <div className="body">
              <ul>
                {Array.isArray(address.valuesSelect()) &&
                  address.valuesSelect()?.map((item) => (
                    //option-active
                    <li
                      key={item?.code}
                      onClick={() => selectOpion(item)}
                      className={
                        address.selectPROVINCE.code?.toString() ===
                          item.code?.toString() ||
                        address.selectDISTRICT.code?.toString() ===
                          item.code?.toString() ||
                        address.selectWARD.code?.toString() ===
                          item.code?.toString()
                          ? "option-active"
                          : ""
                      }
                    >
                      {item.name}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          {/* )} */}
        </div>
      </div>
      <div className="btn__group">
        <button className="btn btn-pre btn-sm">TRỞ LẠI</button>
        <button className="btn btn-complete btn-sm">HOÀN THÀNH</button>
      </div>
    </div>
  );
};

export default Add_Address;
