import React from 'react';
import './styles.scss';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from '@material-ui/core/Modal';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const rand = () => {
  return Math.round(Math.random() * 20) - 10;
}

const getModalStyle = () => {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const ItemCard = ({
    imgSrc,
    itemNumber,
    title,
    description,
    price,
}) => {

    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const ItemDetails = () => {
        return (
            <div className="Item-Details-Wrapper">
                <div className="Item-Details-Close">
                    <FontAwesomeIcon onClick={handleClose} icon={faTimes} style={{margin: '1rem', cursor: 'pointer'}} className="fa-2x"/>
                </div>
                <div>
                    <div className="Item-Card-Img-block">
                        <span>{itemNumber}</span>
                        <img src={imgSrc} alt={title}/>
                    </div>
                </div>
                <div className="Item-Details-Text">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <span>${price}</span>
                </div>
            </div>
        );
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
                <ItemDetails />
            </Modal>
        </div>
    );
};

export default ItemCard;