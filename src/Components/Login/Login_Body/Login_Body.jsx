import "./Login_Body.css";
import React from 'react';
import "../../../assets/bootstrap.min.css";
import { Link } from "react-router-dom";

const Login_Body = () => {
    return (<div class="login">
    <div class="container">
        <div class="row justify-content-center">
            <h1>Sign In</h1>
        </div>
        <div class="row justify-content-center">
            <div class="col-xl-5 col-lg-5 col-md-6 col-sm-9">
                <div class="login-form">
                    <form action="user-panel/user.html">
                        <input type="email" placeholder="Enter Your Mail" />
                        <input type="password" placeholder="Enter Your Password" />
                        <Link to="/user"><button type="submit" class="btn btn-block">Login</button></Link>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>)
}
export default Login_Body;