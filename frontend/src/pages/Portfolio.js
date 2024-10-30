import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import apiService from "../services/apiService";

function Portfolio() {
  const [section, setSection] = useState("Project");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        let result;
        switch (section) {
          case "Project":
            result = await apiService.getProjects();
            break;
          case "Saved":
            result = await apiService.getSaved();
            break;
          case "Shared":
            result = await apiService.getShared();
            break;
          case "Achievement":
            result = await apiService.getAchievements();
            break;
          default:
            result = [];
        }
        setData(result);
        setFilteredData(result);
      } catch (error) {
        console.error(`Error fetching ${section} data:`, error);
      }
    };
    fetchData();
  }, [section]);

  useEffect(() => {
    const filtered = data.filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchTerm, data]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const onAddToCart = (item) => {
    console.log("Added to cart:", item);
  };

  return (
    <div className=" p-4 sm:w-full  relative">
      <h1 className="text-xl font-semibold mb-4 text-center md:text-left">
        Portfolio
      </h1>
      <div className="flex flex-col sm:flex-row  sm:w-full">
        <div className="flex space-x-2 md:space-x-4 mb-4 border-b border-gray-300 overflow-x-auto scrollbar-hide  sm:w-96">
          {["Project", "Saved", "Shared", "Achievement"].map((sec) => (
            <button
              key={sec}
              className={`py-2 px-3 whitespace-nowrap ${
                section === sec
                  ? "border-b-2 border-orange-500 text-orange-500 font-medium"
                  : "text-gray-600"
              }`}
              onClick={() => setSection(sec)}
            >
              {sec}
            </button>
          ))}
        </div>
        <div className="sm:ml-[550px] my-2 sm:my-0 ">
          <div className="">
            <SearchBar handleSearch={handleSearch} />
          </div>
        </div>
      </div>

      {/* Card List */}
      <div className="flex flex-col gap-4 mb-20 sm:w-[50%]">
        {" "}
        {/* Added margin-bottom to make room for navbar */}
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <Card key={item.id} project={item} onAddToCart={onAddToCart} />
          ))
        ) : (
          <p className="text-center text-gray-500">No projects found.</p>
        )}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-t-lg p-2 md:hidden flex justify-around items-center border-t border-gray-200">
        <button
          onClick={() => setSection("Home")}
          className="flex flex-col items-center text-gray-600"
        >
          <span className="text-lg">🏠</span>
          <span className="text-xs">Home</span>
        </button>
        <button
          onClick={() => setSection("Portfolio")}
          className="flex flex-col items-center text-orange-500"
        >
          <span className="text-lg">📁</span>
          <span className="text-xs">Portfolio</span>
        </button>
        <button
          onClick={() => setSection("Input")}
          className="flex flex-col items-center text-gray-600"
        >
          <span className="text-lg">📝</span>
          <span className="text-xs">Input</span>
        </button>
        <button
          onClick={() => setSection("Profile")}
          className="flex flex-col items-center text-gray-600"
        >
          <span className="text-lg">👤</span>
          <span className="text-xs">Profile</span>
        </button>
      </div>
    </div>
  );
}

export default Portfolio;
