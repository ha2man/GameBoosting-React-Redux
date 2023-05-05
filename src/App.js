import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// styles for this kit
import "assets/css/custom.css";
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
// pages for this kit
// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";

import Index from "views/Index";
import Order from "views/Order";
import YOrder from "views/YOrder";
import Login from "views/Login";
import Term from "views/Term";
import Signup from 'views/Signup';
import Profile from 'views/Profile';
import Home from 'views/Home';

function App() {
  useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  
  return (
    <Router>
      <IndexNavbar />
      <div className="wrapper">
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/terms" element={<Term />} />
            <Route path="/signup" element={<Signup />} />
            {/* <Route path="/profile" element={<Profile />} /> */}
            <Route path="/order" element={<Order mode="all" />} />
            <Route path="/your-order" element={<YOrder />} />
            <Route path="/rocket-league-boosting" element={<Index game="rocket" />} />
            <Route path="/league-legend-boosting" element={<Index game="legend" />} />
          </Routes>
        </div>
        <DarkFooter />
      </div>
    </Router>
  )
};

export default App;