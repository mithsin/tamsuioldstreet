import React, { useEffect } from 'react';
import { MuiButton } from 'Components/MUI';
import { useHistory } from 'react-router-dom';
import './styles.scss';

const OrderReceipt = () => {
    let history = useHistory();
    const wsUri = process.env.REACT_APP_API_WEBSOCKETS;
    const websocket = new WebSocket(wsUri);
    
    // triiger websocket to send order on load, and disable button until websocket successfully update the order
    useEffect(()=>{
        websocket.onopen = (event) => {        
            // console.log('event on open -->: ', event)  
            const sendMessage = {
                message : "New order available", 
                action : "message"
            }
            // console.log('websocket state-->: ', websocket.readyState)
            websocket.send(JSON.stringify(sendMessage));
        }
    },[])
    // const onMessage = (evt) => {
    //     console.log('evnt-data----->: ', evt.data)
    //     evt?.data && setDisableClose(false)
    //     evt?.data && websocket.close();
    // }
    // websocket.onmessage = function(evt) { onMessage(evt) };
    const handleOnClick = () => {
        websocket.close();
        history.push('/')
    };

    return(
        <div className="OrderReceipt-wrapper">
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
                label='CLOSE'
                onClick={handleOnClick}
                onKeyPress={handleOnClick}
            />
        </div>
    );
};

export default OrderReceipt;