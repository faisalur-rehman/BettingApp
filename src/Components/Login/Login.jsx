import React from 'react';
import Breadcrumb from '../Common/Breadcrumb/Breadcrumb';
import Complete_Footer from '../Common/Footer/Complete_Footer';
import Header from '../Common/Header/Header';
import Login_Body from "./Login_Body/Login_Body";



const Login = () => {
    return(
        <React.Fragment>
            <Header />
            <Breadcrumb detail="Sign In" type="reg"/>
            <Login_Body />
            <Complete_Footer />
        </React.Fragment>
    )
}
export default Login;