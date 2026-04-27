// src/pages/Dashboard.jsx

import React from "react";
import Sidebar from "../component/Slider";
import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#f5f2ec]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-8">
        
        {/* Top Heading */}
        <h1 className="text-3xl font-bold text-[#1a3c5e] mb-8">
          Welcome to Dashboard
        </h1>

        {/* Book Inventory Section */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            
            {/* Title */}
            <h2 className="text-2xl font-semibold text-gray-800">
              Book Inventory
            </h2>

            {/* Search + Button */}
            <div className="flex flex-col sm:flex-row gap-3">
              
              <input
                type="text"
                placeholder="Search here..."
                className="border border-gray-300 rounded-lg px-4 py-2 w-64 outline-none focus:ring-2 focus:ring-[#1a3c5e]"
              />

              <button
                className="bg-[#1a3c5e] text-white px-6 py-2 rounded-lg hover:bg-[#16324d] transition"
              ><Link to="/addbook">
                Add Book
                </Link>
              </button>

            </div>
          </div>

        </div>
      </main>
    </div>
  );
}