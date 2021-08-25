import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AccountAdminContext } from "./context/accountAdmin";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { userCurrentState } = useContext(AccountAdminContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        userCurrentState.user.username ? (
          <Component {...props} />
        ) : (
          <Redirect to="/admin/login" />
        )
      }
    />
  );
};
export default PrivateRoute;
