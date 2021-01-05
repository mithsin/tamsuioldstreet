import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { MuiButton, MuiInputField } from 'Components/MUI';
import { userIsLoggedIn, userLogin, userLogout } from 'States/userSlice';

import './styles.scss';

const AdminLogin = () => {
    const userSignIn = useSelector(userIsLoggedIn);
    const history = useHistory();
    const dispatch = useDispatch();
    const [authInput, setAuthInput] = useState({});
    const [inputErrorMessage, setInputErrorMessage] = useState('');

    useEffect(()=>{
        (userSignIn === true) && (history.push("/admin"));
    },[userSignIn]);
    const LoginSubmitKeyPress = (e) => {
        if(e.keyCode === 13 || e.charCode === 13 ||  e.key === 'Enter'){
            e.preventDefault();
            (authInput.userName && authInput.password) && dispatch(userLogin({...authInput, history}));
            (!authInput.userName || !authInput.password) 
                ? setInputErrorMessage('FILL IN MISSING INPUT FIELD') 
                : setInputErrorMessage('');
        }
    }
    const LoginSubmit = () => {
        (authInput.userName && authInput.password) && dispatch(userLogin({...authInput, history}));
        (!authInput.userName || !authInput.password) 
            ? setInputErrorMessage('FILL IN MISSING INPUT FIELD') 
            : setInputErrorMessage('');
    };

    // store all input changes
    const formInputChange = (e) => {
        const inputValue = (
            ((e.target.name === 'number') && parseInt(e.target.value)) || 
            ((e.target.name === 'userName') && e.target.value.toLowerCase()) ||
            e.target.value
        );

        setAuthInput({ 
            ...authInput, 
            [e.target.name] : inputValue
        })
    };

    const inputSettings = [
        {
            type: "text",
            name: "userName", 
            label: "E-Mail",
            required: true
        },{
            type: "password",
            name: "password", 
            label: "password",
            required: true
        }
    ];
    
    return(
        <div className="outter-block-log">
            <div className="inner-block-log">
                {inputErrorMessage && <div>{inputErrorMessage}</div>}
                <h2>ADMIN LOGIN PAGE</h2>
                <div className="form-container">
                    {
                        inputSettings.map((inputSetting)=>
                            <MuiInputField 
                                key={inputSetting.name} 
                                { ...inputSetting } 
                                onChange={ formInputChange } 
                                onKeyPress={ LoginSubmitKeyPress }/>
                        )
                    }
                    <MuiButton 
                        label="LOGIN"
                        props={{
                            color: "black",
                            bgColor: "#3f51b5",
                            boxShadow: "2px 2px 23px rgba(0, 0, 0, 0.2) inset",
                            hColor: "white",
                            hbgColor: "#6495ED"
                        }}
                        onClick={LoginSubmit} />
                    <MuiButton
                        label="LOGOUT"
                        props={{
                            color: "black",
                            bgColor: "#cf142b",
                            boxShadow: "2px 2px 23px rgba(0, 0, 0, 0.2) inset",
                            hColor: "white",
                            hbgColor: "#DC143C"
                        }}
                        onClick={ ()=> dispatch(userLogout({history})) } />
                </div>
                {/* <span>Dont have a account? <Link to="/signup"> click here</Link></span> */}
            </div>
        </div>
    )
}

export default AdminLogin;
