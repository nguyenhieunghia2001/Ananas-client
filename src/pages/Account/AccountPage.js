import React from "react";
import { Col, Container, Row } from "reactstrap";
import Profile from "./components/Profile";
import { Switch, Route } from "react-router-dom";
import SidebarAccount from "./components/Sidebar";
import ChangePassword from "./components/ChagePassword";
import "./style.scss";
import Address from "./components/Address";

const AccountPage = () => {
  return (
    <Container>
      <div className="account">
        {/* <Row>
          <Col lg="3"> */}
        <SidebarAccount />
        {/* </Col> */}
        {/* <Col lg="9"> */}
        <div className="account__cont">
          {/* <ChangePassword /> */}
          <Switch>
            <Route path="/account/profile" exact>
              <Profile />
            </Route>
            <Route path="/account/password" exact>
              <ChangePassword />
            </Route>
            <Route path="/account/address" exact>
              <Address />
            </Route>
          </Switch>
        </div>
        {/* </Col>
        </Row> */}
      </div>
    </Container>
  );
};

export default AccountPage;
