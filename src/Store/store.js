import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from 'States/userSlice';
import orderReducer from 'States/orderSlice';

import headerReducer from 'States/headerSlice';

export default configureStore({
    reducer: {
        headerState: headerReducer,
        orderState: orderReducer,
        userState: userReducer,
        middleware: [ ...getDefaultMiddleware({
            serializableCheck: false
        })],
    },
});