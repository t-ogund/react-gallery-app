import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function Nav() {
  return (
    <BrowserRouter>
      <nav class="main-nav">
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
    </BrowserRouter>
  );
}

export default Nav;
