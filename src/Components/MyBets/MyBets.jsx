import React from 'react';
import Breadcrumb from '../Common/Breadcrumb/Breadcrumb';
import Complete_Footer from '../Common/Footer/Complete_Footer';
import Header from '../Common/Header/Header';
import MyBets_body from './MyBets_Body/MyBets_Body';


const Accumulator = () => {
    return (
        <React.Fragment>
            <Header />
            <Breadcrumb detail="My Bets"/>
            <MyBets_body />
            <Complete_Footer />
        </React.Fragment>
    )
}
export default Accumulator;
