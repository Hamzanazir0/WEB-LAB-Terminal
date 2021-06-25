import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import TopMenu from "./components/TopMenu";
import LandingPage from "./components/LandingPage";
import Matchs from "./components/match/Matchs";
import ContactUs from "./components/ContactUs";
import NotFound from "./components/NotFound";
import NewMatch from "./components/match/NewMatch";
import UpdateMatch from "./components/match/UpdateMatch";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <div>
        <ToastContainer />
        <TopMenu />
        <div style={{ padding: "10px" }}>
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/contact-us" exact component={ContactUs} />
            {/* <Route path="/contact-us" exact component={ContactUs} /> */}
            <Route path="/matchs/new" component={NewMatch} />
            <Route path="/matchs/update/:id" component={UpdateMatch} />
            <Route path="/matchs/:page?" component={Matchs} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={LandingPage} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
