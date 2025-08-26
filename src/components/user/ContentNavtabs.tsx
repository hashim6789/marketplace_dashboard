import React, { useState } from "react";

const contentTabs = ["Products", "Suppliers"];

const ContentNavtabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Products");

  return (
    <div className="border-b border-gray-300 mb-4">
      <ul className="flex space-x-6">
        {contentTabs.map((tab) => (
          <li
            key={tab}
            className={`cursor-pointer pb-2 text-sm font-medium ${
              activeTab === tab
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500 hover:text-blue-500"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContentNavtabs;
