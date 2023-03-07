import React, { useState } from 'react';
import InLabel from './Component/inLabel.js';
import Button from './Component/button.js';
import {useNavigate} from 'react-router-dom';

function Signup() {

    const navigate = useNavigate(); 
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userEmail, setUserEmail] = useState('');

    function signedup(){ 
        if(userName !== "" || userEmail !== "" || password !== ""){
            navigate("/table"); 
        }
        else{
            alert("Oops, please fill all of the information!");
        }
    }


    // Redirect user to sign-up component
    const loginClick = () =>{
        navigate("/");  
    }

    return (
        <div className="auth-form-container">
            <h1>Registration</h1>
            <br/>
            <div className="register-form">
                <label>Email</label>
                <InLabel type="text" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} placeholder="Enter your email" />
                <label>Username</label>
                <InLabel type="text" value={userName} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your full name" />
                <label>Password</label>
                <InLabel type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="********" />
                <Button type="submit" text="Sign-up" onClick={signedup}></Button>
                <button className="link-btn" onClick={loginClick}>Already have an account? Login here.</button>
            </div>
        </div>
    );
}

export default Signup;
