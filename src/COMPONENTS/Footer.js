import React from 'react';
import { NavLink } from 'react-router-dom';

export function Footer() {
    return (
        <div className="footer">

            <NavLink className="Link" to="/hire">Hire</NavLink>
            <NavLink className="Link" to="/about">About</NavLink>
            <NavLink className="Link" exact="true" to="/">Home</NavLink>
            <NavLink className="Link" to="/work">Projects</NavLink>
            <NavLink className="Link" to="/contact">Contact</NavLink>

        </div>
    )
}