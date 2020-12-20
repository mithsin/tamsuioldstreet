import React, {useState, useEffect} from 'react';

const Admin = () => {
    const wsUri = "wss://pdcp0ixkea.execute-api.us-east-1.amazonaws.com/dev";
    const websocket = new WebSocket(wsUri);
    const [notic, setNotice] = useState()
    const onOpen = (event) => {
        console.log('connected')
    }

    const onMessage = (evt) => {
        console.log('onMessage: ', evt.data)
        setNotice(evt.data)
        // websocket.close();
    }

    useEffect(()=>{
        websocket.onopen = (evt) => { onOpen(evt) };
        websocket.onmessage = function(evt) { onMessage(evt) };
    },[]) 
    return(
        <div>
            <h1>ADMIN PAGE</h1>
            <p>
                {notic}
            </p>
        </div>
    )
};

export default Admin;