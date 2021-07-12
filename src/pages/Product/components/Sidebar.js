import React, { useEffect, useState } from "react";
import "../style.scss";
import { Link } from "react-router-dom";
import ExpanderSidebar from "./ExpanderSidebar";
import { getAllCategory } from "../../../api/CategoryApi";
import { getAllStatus } from "../../../api/StatusApi";
import { useQuery } from "../../../hooks";

const Sidebar = ({ handleProduct }) => {
  const [categoriesState, setCategoriesState] = useState();
  const [statuesState, setStatuesState] = useState();

  useEffect(() => {
    (async function () {
      const categories = await getAllCategory();
      const statuses = await getAllStatus();
      setCategoriesState(categories);
      setStatuesState(statuses);
    })();
  }, []);

  const query = useQuery();
  const genderQuery = query.get("gender");
  const catQuery = query.get("cat");
  const statusQuery = query.get("status");
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <ul className="nav nav-tabs">
          <li
            className={
              !genderQuery || genderQuery === "null" ? "nav-tabs-active" : ""
            }
          >
            <Link to="/products" onClick={() => handleProduct()}>
              TẤT CẢ
            </Link>
          </li>
          <li className="type-divider"></li>
          <li
            className={
              genderQuery && (genderQuery === "MALE" ? "nav-tabs-active" : "")
            }
          >
            <Link
              to="products?gender=MALE"
              onClick={() => handleProduct("MALE")}
            >
              NAM
            </Link>
          </li>
          <li className="type-divider"></li>
          <li
            className={
              genderQuery && (genderQuery === "FEMALE" ? "nav-tabs-active" : "")
            }
          >
            <Link
              to="products?gender=FEMALE"
              onClick={() => handleProduct("FEMALE")}
            >
              NỮ
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebar__divider"></div>
      <div className="sidebar__pane">
        <ul className="nav nav-stacked">
          <li className="active">Giày</li>
        </ul>
      </div>
      <div className="sidebar__divider"></div>
      <div className="sidebar__expander">
        <ExpanderSidebar title="DÒNG SẢN PHẨM">
          <ul className="nav nav-stacked">
            {categoriesState && Array.isArray(categoriesState) &&
              categoriesState.map((cat) => (
                <li
                  key={cat._id}
                  className={catQuery && (catQuery === cat._id ? "active" : "")}
                >
                  <Link
                    to={`products?gender=${genderQuery}&cat=${cat._id}&status=${statusQuery}`}
                    onClick={() =>
                      handleProduct(genderQuery, cat._id, statusQuery)
                    }
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
          </ul>
        </ExpanderSidebar>
      </div>
      <div className="divider-img"></div>
      <div className="sidebar__expander">
        <ExpanderSidebar title="TRẠNG THÁI">
          <ul className="nav nav-stacked">
            {statuesState && Array.isArray(statuesState) &&
              statuesState.map((sta) => (
                <li
                  key={sta._id}
                  className={
                    statusQuery && (statusQuery === sta._id ? "active" : "")
                  }
                >
                  <Link
                    to={`products?gender=${genderQuery}&cat=${catQuery}&status=${sta._id}`}
                    onClick={() =>
                      handleProduct(genderQuery, catQuery, sta._id)
                    }
                  >
                    {sta.name}
                  </Link>
                </li>
              ))}
          </ul>
        </ExpanderSidebar>
      </div>
    </div>
  );
};

export default Sidebar;
