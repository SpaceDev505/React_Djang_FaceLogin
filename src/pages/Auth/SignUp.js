import React from "react";
import { Link } from "react-router-dom";
const SignUp = ()=>{
    return (
        <div className="auth">
            <div className="auth-form">
                <div className="form-header">
                    <div className="subtitle">Sign Up </div>
                    <Link to={'/signin'}>I don't have an account</Link>
                </div>
                <div className="content">
                    <input className="form-control"  placeholder="Enter your Name"/>
                    <input  className="form-control" placeholder="Enter your Email"/>
                    <input  className='form-control' placeholder='Enter your password'/>
                    <button className="submit">Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default SignUp;