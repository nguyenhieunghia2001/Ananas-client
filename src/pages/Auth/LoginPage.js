import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Container } from "reactstrap";
import { loginAuth } from "../../api/authApi";
import { FiAlertOctagon } from "react-icons/fi";
import { AccountContext } from "../../context/AccountContext";
import "./style.scss";

const HomePage = () => {
  let history = useHistory();
  const { setUserCurrentState } = useContext(AccountContext);
  const [errorFormState, setErrorFormState] = useState([]);
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const handleSubmitRegister = async () => {
    try {
      const login = await loginAuth(formState.email, formState.password);
      if (login.status === 200) {
        setUserCurrentState(login.data?.username)
        history.push("/");
      }
      if (login.status === 422) setErrorFormState(login.data);
    } catch (error) {
      console.log(error);
    }
  };
  const onChangeInput = (e) => {
    const inputTag = e.target;

    setFormState((pre) => {
      return {
        ...pre,
        [inputTag.name]: inputTag.value,
      };
    });
  };
  return (
    <div className="auth">
      <Container>
        <div className="auth-form">
          <h4 className="title">ĐĂNG NHẬP</h4>
          <div className="auth-inner">
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="email"
                onChange={(e) => onChangeInput(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                placeholder="Mật khẩu"
                onChange={(e) => onChangeInput(e)}
              />
            </div>
            <div className="error-group">
              {errorFormState &&
                Array.isArray(errorFormState) &&
                errorFormState.map((error, index) => (
                  <div className="error-item" key={index}>
                    <FiAlertOctagon />
                    <span>{error.msg}</span>
                  </div>
                ))}
            </div>
            <div className="form-btn">
              <button
                className="btn btn-auth btn-auth--primary"
                type="submit"
                onClick={() => handleSubmitRegister()}
              >
                ĐĂNG NHẬP
              </button>
            </div>
            <div className="auth-link auth-link--forget">
              <Link to="">Quên mật khẩu</Link>
            </div>
            <div className="divider">
              <div></div>
              <span>hoặc</span>
              <div></div>
            </div>
            <div className="form-btn">
              <button className="btn btn-auth btn-auth--fb" type="submit">
                FACEBOOK
              </button>
            </div>
            <div className="form-btn">
              <button className="btn btn-auth btn-auth--gg" type="submit">
                GOOGLE
              </button>
            </div>
            <div className="auth-link">
              Chưa có tài khoản? <Link to="/auth/register"> Đăng ký ngay</Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
