import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { orderDetailState, setCart, setCartUpdate } from 'States/orderSlice';
import TextField from '@material-ui/core/TextField';
import { FormControl } from '@material-ui/core';
import { MuiButton } from 'Components/MUI';


import './styles.scss';

const Cart = ({cartItemList}) => {
    let history = useHistory();
    const cartOrderList = useSelector(orderDetailState);
    const wsUri = "wss://pdcp0ixkea.execute-api.us-east-1.amazonaws.com/dev";
    const websocket = new WebSocket(wsUri);

    const onMessage = (evt) => {
        console.log('onMessage: ', evt.data)
        evt?.data && history.push('/payment')

    }

    websocket.onmessage = function(evt) { onMessage(evt) };

    const handleCheckOut = async(message) => {
        const sendMessage = {
            message : "New order available", 
            action : "message"
        }
        
        await websocket.send(JSON.stringify(sendMessage));
        // console.log('websocket send,', await websocket.send(JSON.stringify(sendMessage)))
        // websocket.close();
        // history.push('/payment')
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
            <h1>ORDER DETAILS</h1>
            {/* <div className="Cart-User-Info">
                <span>Name</span>
                <span>Address</span>
                <span>Phone</span>
            </div> */}
            <div className="Cart-User-Info">
            <FormControl>
                <TextField required id="standard-basic" label="Name" />
                <TextField required id="standard-basic" label="Address" />
                <TextField required id="standard-basic" label="Phone Number" />
                <TextField required id="standard-basic" label="E-Mail" />
            </FormControl>
            </div>
            <div className="Cart-Added-Items">                
                { (cartOrderList.length < 1) 
                    ? <h2>YOU HAVE NO ADDED ITEM</h2>
                    : cartOrderList.map((item, idx)=>(
                        <CartItemList 
                            key={`${item.title}-${idx}`}
                            cartItemDetail={item} />
                    ))
                }
            </div>
            {/* <button onClick={handleCheckOut}>CHECK OUT</button> */}
            <MuiButton 
                props={{
                    color: '#717171',
                    bgColor: '#a2e6fd',
                    hColor: "white",
                    hbgColor: "#287d9a"
                }}
                disabled={(cartOrderList.length < 1) ? true : false}
                label='CHECK OUT'
                onClick={handleCheckOut}
                onKeyPress={handleCheckOut}
            />
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