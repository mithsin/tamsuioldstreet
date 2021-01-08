import React, { createContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userIsLoggedIn, userLoginCheck } from 'States/userSlice';
const UserStatusCheck = createContext({});

const UserStatusProvider = ({ children }) => {
    const dispatch = useDispatch();
    const isLogin = useSelector(userIsLoggedIn)
    if(!isLogin){
        dispatch(userLoginCheck())
    }
    console.log('islogin ', isLogin)
    return (
        <UserStatusCheck.Provider value={isLogin}>
            {children}
        </UserStatusCheck.Provider>
    );
};

export default UserStatusProvider;