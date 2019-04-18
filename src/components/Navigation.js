import React from "react";
import { Link } from "gatsby";
const ListLink = props => (
  <li className="link">
    <Link to={props.to} activeStyle={{ color: "red" }}>{props.children}</Link>
  </li>
)

export default Navigation => (
  <ul className="links">
    <ListLink to="/about/">about</ListLink>
    <ListLink to="/work/">work</ListLink>
    <ListLink to="/blog/">blog</ListLink>
    <ListLink to="/contact/">contact</ListLink>
  </ul>
)
