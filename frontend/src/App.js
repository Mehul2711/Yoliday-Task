import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Portfolio from "./pages/Portfolio";
import Inputs from "./pages/Inputs";
import Profile from "./pages/Profile";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Navbar />
          <div className="p-10 sm:mt-10 sm:mx-10  rounded-lg  border  min-h-max bg-white flex flex-row">
            <div>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/inputs" element={<Inputs />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
