import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <h1>Hey guys! I'm a Header!</h1>
     <ul>
    <li><Link to="/">About</Link></li>
    <li><Link to="/Portfolio">Portfolio</Link></li>
    <li><Link to="/Contact">Contact</Link></li>
     </ul>
    </div>
  );
}

export default Header;