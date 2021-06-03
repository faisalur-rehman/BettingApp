import React from "react";
import Breadcrumb from "../Common/Breadcrumb/Breadcrumb";
import Complete_Footer from "../Common/Footer/Complete_Footer";
import Header from "../Common/Header/Header";
import Accumulator_Data from "./Accumulator_Data";

const Accumulator_Main = () => {
  return (
    <React.Fragment>
      <Header />
      <Breadcrumb detail="Special" />
      <Accumulator_Data />
      <Complete_Footer />
    </React.Fragment>
  );
};
export default Accumulator_Main;
