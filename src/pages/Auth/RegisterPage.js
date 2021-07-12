import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import "./style.scss";

const HomePage = () => {
  return (
    <div className="auth">
      <Container>
        <div className="auth-form">
          <h4 className="title">ĐĂNG KÝ</h4>
          <div className="auth-inner">
            <div className="form-group">
              <input type="email" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <input type="password" name="password" placeholder="Mật khẩu" />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="confirm"
                placeholder="Nhập lại mật khẩu"
              />
            </div>
            <div className="auth-link auth-link--forget">
              <p>Khi bấm vào nút đăng ký, bạn đã đồng ý với</p>
              <Link to="">Chính sách và quy định</Link>
            </div>
            <div className="form-btn">
              <button className="btn btn-auth btn-auth--primary" type="submit">
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
