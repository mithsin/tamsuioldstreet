import React, { useState, useEffect } from 'react';
import { useStyles } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSwipeable, Swipeable } from 'react-swipeable';
import { 
    faChevronRight,
    faChevronLeft
} from '@fortawesome/free-solid-svg-icons';

const ImgPreNextCarousel = ({imgSrc=[], selectedIndex, arrowEnabled=false}) => {
    const classes = useStyles();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [bgImgSrc, setBgImgSrc] = useState({
        backgroundImage: `url(${imgSrc[currentIndex]})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    })

    useEffect(()=>{
        setCurrentIndex(selectedIndex)
    },[selectedIndex])
    useEffect(()=>{
        setBgImgSrc({
            ...bgImgSrc,
            backgroundImage: `url(${imgSrc[currentIndex]})`
        })
    },[currentIndex, imgSrc])
    

    const onClickNext = () => {
        if(currentIndex === (imgSrc.length-1)){
            setCurrentIndex(0)
        } else {
            setCurrentIndex(currentIndex + 1)
        }
    }

    const onClickPrev = () => {
        if(currentIndex === 0){
            setCurrentIndex(imgSrc.length-1)
        } else {
            setCurrentIndex(currentIndex - 1)
        }
    }

    return(
        <div className={classes.carouselWrapper}>
            {arrowEnabled && <div className={classes.prevBtn} onClick={onClickNext}>
                <FontAwesomeIcon icon={faChevronLeft} className="fa-2x"/>
            </div>}
            <div className={classes.ImgBKSnow}/>
            <Swipeable 
                onSwipedLeft={ onClickNext } 
                onSwipedRight={ onClickPrev } 
                className={classes.imageBlock} 
                style={bgImgSrc}/>
            {arrowEnabled && <div className={classes.nextBtn} onClick={onClickPrev}>
                <FontAwesomeIcon icon={faChevronRight} className="fa-2x"/>
            </div>}
            <div className={classes.ImgBKSnowBottom}/>
        </div>
    );
};

export default ImgPreNextCarousel;