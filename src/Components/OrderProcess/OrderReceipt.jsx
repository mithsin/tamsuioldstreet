import React, { useState, useEffect } from 'react';
import { MuiButton } from 'Components/MUI';
import { useHistory } from 'react-router-dom';

const OrderReceipt = () => {
    let history = useHistory();
    const wsUri = process.env.REACT_APP_API_WEBSOCKETS;
    const websocket = new WebSocket(wsUri);
    const [disableClose, setDisableClose] = useState(true)
    
    // triiger websocket to send order on load, and disable button until websocket successfully update the order
    websocket.onopen = (event) => {        
        // console.log('event on open -->: ', event)  
        const sendMessage = {
            message : "New order available", 
            action : "message"
        }
        
        websocket.send(JSON.stringify(sendMessage));
    }

    const onMessage = (evt) => {
        // console.log('evnt-data----->: ', evt.data)
        evt?.data && setDisableClose(false)
        evt?.cata && websocket.close();

    }
    websocket.onmessage = function(evt) { onMessage(evt) };

    return(
        <>
            <h2>Order Receipt</h2>
            <div>
                YOUR ORDER DETAIL
            </div>
            <MuiButton 
                props={{
                    color: '#717171',
                    bgColor: '#a2e6fd',
                    hColor: "white",
                    hbgColor: "#287d9a"
                }}
                disable={disableClose ? "true" : "false"}
                label='CLOSE'
                onClick={()=> history.push('/')}
                onKeyPress={()=> history.push('/')}
            />
        </>
    );
};

export default OrderReceipt;