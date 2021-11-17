import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import Customers from "./pages/users/Customers";
import Booking from "./pages/booking/Booking";
import DailyDeal from "./pages/services/DailyDeal";
import AllServices from "./pages/services/AllServices";
import Team from "./pages/team/Team";
import Chat from "./pages/chat/Chat";
import Admin from "./pages/admin/Admin";
import Setting from "./pages/setting/Setting";
import Artists from "./pages/users/Artists";
import Pcustomers from "./pages/payment/Pcustomers";
import Partists from "./pages/payment/Partists";
import ArtistProfile from "./pages/users/ArtistProfile";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CustomerProfile from "./pages/users/CustomerProfile";
import AdminProfile from "./pages/admin/AdminProfile";

export default function Dashborad() {
  return (
    <Router>
      <Topbar />
      <div className="container-flex">
        <Sidebar />
        <Switch>
          <Route exact path="/dashboard">
            <Home />
          </Route>
          <Route exact path="/dashboard/customers">
            <Customers />
          </Route>
          <Route exact path="/dashboard/customers/customer-profile">
            <CustomerProfile />
          </Route>
          <Route exact path="/dashboard/artists">
            <Artists />
          </Route>
          <Route exact path="/dashboard/artists/artist-profile">
            <ArtistProfile />
          </Route>
          <Route path="/dashboard/booking">
            <Booking />
          </Route>
          <Route path="/dashboard/daily-deals">
            <DailyDeal />
          </Route>
          <Route path="/dashboard/all-services">
            <AllServices />
          </Route>
          <Route path="/dashboard/payments/customers">
            <Pcustomers />
          </Route>
          <Route path="/dashboard/payments/artists">
            <Partists />
          </Route>
          <Route path="/dashboard/team">
            <Team />
          </Route>
          <Route path="/dashboard/chat">
            <Chat />
          </Route>
          <Route exact path="/dashboard/admin">
            <Admin />
          </Route>
          <Route exact path="/dashboard/admin/admin-profile">
            <AdminProfile />
          </Route>
          <Route path="/dashboard/setting">
            <Setting />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
