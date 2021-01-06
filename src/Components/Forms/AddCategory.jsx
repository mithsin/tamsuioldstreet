import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { menuListState, setAddNewMenuCategory } from 'States/menuSlice';
import { MuiButton, MuiInputField } from 'Components/MUI';
import ImageUpload from '../ImageUpload/ImageUpload';
import './styles.scss';

const AddCategory = () => {
    const dispatch = useDispatch();
    const  menuState= useSelector(menuListState);
    const [formInputs, setFormInputs] = useState({menuList: []});
    const [imageURL, setImageURL] = useState('');
    const [inputError, setInputError] = useState(false);
    const [toggleUploadImg, setToggleUploadImg] = useState(true);
    useEffect(()=>{
        if(imageURL){
            setFormInputs({
                ...formInputs,
                imgSrc: imageURL
            })
        }
    },[imageURL])

    const formInputChange = (e) => {
        if(e.target.name === 'points' && (/[^\d]/g).test(e.target.value)){
            setInputError(true)
        } else {
            setInputError(false)
            setFormInputs({ 
                ...formInputs,
                [e.target.name] :  e.target.value
            })
        }
    };

    const handleSubmitEdit = () => {
        dispatch(setAddNewMenuCategory([...menuState, formInputs]))
        setFormInputs({})
        setImageURL('')
    };


    const inputSettings = [{
            type: "text",
            name: "title",
            placeholder: "title"
        },{
            type: "text",
            name: "descriptions",
            placeholder: "descriptions"
    }];

    return(
        <div className="AddNewCategory-Wrapper">
            <div className="inner-block">
                <div className="form-container" >
                    <button onClick={()=> setToggleUploadImg(!toggleUploadImg)}>
                        {toggleUploadImg ? "upload image link" : "upload image"}
                    </button>
                    { toggleUploadImg 
                        ? <ImageUpload setImageURL={setImageURL}/>
                        : <MuiInputField
                            bgColor="#fff"
                            type="text"
                            name="imgSrc"
                            label="image link"
                            onChange={(e)=> setImageURL(e.target.value)}/>}
                        
                    {
                        inputSettings.map((inputSetting, index)=>
                            <MuiInputField
                                key={`${index}-inputsetting`}
                                {...inputSetting}
                                bgColor="#fff"
                                name={inputSetting.name}
                                label={inputSetting.placeholder}
                                onChange={ formInputChange }/>
                        )
                    }
                    <MuiButton 
                        bgColor="#fff"
                        labelColor="#000"
                        label="SUBMIT UPDATE"
                        onClick={ handleSubmitEdit }/>
                </div>
            </div>
        </div>
    )
};

export default AddCategory;