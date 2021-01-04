import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const ReactResponsiveCarousel = ({imgList}) => {


    return(
        <Carousel>
            {imgList.map((image, index) => 
                <div key={`ReactResponsiveCarousel-${index}`}>
                    <img src={image} />
                    <p>{index}</p>
                </div>
            )}
            </Carousel>
    );
};

export default ReactResponsiveCarousel;