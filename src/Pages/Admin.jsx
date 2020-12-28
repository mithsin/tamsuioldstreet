import React, { useState, useEffect, useCallback } from 'react';
import { MuiButton } from 'Components/MUI';
import moment from 'moment';
import axios from 'axios';

const Admin = () => {
    const [currentOrders, setCurrentOrders] = useState([]);
    const wsUri = process.env.REACT_APP_API_WEBSOCKETS;
    const websocket = new WebSocket(wsUri);
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

    websocket.onmessage = (evt) => { 
        console.log('admin-onmessage--->:', evt.data) 
        setNotice(evt.data)
        // etv?.cata && websocket.close();
    };

    const OrderBlock = ({
        orderNumber,
        orderTime,
        ordId,
        list,
    }) => {
        const handleOrderFullfill = (orderId) => {
            const param = {
                ordId: orderId,
                fullFillStatus: true,
                fullFillTime: moment().format('MMMM Do YYYY, h:mm:ss a'),
            }
            axios.put(process.env.REACT_APP_API_RESTAURANT_ORDER, param)
                .then(res=> {
                    console.log(res.data)
                    if(res.data.update_status === "fullfilled success"){
                        setCurrentOrders(currentOrders.filter(order => order.ordId !== ordId));
                    }
                })
                .catch(err=> console.log(err))
        }
        return (
            <div>
                <span>{list}</span>
                <span>{orderNumber}</span>
                <span>{orderTime}</span>
                <span>{ordId}</span>
                <MuiButton 
                    props={{
                        color: '#717171',
                        bgColor: '#a2e6fd',
                        hColor: "white",
                        hbgColor: "#287d9a"
                    }}
                    label='Fullfilled'
                    onClick={()=> handleOrderFullfill(ordId)}
                    onKeyPress={()=> handleOrderFullfill(ordId)}
                />
            </div>
        );
    };
    // console.log('currentOrders--->: ', currentOrders.map(order => console.log(moment(order.orderTime).format('h:mm:ss a'))));

    return(
        <div>
            <h1>ADMIN DASHBOARD</h1>
            <button onClick={()=> setNotice('')}>close notice {notic}</button>
            <section>
                <h2>Order List</h2>
                <p>
                    New order: {notic && "NEW ORDER RECEIVED"}
                </p>
                {
                    currentOrders?.map((order, index) => <OrderBlock {...order} list={index} key={index} />)
                }
                <p>----------------------------------------------------------------------</p>
                <ul>
                    <li>
                        <h3>Order 1</h3>
                        <div>onOpen: buyer details</div>
                        <div>order time</div>
                        <div>order number</div>
                        <ul>
                            <li>
                                item number
                                item title
                                order amount
                            </li>
                        </ul>
                    </li>
                </ul>
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