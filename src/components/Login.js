import React, { useState } from 'react'
import '../style/Login.scss'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../firebase'

function Login() {

    const history = useHistory();
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    function signIn(e) {
        e.preventDefault();
        // firebase login
        auth.signInWithEmailAndPassword(email, password).then(auth => {
            history.push('/')
        }).catch(error => alert(error.message))
    }

    function register(e) {
        e.preventDefault();
        // firebase register
        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            // it successfully created a new user
            console.log(auth);
            if(auth){
                history.push('/')
            }
        }).catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://wwwfr.uni.lu/var/storage/images/media/images/amazon_logo/1175096-1-fre-FR/amazon_logo.png" alt="logo" />
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                <form action="">

                    <h5>Email</h5>
                    <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />

                    <button type='submit' className="login__container--signin" onClick={signIn}>Sign In</button>

                </form>
                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interested-Bases Ads Notice.
                </p>

                <button className="login__container--register" onClick={register}>Create your Amazon Account </button>
            </div>
        </div>
    )
}

export default Login
