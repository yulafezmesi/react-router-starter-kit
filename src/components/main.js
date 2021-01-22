import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Home from "../pages/index";

const Main = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/dashboard" component={Dashboard}></Route>
        </Switch>
    );
};

export default Main;
