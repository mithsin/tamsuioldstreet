import React from 'react';
import ItemCard from 'Components/Card/ItemCard';
import './styles.scss';

const MenuBox = ({title, descriptions, menuList}) => {
    return(
        <div className="Menu-Box-Wrapper">
            <div className="Menu-Box-title">
                <h1>{title}</h1>
                <p>{descriptions}</p>
            </div>
            <div className="Menu-Box-Item-Wrapper">
                {menuList.map((item, index)=> !item?.itemDisable && <ItemCard key={`item-${index}`} item={item}/>)}
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