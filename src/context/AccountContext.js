import React, { useEffect, useState } from "react";
import { checkIsAuthWithInfo } from "../api/authApi";

//tạo context
export const AccountContext = React.createContext();

const AccountProvider = ({ children }) => {
  const [userCurrentState, setUserCurrentState] = useState({});
  const [loaddingUserState, setLoaddingUserState] = useState(false);
  useEffect(() => {
    async function fetch() {
      try {
        const { data, status } = await checkIsAuthWithInfo();
        status === 200 &&
          (await setUserCurrentState({
            username: data?.username,
            public_Id: data?.public_Id,
          }));
        setLoaddingUserState(true);
        console.log("loadding>", loaddingUserState);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, [loaddingUserState]);
  return (
    <AccountContext.Provider
      value={{
        userCurrentState,
        setUserCurrentState,
        loaddingUserState,
        setLoaddingUserState,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
