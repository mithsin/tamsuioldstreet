import React from 'react';
import { useHistory } from 'react-router-dom';
import { useTheme } from "react-jss";
import localization from 'localization';
import { CardItemStyle } from './styles';

const CardItem = (props) => {
    const {cardStatus, index, setSelected} = props;
    let history = useHistory();
    const theme = useTheme();
    const classes = CardItemStyle({ theme });
        
    return(
        <ul className={classes.CardItem} onClick={()=> setSelected(index)}>
            <li className={classes.CardTitleLi}>
                {cardStatus.title}
            </li>
            <li 
                className={classes.CardImgWrapper}
                style={{
                    backgroundImage: `url(${cardStatus.imgSrc})`,
                    height: "150px",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    borderRadius: "2rem"
                }}
                >
                {/* <img
                    className={classes.img} 
                    src={cardStatus.imgSrc}
                    alt='card image' /> */}
            </li>
            <li className={classes.CardTitleShowMenu}>
                {localization.cardItem.showMenu}
            </li>
        </ul>
    );
};

export default CardItem;