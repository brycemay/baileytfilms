import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./pictures/logo.jpg";

function App() {
  return (
    <Router>
      <div className="Container">

        <nav className="navbar navbar-expand-lg navbar-light bg-nothing">
          <a className="navbar-brand" href="/" target="_black">
          <img src={logo} width="50" height="50" alt="" />{" "}
            {
              <div className="Tilt-inner">
                {" "}
                
              </div>
            }
          </a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/video" className="nav-link">
                  Video
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/photo" className="nav-link">
                  Photo
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/pricing" className="nav-link">
                  Pricing
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Route path="/" exact component='' />
          <Route path="/about" component='' />
          <Route path="/video" component='' />
          <Route path="/photo" component='' />
          <Route path="/video" component='' />
          <Route path="/contact" component='' />
      </div>
    </Router>
  );
}

export default App;
