import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      Footer TEest
      <div className="bg-red-200">
        <NavLink to="/" className="p-4">Home</NavLink>
        <NavLink to="/AboutMe" className="p-4">About Me</NavLink>
        <NavLink to="/Others" className="p-4">Others</NavLink>
        <NavLink to="/Projects" className="p-4">Projects</NavLink>
      </div>
    </footer>
  )
}