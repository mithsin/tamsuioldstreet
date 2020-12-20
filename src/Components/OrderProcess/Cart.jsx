import React, { useState, useEffect, useMemo } from 'react';
import './styles.scss';

const Cart = ({cartItemList}) => {
    const wsUri = "wss://pdcp0ixkea.execute-api.us-east-1.amazonaws.com/dev";
    const websocket = new WebSocket(wsUri);

    useEffect(()=>{
        console.log('ItemDetailsRenders')
        // websocket.onopen = (evt) => { onOpen(evt) };
        // websocket.onmessage = function(evt) { onMessage(evt) };
    },[])

    const CartItemList = ({
        imgSrc,
        itemNumber,
        title,
        price,
    }) => useMemo(()=>{
        return(
            <ul className="CartItemList-block">
                <li className="CartItemList-img-block"><img src={imgSrc} alt={`${title}-img`} /></li>
                <li className="CartItemList-desc-block">
                    <span>{itemNumber}</span>
                    <span>{title}</span>
                </li>
                <li className="CartItemList-price-block">${price}</li>
            </ul>
        )
    },[cartItemList])

    const onOpen = (event) => {
        console.log('connected')
    }

    const onMessage = (evt) => {
        console.log('onMessage: ', evt.data)
        websocket.close();
    }

    const handleSendMessage = (message) => {
        const sendMessage = {
            message : message, 
            action : "message"
        }
        console.log('sendMessage->: ', JSON.stringify(sendMessage))
        websocket.send(JSON.stringify(sendMessage));
        // websocket.close();
    }

    return (
        <div className="Cart-Wrapper">
            <div className="Cart-User-Info">
                <span>Name</span>
                <span>Address</span>
                <span>Phone</span>
            </div>
            <div>                
                {
                    cartItemList.map((item, idx)=>(
                        <CartItemList key={`${item.title}-${idx}`} {...item} />
                    ))
                }
            </div>
        </div>
    );
};

Cart.defaultProps = {
    cartItemList: [{
        imgSrc: "http://www.myichot.com/wp-content/uploads/photo-gallery/imported_from_media_libray/thumb/IMG_9180-e1479504951999.jpg",
        itemNumber: '1',
        title: 'item name',
        description: 'item description',
        price: 10.99
    },{
        imgSrc: "http://www.myichot.com/wp-content/uploads/photo-gallery/imported_from_media_libray/thumb/IMG_9180-e1479504951999.jpg",
        itemNumber: '2',
        title: 'item name',
        description: 'item description',
        price: 11.99
    },{
        imgSrc: "http://www.myichot.com/wp-content/uploads/photo-gallery/imported_from_media_libray/thumb/IMG_9180-e1479504951999.jpg",
        itemNumber: '3',
        title: 'item name',
        description: 'item description',
        price: 12.99
    }]
}

export default Cart;