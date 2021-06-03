import React from 'react';
import Breadcrumb from '../Common/Breadcrumb/Breadcrumb';
import Complete_Footer from '../Common/Footer/Complete_Footer';
import Header from '../Common/Header/Header';
import Football_Body from "./Football_Body/Football_Body";

const Football = () => {
    return (<React.Fragment>
        <Header />
        <Breadcrumb detail="COMPETITIONS" />
        <Football_Body />
        <Complete_Footer />
    </React.Fragment>)

}
export default Football;