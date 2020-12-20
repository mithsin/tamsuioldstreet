import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { orderDetailState, setCart, setCartUpdate } from 'States/orderSlice';
import TextField from '@material-ui/core/TextField';


import './styles.scss';

const Cart = ({cartItemList}) => {
    const cartOrderList = useSelector(orderDetailState);
    const wsUri = "wss://pdcp0ixkea.execute-api.us-east-1.amazonaws.com/dev";
    const websocket = new WebSocket(wsUri);
    
    const onOpen = (event) => {
        console.log('connected')
    }

    const onMessage = (evt) => {
        console.log('onMessage: ', evt.data)
        websocket.close();
    }

    useEffect(()=>{
        websocket.onopen = (evt) => { onOpen(evt) };
        // websocket.onmessage = function(evt) { onMessage(evt) };
    },[]) 

    const handleSendMessage = (message) => {
        const sendMessage = {
            message : "You have new order", 
            action : "message"
        }
        console.log('sendMessage->: ', JSON.stringify(sendMessage))
        websocket.send(JSON.stringify(sendMessage));
        // websocket.close();
    }

    const CartItemList = ({ cartItemDetail }) => {
        const {
            imgSrc,
            itemNumber,
            itemDetails,
            title,
            price,
            orderAmount,
        } = cartItemDetail;
        const dispatch = useDispatch();
        const [currentOrderAmount, setCurrentOrderAmount] = useState(orderAmount)
        const updatePrice = (parseInt(orderAmount) * price).toFixed(2);

        const handleCheckoutUpdate = (event) => {
            setCurrentOrderAmount(event.target.value)
            dispatch(setCartUpdate({...cartItemDetail, orderAmount: event.target.value}))
        }

        return(
            <ul className="CartItemList-block">
                <li className="CartItemList-img-block"><img src={imgSrc} alt={`${title}-img`} /></li>
                <li className="CartItemList-desc-block">
                    <span>{itemNumber}</span>
                    <span>{title}</span>
                </li>
                <li className="CartItemList-price-block">
                    <TextField
                        id="filled-number"
                        label="Number"
                        type="number"
                        min="1" 
                        max="50"
                        value={currentOrderAmount}
                        onChange={handleCheckoutUpdate}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="filled"
                        />
                    ${updatePrice}
                </li>
            </ul>
        )
    };

    return (
        <div className="Cart-Wrapper">
            <div className="Cart-User-Info">
                <span>Name</span>
                <span>Address</span>
                <span>Phone</span>
            </div>
            <div>                
                {
                    cartOrderList.map((item, idx)=>(
                        <CartItemList 
                            key={`${item.title}-${idx}`}
                            cartItemDetail={item} />
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