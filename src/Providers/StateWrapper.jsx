import React, { useEffect } from 'react';
import { menuListState, setMenu } from 'States/menuSlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import "./styles.scss";

const StateWrapper = ({children}) => {
    const dispatch = useDispatch();
    const currentMenuState = useSelector(menuListState)
    useEffect(()=>{
        let menuSession = sessionStorage.getItem('menu');
        // console.log('menuListState-->: ', currentMenuState)
        if(currentMenuState !== null && (currentMenuState?.length < 1) && !menuSession){
            axios.get(process.env.REACT_APP_API_RESTAURANT_MENU)
                .then(res => {
                    // console.log('res.data--->: ', JSON.stringify(res.data.menu))
                    sessionStorage.setItem('menu', JSON.stringify(res.data.menu));

                    dispatch(setMenu(res.data.menu));
                })
                .catch(err => console.log(err))
        };
        if(currentMenuState !== null && (currentMenuState?.length < 1) && menuSession){
            // console.log('menuSession', menuSession)
            dispatch(setMenu(JSON.parse(menuSession)));
        }
    },[])
    return(
        <div id="state-wrapper" className="StateWrapperBody">
            {children}
        </div>
    );
};

export default StateWrapper;