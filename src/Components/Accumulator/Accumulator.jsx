import React from 'react';
import Breadcrumb from '../Common/Breadcrumb/Breadcrumb';
import Complete_Footer from '../Common/Footer/Complete_Footer';
import Header from '../Common/Header/Header';
import Accumulator_Body from './Accumulator_Body/Accumulator_Body';

const Accumulator = () => {
    return (
        <React.Fragment>
            <Header />
            <Breadcrumb detail="Accumulator"/>
            <Accumulator_Body />
            <Complete_Footer />
        </React.Fragment>
    )
}
export default Accumulator;