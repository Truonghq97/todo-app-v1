import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Reminder from "./components/Reminder";
import PrivateRoute from "./components/PrivateRoute";
import AuthRoute from "./components/AuthRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div className="app">
            <Route exact path="/">
              <Home />
            </Route>
            <PrivateRoute component={Reminder} path="/reminder" exact />
            <AuthRoute component={Login} path="/login" exact/>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/password/reset">
              <ResetPassword />
            </Route>
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
