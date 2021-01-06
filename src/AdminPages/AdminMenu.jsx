import React from 'react';
import { menuListState } from 'States/menuSlice';
import { useSelector } from 'react-redux';
import ItemCardList from 'Components/Card/ItemCardList';
import './styles.scss';


const AdminMenu = () => {
    const categoryList = useSelector(menuListState)
    return(
        <div>
            <h1>Menu</h1>
            {
                categoryList.map((category, idx)=>
                    <React.Fragment key={`category-${idx}`}>
                        <h2>{category.title}</h2>
                        <div className="AdminOrders-OrderList-Wrapper">
                            {category.menuList.map((item, index)=> <ItemCardList key={`item-${index}`} item={item} buttonLabel="Edit" />)}
                        </div>
                    </React.Fragment>
                )
            }
            
        </div>
    )
};

export default AdminMenu;