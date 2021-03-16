import React from "react";
import App from "./App";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function Nav(props) {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <Link to="/cats">Cats</Link>
        </li>
        <li>
          <Link to="/dogs">Dogs</Link>
        </li>
        <li>
          <Link to="/computers">Computers</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
