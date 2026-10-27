import React from "react";
import { NavLink } from "react-router-dom";
import { mainNavLinks } from "../../data/navigation";

export default function Navigation() {
  return (
    <nav className="main-nav">
      <ul>
        {mainNavLinks.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
