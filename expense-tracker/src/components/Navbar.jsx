// src/components/Navbar.js
import React from "react";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo / Brand Name */}
        <div className="text-2xl font-bold tracking-wide">
          <a href="/" className="no-underline text-white">PesaTracker</a>
        </div>

        {/* Right-aligned links */}
        <div className="ml-auto flex space-x-6 text-base font-medium">
          <div>
            <a href="/">Home</a>
          </div>
          <div>
            <a href="/about" >About</a>
          </div>
          <div>
            <a href="/expenses">Expenses</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
