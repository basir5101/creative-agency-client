import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { UserContext } from '../../App';
import { useContext } from 'react';
import Navbar from '../Home/Navbar/Navbar';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    if(!firebase.apps.length){
        firebase.initializeApp(firebaseConfig);
    }

    var provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () =>{
        firebase.auth().signInWithPopup(provider)
        .then(result =>{
            const newUser = {...loggedInUser};
            newUser.name = result.user.displayName;
            newUser.email = result.user.email;
            setLoggedInUser(newUser);
            history.replace(from);
        })
        .catch(err => console.log(err))
    }
    console.log(loggedInUser)
    return (
        <section>
            <Navbar/>
            <div className="container p-5 m-5 text-center border">
                <h4>Login With</h4>
                <button className = 'btn btn-success m-5' onClick = {handleGoogleSignIn}> <i className = 'pl-4 fa fa-google'></i> Continue With Google</button>
            </div>
        </section>
    );
};

export default Login;