import React from "react";
import {NavLink} from "react-router-dom";
import "./nav.css"

function Nav () {
    return (
        <ul className="nav nav-tabs mt-3">
            <li className="nav-item">
                <NavLink exact to="/" className="nav-link" activeClassName="active selected">Welcome</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/our-macarons" className="nav-link" activeClassName="active selected">Our Macarons</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/gifts-and-parties" className="nav-link" activeClassName="active selected">Gifts and Parties</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/contact" className="nav-link" activeClassName="active selected">Contact</NavLink>
            </li>
        </ul>
    )
}

export default Nav;