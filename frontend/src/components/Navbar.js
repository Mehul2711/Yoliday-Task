import React, { useState } from "react";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex items-center justify-between bg-white shadow-md p-4">
      <h1 className="text-lg font-semibold">MyApp</h1>

      <div className="flex items-center space-x-4">
        <button className="relative">
          <span className="material-icons text-gray-600 text-xl">🔔</span>

          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center space-x-2 focus:outline-none"
          >
            <span className="text-gray-600">Profile</span>
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
              <a
                href="#profile"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                View Profile
              </a>
              <a
                href="#settings"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Settings
              </a>
              <a
                href="#logout"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
