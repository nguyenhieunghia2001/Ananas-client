import React, { useContext, useEffect } from "react";
import { Container } from "reactstrap";
import { RiSearchEyeLine } from "react-icons/ri";
import { GoLocation } from "react-icons/go";
import { FaUserAlt } from "react-icons/fa";
import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AccountContext } from "../../../../context/AccountContext";
import "../header.scss";

const HeaderTop = () => {
  const { userCurrentState } = useContext(AccountContext);
  ///Dis Mount
  // useEffect(() => {
  //   (async function () {
  //     try {
  //       const auth = await checkIsAuthWithInfo();
  //       console.log(auth);
  //       auth && setUserCurrentState({
  //         username: auth?.username,
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // }, [setUserCurrentState]);
  console.log(userCurrentState);
  return (
    <div className="headerTop">
      <Container>
        <div className="headerTop__list">
          <div className="headerTop__item">
            <RiSearchEyeLine className="icon-sm" />
            <span>Tra cứu đơn hàng</span>
          </div>
          <div className="headerTop__item">
            <GoLocation className="icon-sm" />
            <span>Tìm cửa hàng</span>
          </div>
          <div className="headerTop__item">
            <AiFillHeart className="icon-sm" />
            <span>
              <Link to="/love">Yêu thích</Link>
            </span>
          </div>
          <div className="headerTop__item">
            <FaUserAlt className="icon-sm" />
            <span>
              {Object.keys(userCurrentState).length > 0 && (
                <Link to="/account/profile">{userCurrentState.username}</Link>
              )}
              {!userCurrentState ||
                (Object.keys(userCurrentState).length < 1 && (
                  <Link to="/auth/login">Đăng nhập</Link>
                ))}
            </span>
          </div>
          <div className="headerTop__item">
            <AiOutlineShoppingCart className="icon-sm" />
            <span>
              <Link to="/cart">Giỏ hàng</Link>
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default HeaderTop;
