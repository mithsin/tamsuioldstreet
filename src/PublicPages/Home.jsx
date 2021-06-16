import React, { useState } from 'react';
import { useTheme } from "react-jss";
import { useSelector } from 'react-redux';
import localization from 'localization';
import { imageList } from 'StaticDatas';
import { menuListState } from 'States/menuSlice';
import { homeStyles } from './styles';

// Components
import ReactResponsiveCarousel from 'Components/ImageBlock/ReactResponsiveCarousel';
import { useHistory } from 'react-router-dom';
import { menuListState } from 'States/menuSlice';
import { orderDetailState } from 'States/orderSlice';
import { useSelector } from 'react-redux';
import CardItem from 'Components/Card/CardItem';
import MenuBox from 'Components/MenuBox';
import {useTheme} from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {
    imageList,
} from 'StaticDatas';

const Home = () => {
    let history = useHistory();
    const theme = useTheme();
    const cartOrderList = useSelector(orderDetailState);
    const categoryList = useSelector(menuListState);
    const classes = homeStyles({...theme.iconsType.cart});
    const [selected, setSelected] = useState(0);
   

    return(
        <div className={classes.wrapper}>
            {(cartOrderList.length > 0) && 
                <span className={classes.HomeOrderOnlineCartIcon} onClick={()=> history.push('/cart')}>
                    <p>{cartOrderList.length}</p>
                    <FontAwesomeIcon icon={faShoppingCart} className="fa-2x"/>
                </span>
            }
            <div className={classes.ImgBlock}>
                <ReactResponsiveCarousel 
                    imgList={imageList}/>
            </div>
           <div className={classes.categoryWrapper}>
                <h1>{localization.home.menu}</h1>
                <div className={classes.categoryList}>
                    {categoryList.map((category, index)=> (
                        <CardItem 
                            cardStatus={category} 
                            key={`${index}-category`}
                            index={index}
                            setSelected={setSelected}/>
                    ))}
                </div>
                <div className={classes.MenuOutterWrap}>
                    <MenuBox {...categoryList[selected]} />
                </div>
            </div>
        </div>
    )
}

export default Home; 