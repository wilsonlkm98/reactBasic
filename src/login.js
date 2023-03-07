import React, { useState } from 'react';
import InLabel from './Component/inLabel.js';
import Button from './Component/button.js';
import {useNavigate} from 'react-router-dom';

function Login() {
    // Fixed/Hard coded dict for simple authentication.
    const [user, setUser] = useState([
        { userName: 'Wilson', userEmail: 'wilson123@gmail.com', userPassword: 'abc123'},
        { userName: 'Chua', userEmail: 'Chua123@gmail.com', userPassword: 'abc123'},
        { userName: 'Ming', userEmail: 'Ming123@gmail.com', userPassword: 'abc123'},
    ]);

    const navigate = useNavigate(); 
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isButtonClicked, setIsButtonClicked] = useState(false);

    function handleLogin() {
        var check = false;
        // Loop the dict variable and then match it.
        
        for(let i = 0; i < Object.keys(user).length; i++){
            if(user[i].userName === userName && user[i].userPassword === password){
               // Redirect user to homepage component after succeeded
                check = true;
                navigate("/home");
            }
        }

        if(check === false){
            // Display error message if data is wrong
            alert('Invalid username or password\nYou cannot login anymore');
        }
        setIsButtonClicked(true);
    }

    // Redirect user to sign-up component
    const registerClick = () =>{
        navigate("/signup");  
    }

    return (
        <div className="auth-form-container">
            <div className="login-container">
                <h1>Login</h1>
                <label>Username</label>
                <InLabel type="text" value={userName} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your username" />
                <label>Password</label>
                <InLabel type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="********" />
                <Button type="submit" text="login" onClick={handleLogin} disabled={isButtonClicked}></Button>
                <button className="link-btn" onClick={registerClick}>Don't have an account? Register here.</button>
            </div>
        </div>
    );
}

export default Login;
