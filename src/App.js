import React, { createContext } from "react";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import AddAdmin from "./Components/DashBoard/AdminPanel/AddAdmin/AddAdmin";
import AddService from "./Components/DashBoard/AdminPanel/AddService/AddService";
import OrderList from "./Components/DashBoard/AdminPanel/OrderList/OrderList";
import Order from "./Components/DashBoard/UserPanel/Order/Order";
import UserPanel from "./Components/DashBoard/UserPanel/UserPanel";
import UserReview from "./Components/DashBoard/UserPanel/UserReview/UserReview";
import UserStatus from "./Components/DashBoard/UserPanel/UserStatus/UserStatus";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, SetLoggedInUser] = useState({})
  return (
    <UserContext.Provider value = {[loggedInUser, SetLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path = '/'>
            <Home/>
          </Route>
          <Route path = '/login'>
            <Login/>
          </Route>
          <PrivateRoute path = '/dashboard'>
            <Order/>
          </PrivateRoute>
          <Route path = '/review'>
            <UserReview/>
          </Route>
          <Route path = '/status'>
            <UserStatus/>
          </Route>
          <Route path = '/order-list'>
            <OrderList/>
          </Route>
          <Route path = '/addService'>
            <AddService/>
          </Route>
          <Route path = '/addAdmin'>
            <AddAdmin/>
          </Route>
          <Route path = '*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
