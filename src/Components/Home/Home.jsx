import React, { useState } from "react";
import Banner from "./Banner/Banner";
import Batting from "./Betting/Betting";
import Complete_Footer from "../Common/Footer/Complete_Footer";
import Header from "../Common/Header/Header";
import TodaySpecial from "./TodaySpecial/Today_Special";
import Betting_Modal from "./Betting/BettingModal/Betting_Modal";

const Home = () => {
  const [show_Modal, set_show_Modal] = useState("bet-modal-bg");
  const [open_Modal, set_open_Modal] = useState("bet-modal");
  const [Bet_Data, set_Bet_Data] = useState({});
  const [Match_data, set_Match_Data] = useState({});

  const showModalHandler = (bet_data, match_data) => {
    console.log("show clicked");
    set_show_Modal("bet-modal-bg show");
    set_open_Modal("bet-modal open");
    set_Bet_Data({...bet_data});
    set_Match_Data({...match_data});
  };

  const hideModalHandler = () => {
    set_show_Modal("bet-modal-bg");
    set_open_Modal("bet-modal");
  };

  return (
    <React.Fragment>
      <Betting_Modal
        onHideModal={hideModalHandler}
        bet_modal_bg={show_Modal}
        bet_modal={open_Modal}
        betData = {Bet_Data}
      />
      <Header />
      <Banner />
      <Batting onShowModal={showModalHandler} />
      <TodaySpecial />
      <Complete_Footer />
    </React.Fragment>
  );
};
export default Home;
