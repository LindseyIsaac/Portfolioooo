import React from "react";
import { Link } from "react-router-dom";
import{Heading}from"@chakra-ui/react"




function Header() {
  return (
    <div>
      <Heading as = "h1">Hey guys! I'm a Header!</Heading>
     <ul>
    <li><Link to="/">About</Link></li>
    <li><Link to="/Portfolio">Portfolio</Link></li>
    <li><Link to="/Contact">Contact</Link></li>
     </ul>
    </div>
  );
}

export default Header;