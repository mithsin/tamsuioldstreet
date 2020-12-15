import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from 'States/userSlice';
import headerReducer from 'States/headerSlice';

export default configureStore({
    reducer: {
        headerState: headerReducer,
        userState: userReducer,
        middleware: [ ...getDefaultMiddleware({
            serializableCheck: false
        })],
    },
});