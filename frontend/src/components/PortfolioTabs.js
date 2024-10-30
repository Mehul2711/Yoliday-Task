import React from "react";

function PortfolioTabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex space-x-4 border-b border-gray-300">
      {["Project", "Saved", "Shared", "Achievement"].map((tab) => (
        <button
          key={tab}
          className={`py-2 px-4 ${
            activeTab === tab
              ? "border-b-2 border-orange-500 text-orange-500"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default PortfolioTabs;
