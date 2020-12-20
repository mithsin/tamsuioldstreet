import React, { useState, useEffect } from 'react';
import './styles.scss';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import ItemDetails from 'Components/Card/ItemDetails';

const rand = () => {
  return Math.round(Math.random() * 20) - 10;
}

const ItemCard = ({ item }) => {
    const { 
        imgSrc,
        itemNumber,
        title,
        price,
    } = item;
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return(
        <div className="Item-Card-Wrapper">
            <div className="Item-Card-Img-block">
                <span>{itemNumber}</span>
                <img src={imgSrc} alt={title}/>
            </div>
            <div className="Item-Card-Text">
                <h2>{title}</h2>
                {/* <p>{description}</p> */}
                <span>${price}</span>
                <button type="button" onClick={handleOpen}>Detail</button>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <ItemDetails itemDetails={item} handleOpen={handleOpen} handleClose={handleClose}/>
            </Modal>
        </div>
    );
};

export default ItemCard;