import React, { useState } from 'react'

//tạo context
export const AccountContext = React.createContext();

const AccountProvider= ({children}) => {
    const [userCurrentState, setUserCurrentState]= useState();
    
    return (
        <AccountContext.Provider
            value={{
                userCurrentState,
                setUserCurrentState,
            }}>
            {children}
        </AccountContext.Provider>
    )
}

export default AccountProvider;