import React from 'react';
import './styles.scss';

const ItemCard = ({
    imgSrc,
    itemNumber,
    title,
    description,
    price,
}) => {
    return(
        <div className="Item-Card-Wrapper">
            <div className="Item-Card-Img-block">
                <span>{itemNumber}</span>
                <img src={imgSrc} alt={title}/>
            </div>
            <div className="Item-Card-Text">
                <h2>{title}</h2>
                <p>{description}</p>
                <span>${price}</span>
                <button>Detail</button>
            </div>
        </div>
    );
};

const MenuBox = ({title, descriptions, menuList}) => {
    return(
        <div className="Menu-Box-Wrapper">
            <div className="Menu-Box-title">
                <h1>{title}</h1>
                <p>{descriptions}</p>
            </div>
            <div className="Menu-Box-Item-Wrapper">
                {menuList.map((item, index)=> <ItemCard key={`item-${index}`} {...item}/>)}
            </div>
        </div>
    );
};

MenuBox.defaultProps = {
    titel: "Title",
    description: "Description",
    menuList: [{
        imgSrc: 'abc.jpg',
        itemNumber: '1',
        title: 'item name',
        description: 'item description',
        price: 10.99
    }]
}

export default MenuBox;