import React from "react";
import { Link } from "react-router-dom";

//Nav component contains the default links for the app
function Nav() {
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
