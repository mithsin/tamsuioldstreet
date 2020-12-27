import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from 'States/userSlice';
import orderReducer from 'States/orderSlice';
import menuReducer from 'States/menuSlice';
import headerReducer from 'States/headerSlice';

export default configureStore({
    reducer: {
        headerState: headerReducer,
        orderState: orderReducer,
        userState: userReducer,
        menuState: menuReducer,
        middleware: [ ...getDefaultMiddleware({
            serializableCheck: false
        })],
    },
});