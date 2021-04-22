import React, { useState } from 'react';
import { useTheme } from "react-jss";
import { useSelector } from 'react-redux';
import localization from 'localization';
import { imageList } from 'StaticDatas';
import { menuListState } from 'States/menuSlice';
import { homeStyles } from './styles';

// Components
import ReactResponsiveCarousel from 'Components/ImageBlock/ReactResponsiveCarousel';
import CardItem from 'Components/Card/CardItem';
import MenuBox from 'Components/MenuBox';

const Home = () => {
    const theme = useTheme();
    const classes = homeStyles({ theme });
    const categoryList = useSelector(menuListState);

    // useState
    const [selected, setSelected] = useState(0);

    return(
        <div className={classes.wrapper}>
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