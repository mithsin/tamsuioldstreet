import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

export const orderSlice = createSlice({
    name: 'orderState',
    initialState: {
        cart: [],
    },
    reducers: {
        setCart: (state, action) => {
            state.cart = action.payload;
        },
        setCartUpdate: (state, action) => {
            const updateCart = state.cart.map(item => {
                return ( item.itemNumber !== action.payload.itemNumber)
                    ? item 
                    : {...item, ...action.payload}
            })
            console.log('action.payload--->: ', updateCart)
            return {...state, cart: updateCart}
        },
    },
});
 
export const {
    setCart,
    setCartUpdate
} = orderSlice.actions;

export const orderDetailState = state => state.orderState.cart;

export default orderSlice.reducer;