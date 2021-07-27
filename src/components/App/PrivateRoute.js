import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AccountContext } from "../../context/AccountContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { userCurrentState, loaddingUserState } = useContext(AccountContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        loaddingUserState &&
        (userCurrentState?.username ? (
          <Component {...props} />
        ) : (
          <Redirect to="/auth/login" />
        ))
      }
    />
  );
};
export default PrivateRoute;
