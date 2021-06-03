import React from "react";
import Breadcrumb from "../Common/Breadcrumb/Breadcrumb";
import Footer from "../Common/Footer/Footer";
import Header from "../Common/Header/Header";
import Special_Body from "./Special_Body/Special_Body";

const Special = () => {
  return (
    <React.Fragment>
      <Header />
      <Breadcrumb detail="Special" />
      <Special_Body />
      <Footer />
    </React.Fragment>
  );
};
export default Special;
