import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home";
import ContactPage from "./pages/contact";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage}>
            <HomePage />
          </Route>
          <Route path="/contact" component={ContactPage}>
            <ContactPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

