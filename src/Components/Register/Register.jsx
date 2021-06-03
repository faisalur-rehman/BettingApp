import React from "react";
import Register_Body from "./Register_Body/Register_Body";
import Header from "../Common/Header/Header";
import Breadcrumb from "../Common/Breadcrumb/Breadcrumb";
import Complete_Footer from "../Common/Footer/Complete_Footer";


const Register = () => {
    return <React.Fragment>
        <Header />
        <Breadcrumb detail="Register" type="reg" />
        <Register_Body />
        <Complete_Footer />
    </React.Fragment>
}
export default Register;