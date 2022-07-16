import React, { useState } from 'react';
import './Login.css';
import {Link, useHistory } from "react-router-dom";
import { auth } from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e=>{
        e.preventDefault();
        
        auth

        .signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))

    }
    const register = e => {
        e.preventDefault();


      auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            //It successfully created a  new user with email and password
            if (auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message))

      

    }

  return (
        <div className='login'>
                <Link to= '/'>
                    <img 
                    className='login__logo'
                    src={require("./onlinelogomaker-033022-1255-4321-2000-transparent.png")}
                    />
                </Link>

                <div className='login__container'>
                    <h1>Sign-In</h1>
                    <form>
                        <h5>E-mail</h5>
                        <input type='text' value={email}  onChange= {e => setEmail(e.target.value)}
                        />

                        <h5>Password</h5>
                        <input type='password' value={password}  onChange= {e => setPassword(e.target.value)}

                        />
                        <button type='submit' onClick={signIn}>Sign In</button>
                    </form>
                    <p>
                        By Signing-In you agree to GoCart's Terms and Conditions of Use & Sale.
            
                    </p>
                    <button onClick={register} className='login__registerButton'>Create your GoCart Account</button>

                </div>
        </div>

  )
}

export default Login
