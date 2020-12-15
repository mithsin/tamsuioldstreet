import React, { createContext, useEffect } from 'react';

const UserStatusCheck = createContext({});

const UserStatusProvider = ({ children }) => {

  
  
  // console.log('UserStatusProvider-userIsSignIn--->', userIsSignIn)
    return (
        <UserStatusCheck.Provider >
            {children}
        </UserStatusCheck.Provider>
    );
};

export default UserStatusProvider;