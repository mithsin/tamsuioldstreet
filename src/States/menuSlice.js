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
            state.menu = action.payload;
        }
    },
});

export const {
    setMenu,
    setMenuItemUpdate,
} = menuSlice.actions;

export const setUpdateMenu = (menuItem) => (dispatch, getState) => {
    const menuState = getState().menuState.menu;
    const updateMenu = menuState.map(category => {
        const menuListArray = category.menuList.map(item => 
            (item.itemNumber !== menuItem.itemNumber)
                ? item
                : menuItem)
        return {
            ...category,
            menuList: menuListArray
        }
        
    })

    dispatch(setMenuItemUpdate(updateMenu));

    const params = {
        restaurantId: "ichot-1k19fijsal1naskj1",
        menu: updateMenu
    }
    sessionStorage.setItem('menu', JSON.stringify(updateMenu));
    axios.put(process.env.REACT_APP_API_RESTAURANT_MENU, params)
        .then(res=> console.log(res.data))
        .catch(err => console.log(err));
};

export const setAddNewMenuCategory = (menuState) => (dispatch) => {
    const params = {
        restaurantId: "ichot-1k19fijsal1naskj1",
        menu: menuState
    }

    dispatch(setMenuItemUpdate(menuState));
    sessionStorage.setItem('menu', JSON.stringify(menuState));

    axios.put(process.env.REACT_APP_API_RESTAURANT_MENU, params)
        .then(res=>{
            dispatch(setMenuItemUpdate(menuState));
            sessionStorage.setItem('menu', JSON.stringify(menuState));
        })
        .catch(err => console.log(err));
} 

export const menuListState = state => state.menuState.menu;

export default menuSlice.reducer;