import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Footer from "./footer/footer";
import MainPage from "./main-page/main-page";

const App = () => {
    return (
      <div className="app">
        <Router>
          <Route path = "/" component = { MainPage } />
        </Router>
        <Footer/>
      </div>
    );
};

export default App;
