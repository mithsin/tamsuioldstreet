import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const ReactResponsiveCarousel = ({imgList}) => {

    const createCarouselItemImage = (image, index, options = {}) => (
        <div key={`ReactResponsiveCarousel-${index}`}>
            <img src={image} />
        </div>
    );
    
    const baseChildren = <div>{imgList.map(createCarouselItemImage)}</div>;

    const getConfigurableProps  = {
        showArrows:  true,
        showStatus:  true,
        showIndicators:  false,
        infiniteLoop:  true,
        showThumbs:  false,
        useKeyboardArrows:  true,
        autoPlay:  true,
        stopOnHover:  true,
        swipeable:  true,
        dynamicHeight:  true,
        emulateTouch:  true,
        thumbWidth:  100, 
        selectedItem:  0, 
        interval:  3000, 
        transitionTime:  150, 
        swipeScrollTolerance:  5,
        centerSlidePercentage: 80,
    };

    return (
        <Carousel 
            infiniteLoop
            centerMode
            {...getConfigurableProps}
        >
            {baseChildren.props.children}
        </Carousel>
    );
};

export default ReactResponsiveCarousel;