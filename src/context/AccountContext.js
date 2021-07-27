import React, { useEffect, useState } from "react";
import { checkIsAuthWithInfo } from "../api/authApi";

//tạo context
export const AccountContext = React.createContext();

const AccountProvider = ({ children }) => {
  const [userCurrentState, setUserCurrentState] = useState({});
  const [loaddingUserState, setLoaddingUserState] = useState(false);
  useEffect(() => {
    (async function () {
      try {
        const { data, status } = await checkIsAuthWithInfo();
        status === 200 &&
          (await setUserCurrentState({
            username: data?.username,
          }));
        setLoaddingUserState(true);
      } catch (error) {
        console.log(error);
      }
    })();

  }, [loaddingUserState]);
  return (
    <AccountContext.Provider
      value={{
        userCurrentState,
        setUserCurrentState,
        loaddingUserState,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
