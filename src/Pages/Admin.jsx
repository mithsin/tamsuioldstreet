import React, { useState, useEffect, useCallback } from 'react';

const Admin = () => {
    const wsUri = process.env.REACT_APP_API_WEBSOCKETS;
    const websocket = new WebSocket(wsUri);
    const [notic, setNotice] = useState()
    
    // const websocketCB = useCallback(()=>{
    //     websocket.onopen = (evnt) => console.log(evnt.data);
    // },[])

    // useEffect(()=>{
    //     websocketCB();
    // },[])

    websocket.onmessage = (evt) => { 
        console.log('admin-onmessage--->:', evt.data) 
        setNotice(evt.data)
        // websocket.close();
    };

    return(
        <div>
            <h1>ADMIN DASHBOARD</h1>
            <section>
                <h2>Order List</h2>
                <p>
                    New order: {notic && "NEW ORDER RECEIVED"}
                </p>
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