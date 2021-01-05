import React, { useState, useEffect, useCallback } from 'react';
import AdminOrders from './AdminOrders';
import AdminMenu from './AdminMenu';
import axios from 'axios';

const Admin = () => {
    const [currentOrders, setCurrentOrders] = useState([]);
    const wsUri = process.env.REACT_APP_API_WEBSOCKETS;
    const websocket = new WebSocket(`${wsUri}?ID=admin`);
    const [notic, setNotice] = useState()
    useEffect(()=>{
            axios.get(process.env.REACT_APP_API_RESTAURANT_ORDER)
                .then(res => {
                    setCurrentOrders(res.data.orders)
                })
                .catch(err => console.log(err))
    },[]);
    useEffect(()=>{
        if(notic){
            axios.get(process.env.REACT_APP_API_RESTAURANT_ORDER)
                .then(res => {
                    setCurrentOrders(res.data.orders)
                })
                .catch(err => console.log(err))
        }
    },[notic]);

    websocket.onmessage = (evt) => { 
        setNotice(evt.data)
    };

    return(
        <div>
            <h1>ADMIN DASHBOARD</h1>
            
            <AdminOrders 
                setNotice={setNotice}
                notic={notic}
                currentOrders={currentOrders}
                setCurrentOrders={setCurrentOrders}/>
            <AdminMenu />
        </div>
    )
};

export default Admin;