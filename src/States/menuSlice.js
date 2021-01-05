import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initState = {
    menu: [],
}

export const menuSlice = createSlice({
    name: 'menuState',
    initialState: initState,
    reducers: {
        setMenu: (state, action) => {
            const initMenu = action.payload;
            return { ...state, menu: initMenu }
        },
        setMenuItemUpdate: (state, action) => {
            const updateMenu = state.menu.map(category => {
                category.menuList.map(item => 
                    (item.itemNumber !== action.payload.itemNumber)
                        ? item
                        : action.payload)
            })
            localStorage.setItem('menu', JSON.stringify(updateMenu));
            return {...state, menu: updateMenu}
        },
    },
});

export const {
    setMenu,
    setMenuItemUpdate,
} = menuSlice.actions;

export const setInitMenu = ({}) => dispatch => {
    console.log("page")
    // let menuSession = sessionStorage.getItem('menu');
    // console.log('menuListState-->: ', menuListState)
    // if(!menuSession && !menuListState){
    //     Axios.get(process.env.REACT_APP_API_RESTAURANT_MENU)
    //         .then(res => {
    //             dispatch(setMenu(res.data));
    //             res.data
    //         })
    //         .catch(err => console.log(err))
    // };
    // if(!menuListState){
    //     dispatch(setMenu(res.data));
    // }
};

export const menuListState = state => state.menuState.menu;

export default menuSlice.reducer;