import React, { useState, useEffect } from 'react';
import { useTheme } from "react-jss";
import { useDispatch, useSelector } from 'react-redux';
import { orderDetailState, setCart, setCartUpdate } from 'States/orderSlice';
// import TextField from '@material-ui/core/TextField';
// import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MuiButton, MuiNumberInput } from 'Components/MUI';
import { ItemDetailsStyle } from './styles';

const ItemDetails = ({itemDetails, handleOpen, handleClose}) => {
    const theme = useTheme();
    const classes = ItemDetailsStyle({ theme });

    const dispatch = useDispatch();
    const cartOrderList = useSelector(orderDetailState);
    const {
        imgSrc,
        itemNumber,
        title,
        description,
        price,
        orderAmount
    } = itemDetails;
    const [currentOrderAmount, setCurrentOrderAmount] = useState("1")

    useEffect(()=>{
        const findDetailHistory = cartOrderList.find(itm => itm.itemNumber === itemDetails.itemNumber);
        findDetailHistory && setCurrentOrderAmount(findDetailHistory.orderAmount);
    },[]);

    const handleAddItemToCart = async() => {
        const findDetailHistory = cartOrderList.find(itm => itm.itemNumber === itemNumber);
        const updateCardOrderList = 
            findDetailHistory
                ? dispatch(setCartUpdate({...itemDetails, orderAmount: currentOrderAmount}))
                : dispatch(setCart(cartOrderList.concat({...itemDetails, orderAmount: currentOrderAmount})));
        handleClose();
    };

    return (
        <div className={classes["Item-Details-Wrapper"]}>
            <div className={classes["Item-Details-Close"]}>
                <FontAwesomeIcon onClick={handleClose} icon={faTimes} style={{margin: '1rem', cursor: 'pointer'}} className="fa-2x"/>
            </div>
            <div>
                <div className={classes["Item-Card-Img-block"]}>
                    <span>{itemNumber}</span>
                    <img src={imgSrc} alt={title}/>
                </div>
            </div>
            <div className={classes["Item-Details-Text"]}>
                <h2>{title}</h2>
                <p>{description}</p>
                <span>${price}</span>
                <MuiNumberInput 
                    min="1"
                    max="50"
                    currentNumber={currentOrderAmount}
                    setCurrentNumber={setCurrentOrderAmount}
                />
                <MuiButton 
                    props={{
                        color: '#717171',
                        bgColor: '#a2e6fd',
                        hColor: "white",
                        hbgColor: "#287d9a"
                    }}
                    label='ADD TO CART'
                    onClick={handleAddItemToCart}
                    onKeyPress={handleAddItemToCart}/>
            </div>
        </div>
    );
};

export default ItemDetails;