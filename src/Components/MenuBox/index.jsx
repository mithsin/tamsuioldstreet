import React from 'react';
import { useTheme } from "react-jss";
import ItemCard from 'Components/Card/ItemCard';
import { MenuBoxStyle } from './styles';

const MenuBox = ({title, descriptions, menuList}) => {
    const theme = useTheme();
    const classes = MenuBoxStyle({ theme });

    return(
        <div className={classes.MenuBoxWrappe}>
            <div className={classes.MenuBoxTitle}>
                <h1>{title}</h1>
                <p>{descriptions}</p>
            </div>
            <div className={classes.MenuBoxItemWrapper}>
                {menuList && menuList.map((item, index)=> !item?.itemDisable && <ItemCard key={`item-${index}`} item={item}/>)}
            </div>
        </div>
    );
};

// MenuBox.defaultProps = {
//     titel: "Title",
//     description: "Description",
//     menuList: [{
//         imgSrc: 'abc.jpg',
//         itemNumber: '1',
//         title: 'item name',
//         description: 'item description',
//         price: 10.99
//     }]
// }

export default MenuBox;