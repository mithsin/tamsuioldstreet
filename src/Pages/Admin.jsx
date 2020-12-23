import React, {useState, useEffect, useCallback} from 'react';

const Admin = () => {
    const wsUri = "wss://pdcp0ixkea.execute-api.us-east-1.amazonaws.com/dev?connectionId=TestId";
    const websocket = new WebSocket(wsUri);
    const [notic, setNotice] = useState()
    
    const websocketCB = useCallback(()=>{
        websocket.onopen = (evt) => { console.log('admin-onopen---->: ', evt)};
    },[])

    useEffect(()=>{
        websocketCB();
    },[])

        // websocket.onopen = (evt) => { console.log('admin-onopen---->: ', evt)};
        websocket.onmessage = (evt) => { 
            console.log('admin-onmessage--->:', evt.data) 
            setNotice(evt.data)
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