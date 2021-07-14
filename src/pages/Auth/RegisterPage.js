import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Container } from "reactstrap";
import { auth } from "../../api/authApi";
import { FiAlertOctagon } from "react-icons/fi";
import "./style.scss";
import { setGlobalCssModule } from "reactstrap/es/utils";

const HomePage = () => {
  let history = useHistory();
  const [errorFormState, setErrorFormState] = useState([]);
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    confirm: "",
  });

  const handleSubmitRegister = async () => {
    try {
      // console.log(formState);
      if (formState.confirm !== formState.password) {
        setErrorFormState([{ msg: "Nhập lại mật khẩu không trùng khớp!" }]);
      } else {
        const register = await auth(formState.email, formState.password);
        if(register.status === 200) history.push('/auth/login');
        if (register.status === 422) setErrorFormState(register.data);
      }
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
          <h4 className="title">ĐĂNG KÝ</h4>
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
            <div className="form-group">
              <input
                type="password"
                name="confirm"
                placeholder="Nhập lại mật khẩu"
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
            <div className="auth-link auth-link--forget">
              <p>Khi bấm vào nút đăng ký, bạn đã đồng ý với</p>
              <Link to="">Chính sách và quy định</Link>
            </div>
            <div className="form-btn">
              <button
                className="btn btn-auth btn-auth--primary"
                type="button"
                onClick={() => handleSubmitRegister()}
              >
                ĐĂNG KÝ
              </button>
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
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
