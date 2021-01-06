import React, { useState, useEffect } from 'react';
import { menuListState } from 'States/menuSlice';
import { useSelector } from 'react-redux';
import AddCategory from 'Components/Forms/AddCategory';
import MenuBlock from 'Components/AdminComponents/MenuBlock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faMinusSquare } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

const AdminMenu = () => {
    const categoryList = useSelector(menuListState);
    const [addCategoryClose, setAddCategoryClose] = useState(false);
    const handleAddCategoryToggle = () => setAddCategoryClose(!addCategoryClose);
    return(
        <div>
            <h1>Menu</h1>
            <div className="Add-Category-Block">
                <FontAwesomeIcon 
                    onClick={handleAddCategoryToggle} 
                    icon={addCategoryClose ? faMinusSquare : faPlusSquare} 
                    style={{margin: '1rem', cursor: 'pointer'}} className="fa-2x"/>
                {addCategoryClose && <AddCategory />}
            </div>
            {
                categoryList.map((category, idx)=>
                    <MenuBlock category={category} key={idx}/>
                )
            }
            
        </div>
    )
};

export default AdminMenu;