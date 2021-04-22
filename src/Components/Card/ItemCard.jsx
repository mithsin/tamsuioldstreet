import React, { useState, useEffect } from 'react';
import { useTheme } from "react-jss";
import Modal from '@material-ui/core/Modal';
import ItemDetails from 'Components/Card/ItemDetails';
import { ItemCardStyle } from './styles';

const ItemCard = ({ item }) => {
    const theme = useTheme();
    const classes = ItemCardStyle({ theme });
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
        <div className={classes.ItemCardWrapper}>
            <div className={classes.ItemCardImgblock}>
                <span>{itemNumber}</span>
                <img src={imgSrc} alt={title}/>
            </div>
            <div className={classes.ItemCardText}>
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
                <ItemDetails 
                    itemDetails={item} 
                    handleOpen={handleOpen} 
                    handleClose={handleClose}/>
            </Modal>
        </div>
    );
};

export default ItemCard;