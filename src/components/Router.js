import React, { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom"; // HashRouter를 BrowserRouter로 수정

import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Navigation from "./Navigation";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const AppRouter = ({ isLoggedIn }) => {
    return (
        <Router>
            {isLoggedIn && <Navigation/>}
            <Switch>
                {isLoggedIn ? (
                    <>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/profile">
                        <profile />
                    </Route>
                    <Redirect from="*" to="/" />
                    </>
                ) : (
                    <Route exact path="/">
                        <Auth />
                    </Route>
                )}
            </Switch>
        </Router>
    );
};

export default AppRouter;
