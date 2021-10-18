import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import Customers from "./pages/users/Customers";
import Booking from "./pages/booking/Booking";
import Services from "./pages/services/Services";
import Payment from "./pages/payment/Payment";
import Team from "./pages/team/Team";
import Chat from "./pages/chat/Chat";
import Admin from "./pages/admin/Admin";
import Setting from "./pages/setting/Setting";
import Artists from "./pages/users/Artists";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Dashborad() {
  return (
    <Router>
      <Topbar />
      <div className="container-flex">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/customers">
            <Customers />
          </Route>
          <Route path="/artists">
            <Artists />
          </Route>
          <Route path="/booking">
            <Booking />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/payment">
            <Payment />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/chat">
            <Chat />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/setting">
            <Setting />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
