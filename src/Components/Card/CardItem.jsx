import React from 'react';
import { useHistory } from 'react-router-dom';
import { CardItemStyle } from './styles';

const CardItem = ({cardStatus}) => {
    let history = useHistory();
    const classes = CardItemStyle();
        
    return(
        <ul className={classes.CardItem}>
            <li className={classes.CardImgWrapper}>
                <img
                    className={classes.img} 
                    src={cardStatus.imgSrc}
                    alt='card image' />
            </li>

            <li className={classes.CardTitleLi}>
                {cardStatus.title}
                <span>
                    {cardStatus.descriptions}
                </span>
            </li>
            
        </ul>
    );
};

export default CardItem;