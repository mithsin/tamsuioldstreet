import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUpdateMenu } from 'States/menuSlice';
import TextField from '@material-ui/core/TextField';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MuiButton, MuiInputField } from 'Components/MUI';
import ImageUpload from '../ImageUpload/ImageUpload';


const ItemEdit = ({itemDetails, handleOpen, handleClose}) => {
    const {
        imgSrc,
        itemNumber,
        title,
        description,
        price,
    } = itemDetails;
    const dispatch = useDispatch();
    const [formInputs, setFormInputs] = useState({...itemDetails});
    const [imageURL, setImageURL] = useState('');
    const [inputError, setInputError] = useState(false)
    const [toggleUploadImg, setToggleUploadImg] = useState(true)

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
                [e.target.name] : e.target.name === 'points' ? parseInt(e.target.value) : e.target.value
            })
        }
    };

    const handleSubmitEdit = () => {
        dispatch(setUpdateMenu(formInputs))
    };

    // input box setting
    const inputSettings = [
        {
            type: "text",
            name: "title", 
            defaultValue: title,
            placeholder: "title"
        },{
            type: "text",
            name: "price", 
            defaultValue: price,
            placeholder: "price",
            className: inputError ? 'inputError' : ''
        },{
            type: "text",
            name: "description", 
            rows: 4,
            defaultValue: description,
            placeholder: "item description",
            className: inputError ? 'inputError' : ''
        }
    ];

    return (
        <div className="ItemEdit-Wrapper">
            <div className="Item-Details-Edit-Wrapper">
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
                                defaultValue={imgSrc}
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
            <div className="Item-Details-Edit-Wrapper">
                <div className="Item-Details-Close">
                    <FontAwesomeIcon onClick={handleClose} icon={faTimes} style={{margin: '1rem', cursor: 'pointer'}} className="fa-2x"/>
                </div>
                <div>
                    <div className="Item-Card-Img-block">
                        <span>{itemNumber}</span>
                        <img src={imgSrc} alt={title}/>
                    </div>
                </div>
                <div className="Item-Details-Text">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <span>${price}</span>
                </div>
            </div>
        </div>
    );
};

export default ItemEdit;