import React, { useEffect, useState } from "react";
import { checkIsAuthWithInfo } from "../api/authApi";

//tạo context
export const AccountContext = React.createContext();

const AccountProvider = ({ children }) => {
  const [userCurrentState, setUserCurrentState] = useState({});
  useEffect(() => {
    (async function () {
      try {
        const auth = await checkIsAuthWithInfo();
        console.log(auth);
        auth &&
          setUserCurrentState({
            username: auth?.username,
          });
      } catch (error) {
        console.log(error);
      }
    })();
  }, [setUserCurrentState]);
  console.log('check loop');
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
