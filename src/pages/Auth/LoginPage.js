import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import './style.scss'

const HomePage = () => {
  return (
    <div className="auth">
      <Container>
          <div className="auth-form">
            <h4 className="title">ĐĂNG NHẬP</h4>
            <div className="auth-inner">
                <div className="form-group">
                    <input type="email" name="email" placeholder="email" />
                </div>
                <div className="form-group">
                    <input type="password" name="password" placeholder="Mật khẩu" />
                </div>
                <div className="form-btn">
                    <button className="btn btn-auth btn-auth--primary" type="submit">ĐĂNG NHẬP</button>
                </div>
                <div className="auth-link auth-link--forget">
                    <Link to="" >Quên mật khẩu</Link>
                </div>
                <div className="divider">
                    <div></div>
                    <span>hoặc</span>
                    <div></div>
                </div>
                <div className="form-btn">
                    <button className="btn btn-auth btn-auth--fb" type="submit">FACEBOOK</button>
                </div>
                <div className="form-btn">
                    <button className="btn btn-auth btn-auth--gg" type="submit">GOOGLE</button>
                </div>
                <div className="auth-link">
                    Chưa có tài khoản?  <Link to="/auth/register" > Đăng ký ngay</Link>
                </div>
            </div>
          </div>
      </Container>
    </div>
  );
};

export default HomePage;
