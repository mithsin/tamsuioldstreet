import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import {
    CognitoUserPool,
    CognitoUserAttribute,
    CognitoUser,
    AuthenticationDetails
} from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: process.env.REACT_APP_USER_POOL,
    ClientId: process.env.REACT_APP_CLIENT_ID
};
// const postURL = process.env.REACT_APP_API_GATEWAY_URL;
const userPool = new CognitoUserPool(poolData);
const ApiGateWayUserURL = process.env.REACT_APP_API_GATEWAY_USER;
const initState = {
    picture: '',
    preferredUsername: '',
    familyName: '',
    givenName: '',
    currency: 'USD',
    phoneNumber: '',
    isAgent: false,
    isLoggedIn: false,
}
export const userSlice = createSlice({
    name: 'userState',
    initialState: initState,
    reducers: {
        setUserState: (state, action) => {
            return {...state, ...action.payload};
        },
        setPicture: (state, action) => {
            state.profilePicUrl = action.payload;
        },
        setPreferredUsername: (state, action) => {
            state.preferred_username = action.payload;
        },
        setFamilyName: (state, action) => {
            state.family_name = action.payload;
        },
        setGivenName: (state, action) => {
            state.given_name = action.payload;
        },
        setCurrency: (state, action) => {
            state.currency = action.payload;
        },
        setPhoneNumber: (state, action) => {
            state.phoneNumber = action.payload;
        },
        setIsLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload;
        },
        setIsAgent: (state, action) => {
            state.isAgent = action.payload;
        },
    },
});

export const {
    setUserState,
    setPicture,
    setPreferredUsername,
    setFamilyName,
    setGivenName,
    setCurrency,
    setPhoneNumber,
    setIsLoggedIn,
    setIsAgent,
} = userSlice.actions;

// AWS Cognito User Sign Up
export const userSignUp = ({
    eMail, 
    phoneNumber, 
    password,
    picture = null,
    preferredUsername = null,
    familyName = null,
    givenName = null,
    isAgent = null,
    history
}) => dispatch => {

    const attributeList = [
        new CognitoUserAttribute({Name: 'email', Value: eMail}),
        new CognitoUserAttribute({Name: 'phone_number', Value: `+1${phoneNumber}`}),
        new CognitoUserAttribute({Name: 'custom:isAgent', Value: isAgent }),
        new CognitoUserAttribute({Name: 'picture', Value: picture }),
        new CognitoUserAttribute({Name: 'preferred_username', Value: preferredUsername }),
        new CognitoUserAttribute({Name: 'family_name', Value: familyName }),
        new CognitoUserAttribute({Name: 'given_name', Value: givenName })
    ];
    // console.log('attributeList--->: ', attributeList)

    userPool.signUp( eMail, password, attributeList, null, (err, result) => {
        if (err) {
            alert(('cognitoSlice' + err.message) || JSON.stringify('cognitoSlice' + err));
            return;
        } else {
            var cognitoUser = result.user;
            alert('user name is ' + cognitoUser.getUsername() + 'Please check your email for verification code');
            history.push('/verify-account');

             const params = {
                subId: result.userSub,
                eMail: eMail,
                isAgent: isAgent,
                picture: picture,
                preferredUsername: preferredUsername,
                familyName: familyName,
                givenName: givenName,
                phoneNumber: phoneNumber
            }
            
            axios.post(ApiGateWayUserURL, params)
                .then(res=> {
                    console.log('signUp-res------------>: ', res);
                })
                .catch(error => console.log(error))
        }
    });
};

// AWS Cognito User Verification by Email
export const verificationAccount = (eMail, code, history) => dispatch => {
    const userData = {
        Username: eMail,
        Pool: userPool,
    };
    const cognitoUser = new CognitoUser(userData);
    cognitoUser.confirmRegistration(code, true, (err, result) => {
        if (err) {
            alert(err.message || JSON.stringify(err));
            return;
        } else {
            alert('call result: ' + result);
            history.push('/');
            // trigger user data update for giving and recieving list card Id
        }
    })
};

