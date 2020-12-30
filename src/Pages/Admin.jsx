import React, { useState, useEffect, useCallback } from 'react';
import OrderBlock from 'Components/AdminComponents/OrderBlock';
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
    
    // const websocketCB = useCallback(()=>{
    //     websocket.onopen = (evnt) => console.log(evnt.data);
    // },[])

    // useEffect(()=>{
    //     websocketCB();
    // },[])

    websocket.onopen = (event) => {
        console.log('websocket.open--->: ', event)
    }
    console.log('websocket state-->: ', websocket.readyState)



    websocket.onmessage = (evt) => { 
        console.log('<------admin-onmessage--->') 

        console.log('admin-onmessage--->:', evt.data) 
        setNotice(evt.data)
        // etv?.cata && websocket.close();
    };

    const daySort = () => {
        const newOrderArray = currentOrders && currentOrders?.map((order) => {
            return {...order, orderDate: order.orderTime.split(', ')[0], orderTime: order.orderTime.split(', ')[1]}
        })
    };
    // console.log('daySort--->: ', currentOrders)

    return(
        <div>
            <h1>ADMIN DASHBOARD</h1>
            
            <section>
                <h2>Order List</h2>
                { notic &&
                    <>
                        <h3>New order: {notic && "NEW ORDER RECEIVED"}</h3>
                        <button onClick={()=> setNotice('')}>Acknowledge New Order</button>
                    </>}
                <div className="Admin-OrderList-Wrapper">
                    {
                        currentOrders?.map((order, index) => 
                            <OrderBlock
                                currentOrders={currentOrders}
                                setCurrentOrders={setCurrentOrders}
                                order={order} 
                                index={index} 
                                key={index} />
                        )
                    }
                </div>
            </section>
            <section>
                <h2>Menu List</h2>
                <div>
                    <h3>Category 1</h3>
                    <ul className="admin-menu-item-list">
                        <li>menu item 1</li>
                    </ul>
                </div>
            </section>
        </div>
    )
};

export default Admin;