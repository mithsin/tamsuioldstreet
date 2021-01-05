import React from 'react';
import { photoGallery } from 'StaticDatas';

const PhotoGallery = () => {
    return(
        <ul className="PhotoGallery-wrapper">
            {photoGallery.map((image, index)=> 
                <li key={`image-${index}-gallery`}>
                    <img src={image} alt={`image-${index}-gallery`}/>
                </li>
            )}
        </ul>
    );
};

export default PhotoGallery;