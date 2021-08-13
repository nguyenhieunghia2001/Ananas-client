import React from "react";
import { Route, Switch } from "react-router";
import LayoutAdmin from "./Layout/Layout";
import LoginPage from "./Page/Auth/LoginPage";
import PrivateRoute from "./PrivateRoute";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/admin/login">
        <LoginPage />
      </Route>
      <Route>
        <LayoutAdmin>
          <Switch>
            <PrivateRoute path="/admin/dashboard" exact component={LoginPage} />
          </Switch>
        </LayoutAdmin>
      </Route>
    </Switch>
  );
};

export default Routes;
