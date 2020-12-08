import React, { createContext } from "react";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Order from "./Pages/Order/Order";
import ServiceList from "./Pages/ServiceList/ServiceList";
import AddService from "./Pages/AddService/AddService";
import MakeAdmin from "./Pages/MakeAdmin/MakeAdmin";
import Review from "./Pages/Review/Review";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [userInfo, setUserInfo] = useState({})
  return (
    <UserContext.Provider value = {[userInfo, setUserInfo]}>
      <Router>
        <Switch>
          <Route exact path = '/'>
            <Home />
          </Route>
          <Route path = '/login'>
            <Login />
          </Route>
          <PrivateRoute path = '/order/:serviceId'>
            <Order />
          </PrivateRoute>
          <PrivateRoute path = '/service-list'>
            <ServiceList />
          </PrivateRoute>
          <PrivateRoute path = '/review'>
            <Review />
          </PrivateRoute>
          <PrivateRoute path = '/add-service'>
            <AddService />
          </PrivateRoute>
          <PrivateRoute path = '/add-admin'>
            <MakeAdmin />
          </PrivateRoute>
          <Route path = '*'>
            
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