export const resendVerificationCode = (eMail) => dispatch => {
    const userData = {
        Username: eMail,
        Pool: userPool,
    };
    const cognitoUser = new CognitoUser(userData);
    cognitoUser.resendConfirmationCode(function(err, result) {
        if (err) {
            alert(err.message || JSON.stringify(err));
            return;
        }
        alert(`your new code is send to: ${eMail}`)
    });
};

// AWS Cognito Send Change Password Link
export const getForgotPassworCode= (eMail) => dispatch => {
    const userData = {
        Username: eMail,
        Pool: userPool,
    };
    const cognitoUser = new CognitoUser(userData);

    cognitoUser.forgotPassword({
        onSuccess: (data) => {
            // successfully initiated reset password request
            console.log('CodeDeliveryData from forgotPassword: ' + data);
        },
        onFailure: (err) => {
            alert(err.message || JSON.stringify(err));
        },
    });
}

// AWS Cognito Set New Password
export const setUpNewPassword = (eMail, code, newPassword) => dispatch => {
    const userData = {
        Username: eMail,
        Pool: userPool,
    };
    const cognitoUser = new CognitoUser(userData);
    cognitoUser.confirmPassword(code, newPassword, {
        onSuccess() {
            console.log('Password confirmed!');
            alert('password successfully changed')
        },
        onFailure(err) {
            console.log('Password not confirmed!');
            alert('change password failed')
        },
    });
}

// AWS User Login
export const userLogin = ({eMail, password}) => dispatch => {
    const authenticationData = {
        Username: eMail,
        Password: password,
    };
    const authenticationDetails = new AuthenticationDetails(
        authenticationData
    );

    const userData = {
        Username: eMail,
        Pool: userPool,
    };
    const cognitoUser = new CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: (result) => {
            axios.get(`${ApiGateWayUserURL}?subId=${result.idToken.payload.sub}`, {
                headers: { 'Authorization' : result.idToken.jwtToken }
            })
                .then(res => {
                    dispatch(setUserState(res.data));
                    dispatch(setIsLoggedIn(true));
                })
                .catch(error => console.log('get user error: ', error))
         },
        onFailure: (err) => {
            alert(err.message || JSON.stringify(err));
        },
    });
};

// AWS cognito Logout
export const userLogout = ({history}) => dispatch => {
    if(userPool.getCurrentUser()){
        // To Do: clear init data
        userPool.getCurrentUser().signOut();
        dispatch(setUserState(initState))
        history.push('/');
    };
};

// AWS Cognito Get User Data
export const userLoginCheck = () => dispatch => {
    if (userPool.getCurrentUser() != null) {
        userPool.getCurrentUser().getSession((err, session) => {
            if(err){console.log('userPool.getCurrentUser() err---->', err)};

            axios.get(`${ApiGateWayUserURL}?subId=${session?.idToken?.payload?.sub}`, {
                headers: { 'Authorization' : session?.getIdToken()?.getJwtToken() }
            })
                .then(res => {
                    dispatch(setUserState(res.data));
                    dispatch(setIsLoggedIn(true));
                })
                .catch(error => console.log('get user error: ', error))
          });
    } 
};



export const userUserName = state => state?.userState?.preferredUsername || (`${state?.userState?.familyName} ${state?.userState?.givenName}`);
export const userProfileImage = state => state.userState.picture;
export const userCognitoState = state => state.userState;
export const userIsLoggedIn = state => state.userState.isLoggedIn;
export const userIsAgent = state => state.userState.isAgent;
export default userSlice.reducer;

// https://www.youtube.com/watch?v=-qo5GFdN-Ck

// Google
// Google id: 215313791418-apetni40hv97o9g8cuafa0h7nhrvoooi.apps.googleusercontent.com
// Google secret: xR4LA1FGWOrH_GwAIK8HSOP3
