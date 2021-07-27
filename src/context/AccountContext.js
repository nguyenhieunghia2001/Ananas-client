import React, { useEffect, useState } from "react";
import { checkIsAuthWithInfo } from "../api/authApi";

//tạo context
export const AccountContext = React.createContext();

const AccountProvider = ({ children }) => {
  const [userCurrentState, setUserCurrentState] = useState({});
  useEffect(() => {
    (async function () {
      try {
        const { data, status } = await checkIsAuthWithInfo();
        status === 200 &&
          setUserCurrentState({
            username: data?.username,
          });
      } catch (error) {
        console.log(error);
      }
    })();
  }, [setUserCurrentState]);
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
