import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
const wsUri = process.env.REACT_APP_API_WEBSOCKETS;
const websocket = new WebSocket(wsUri);

const OrderReceipt = () => {
    let history = useHistory();
    const [disableClose, setDisableClose] = useState(true)
    
    // triiger websocket to send order on load, and disable button until websocket successfully update the order
    useEffect(()=>{
        const sendMessage = {
            message : "New order available", 
            action : "message"
        }
        
        websocket.send(JSON.stringify(sendMessage));
    },[])
    const onMessage = (evt) => {
        evt?.data && setDisableClose(false)
    }
    websocket.onmessage = function(evt) { onMessage(evt) };

    return(
        <>
            <h2>Order Receipt</h2>
            <div>
                YOUR ORDER DETAIL
            </div>
            <button 
                disable={disableClose}
                onClick={()=> history.push('/payment')}>
                    Close
            </button>
        </>
    );
};

export default OrderReceipt;