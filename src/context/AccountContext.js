import React, { useEffect, useState } from "react";
import { checkIsAuthWithInfo } from "../api/authApi";

//tạo context
export const AccountContext = React.createContext();

const AccountProvider = ({ children }) => {
  const [userCurrentState, setUserCurrentState] = useState({
    user: {},
    loading: false,
  });
  useEffect(() => {
    async function fetch() {
      const { data } = await checkIsAuthWithInfo();

      setUserCurrentState({
        loading: true,
        user: {
          username: data?.username,
          public_Id: data?.public_Id,
        },
      });
    }
    fetch();
  }, []);
  const resetUser = () => {
    setUserCurrentState((pre) => {
      return {
        ...pre,
        user: {},
      };
    });
  };
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
  console.log(userCurrentState);
  return (
    <AccountContext.Provider
      value={{
        userCurrentState,
        resetUser,
        setUser,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
