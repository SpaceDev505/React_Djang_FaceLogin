import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const SignIn = () =>{
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const url = 'http://localhost:8000/login/'
    const submit =()=>{
        axios.post(url, {
            title:"Hello world",
            body:"this is update "
        })
        .then((response)=>{
            console.log(response.data)
        })
        console.log('ww3w3w3')
    }
    return (
       <div className="auth">
        <div className="auth-form">
            <div className="form-header">
                <div className="subtitle">Sign In</div>
                <Link className="link"  to={'/signup'}>I don't have an account</Link>
            </div>
            <div className="content">
                <input className="form-control" placeholder="Enter your email" onChange ={(e)=>{setEmail(e.target.value)}}/>
                <input className="form-control" placeholder="Enter your password" onChange={(e)=>{setpassword(e.target.value)}}/>
                <button className="submit" onClick={submit}>SignIn</button>
            </div>
        </div>
       </div>
    );
}

export default SignIn
