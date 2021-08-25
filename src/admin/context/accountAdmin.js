import React, { useState } from "react";
import { useHistory } from "react-router-dom";

//tạo context
export const AccountAdminContext = React.createContext();

const AccountAdminProvider = ({ children }) => {
  const history = useHistory();
  const [userCurrentState, setUserCurrentState] = useState({
    user: {},
    loading: false,
  });
  const setUser = (account) => {
    setUserCurrentState((pre) => {
      return {
        ...pre,
        user: {
          username: account?.username,
          public_Id: account?.public_Id,
        },
      };
    });
  };
  const resetUser = () => {
    setUserCurrentState({ user: {}, loading: false });
    history.push("/admin/login");
  };
  return (
    <AccountAdminContext.Provider
      value={{
        userCurrentState,
        setUser,
        resetUser
      }}
    >
      {children}
    </AccountAdminContext.Provider>
  );
};

export default AccountAdminProvider;
