import React, { useState } from 'react';
import { homeStyles } from './styles';
import ReactResponsiveCarousel from 'Components/ImageBlock/ReactResponsiveCarousel';
import { useHistory } from 'react-router-dom';
import { menuListState } from 'States/menuSlice';
import { useSelector } from 'react-redux';
import CardItem from 'Components/Card/CardItem';
import MenuBox from 'Components/MenuBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {
    imageList,
} from 'StaticDatas';

const Home = () => {
    let history = useHistory();
    const categoryList = useSelector(menuListState)
    const classes = homeStyles();
    const [selected, setSelected] = useState(0)
   

    return(
        <div className={classes.wrapper}>
            <span className={classes.HomeOrderOnlineSpan} onClick={()=> history.push('/cart')}>
                <FontAwesomeIcon icon={faShoppingCart} className="fa-2x"/>
            </span>
            <div className={classes.ImgBlock}>
                <ReactResponsiveCarousel 
                    imgList={imageList}/>
            </div>
            <div className={classes.CategoryWrapper}>
                <h1>MENU</h1>
                <div className={classes.CategoryList}>
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