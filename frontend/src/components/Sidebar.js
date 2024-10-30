import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 bg-orange-500 h-screen p-4 text-white hidden md:block">
      <h2 className="text-2xl font-semibold mb-8">Logo</h2>
      <nav>
        <ul>
          <li className="mb-4">
            <Link to="/">Dashboard</Link>
          </li>
          <li className="mb-4">
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className="mb-4">
            <Link to="/inputs">Inputs</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
