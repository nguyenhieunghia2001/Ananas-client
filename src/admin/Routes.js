import React from "react";
import { Route, Switch } from "react-router";
import LoginPage from "./Page/Auth/LoginPage";
import PrivateRoute from "./PrivateRoute";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/admin/login">
        <LoginPage />
      </Route>
      <Route>
        <Switch>
          <PrivateRoute path="/admin/dashboard" exact component={LoginPage} />
        </Switch>
      </Route>
    </Switch>
  );
};

export default Routes;
