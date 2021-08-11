import React from "react";
import { Container } from "reactstrap";
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
        <SidebarAccount />
        <div className="account__cont">
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
      </div>
    </Container>
  );
};

export default AccountPage;
