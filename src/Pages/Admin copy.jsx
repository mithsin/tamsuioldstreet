import React, {useState, useEffect, useCallback} from 'react';

const Admin = () => {
    const wsUri = "wss://pdcp0ixkea.execute-api.us-east-1.amazonaws.com/dev";
    const websocket = new WebSocket(wsUri);
    const [notic, setNotice] = useState()
    // useEffect(()=>{
    //     // TODO refresh when websocket update messages
    // },[])
    // const onOpen = (event) => {
    //     console.log('connected')
    //     console.log('onOpen-event---->: ', event)
    // }

    // const onMessage = (evt) => {
    //     console.log('onMessage: ', evt.data)
    //     console.log('-------------------------trigger---------------------')
    //     // setNotice(evt.data)
    //     // websocket.close();
    // }
    // const wsCB = useCallback(()=>{
    //     websocket.onopen = (evt) => { console.log('admin-onopen---->: ', evt)};
    // },[websocket])
    // useEffect(()=>{
    //     wsCB()
    // },[]) 

    // const handleOnMessage = () => {
    //     websocket.onmessage = (evt) => { console.log('admin-onmessage--->:', evt) };
    // };

        websocket.onopen = (evt) => { console.log('admin-onopen---->: ', evt)};
        websocket.onmessage = (evt) => { console.log('admin-onmessage--->:', evt) };

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