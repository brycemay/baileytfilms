import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./pictures/baileyslogo.png.jpeg";
import home from "./components/Home";
import aboutme from "./components/About";
import pricing from "./components/Pricing";
import photos from "./components/Photos";
import videos from "./components/Videos";
import booknow from "./components/Booknow";

function App() {
  return (
    <Router>
      <div className="Container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-nothing">
          <a className="avatar" href="/" target="_black">
            <img src={logo} width="50" height="50" alt="" />{" "}
          </a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto navbar-custom">
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
                <Link to="/booknow" className="booknow">
                  Book Now!
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Route path="/" exact component={home} />
        <Route path="/about" component={aboutme} />
        <Route path="/video" component={videos} />
        <Route path="/photo" component={photos} />
        <Route path="/pricing" component={pricing} />
        <Route path="/booknow" component={booknow} />
      </div>
    </Router>
  );
}

export default App;
