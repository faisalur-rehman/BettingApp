import Dashboard from "./Dashboard/Dashboard";
import User_Statics from "./User_Statics/User_Statics";
import Payment_History from "./Payment_History/Payment_History";
import Header from "../Common/Header/Header";
import Complete_Footer from "../Common/Footer/Complete_Footer";

const User = () => {
  return <div class="user-panel-dashboard">
      <Header />
      <Dashboard />
      <User_Statics />
      <Payment_History />
      <Complete_Footer />
  </div>;
};
export default User;
