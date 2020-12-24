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
            <h1>ADMIN PAGE</h1>
            {/* <button onClick={handleOnMessage}>onMessage</button> */}
            <p>
                {notic}
            </p>
        </div>
    )
};

export default Admin;