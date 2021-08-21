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
      const { data, status } = await checkIsAuthWithInfo();

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
  console.log(userCurrentState);
  return (
    <AccountContext.Provider
      value={{
        userCurrentState,
        setUserCurrentState,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
