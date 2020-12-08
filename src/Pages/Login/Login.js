import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logo.png';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from '../../firebase.config';

const Login = () => {
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    const [userInfo, setUserInfo] = useContext(UserContext);

    var provider = new firebase.auth.GoogleAuthProvider();
    if(!firebase.apps.length){
        firebase.initializeApp(firebaseConfig);
    }
    const handleLogin = e =>{
    
        firebase.auth().signInWithPopup(provider)
        .then(result =>{
            const {displayName, email} = result.user;
            const newUser = {...userInfo};
            userInfo.name = displayName;
            userInfo.email = email;
            setUserInfo(newUser);
            history.replace(from);
        })
        .catch(err => console.log(err))
    }
    return (
        <section className = 'login'>
            <div className = 'text-center '>
                <Link to = '/'><img className = '' src={logo} alt=""/></Link>
                <div className = 'border m-auto login-form p-5'>
                    <h3  >Login </h3>
                    <input onClick = {handleLogin} type="button"  className = 'btn border form-control w-75' value="continue with google"/>
                </div>
            </div>
        </section>
    );
};

export default Login;