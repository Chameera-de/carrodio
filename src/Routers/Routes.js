import React from "react";
import { Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "../Components/Home/home";
import LayOut from "../Components/layout";
import Login from "../Components/Login/login";
import PublicRoute from "./PublicRoutes";
import { createBrowserHistory } from 'history';
import Register from "../Components/Login/register";
import Aboutus from "../Components/AboutUs/aboutus";
import Contactus from "../Components/ContactUs/contactus";
import PrivateRoute from "./PrivateRoutes";

const history = createBrowserHistory();


export const Routes = () => {
  return (
    <BrowserRouter history={history}>
        <Switch>
            <PublicRoute exact path="/">
              <LayOut page={<Home/>}/>
            </PublicRoute>
            <PublicRoute exact path="/auth">
              <LayOut page={<Login/>}/>
            </PublicRoute>
            <PublicRoute exact path="/register">
              <LayOut page={<Register/>}/>
            </PublicRoute>
            <PublicRoute exact path="/aboutus">
              <LayOut page={<Aboutus/>}/>
            </PublicRoute>
            <PublicRoute exact path="/contactus">
              <LayOut page={<Contactus/>}/>
            </PublicRoute>
            <PrivateRoute exact path="/services">
              <LayOut page={<></>}/>
            </PrivateRoute>
        </Switch>
    </BrowserRouter>
  )
}
