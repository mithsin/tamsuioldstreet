import React, { useState } from 'react';
import { homeStyles } from './styles';
import ImgPreNextCarousel from 'Components/ImageBlock/ImgPreNextCarousel';
import { useHistory } from 'react-router-dom';
import CardItem from 'Components/Card/CardItem';
import MenuBox from 'Components/MenuBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {
    imageList,
    categoryList,
} from 'StaticDatas';

const Home = () => {
    let history = useHistory();
    const classes = homeStyles();
    const [selected, setSelected] = useState(0)
   

    return(
        <div className={classes.wrapper}>
            <span className={classes.HomeOrderOnlineSpan} onClick={()=> history.push('/cart')}>
                <FontAwesomeIcon icon={faShoppingCart} className="fa-2x"/>
            </span>
            <div className={classes.ImgBlock}>
                <ImgPreNextCarousel 
                    imgSrc={imageList} 
                    selectedIndex={0}
                    arrowEnabled={true}/>
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