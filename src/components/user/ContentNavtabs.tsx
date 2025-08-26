import React, { useState } from "react";

const contentTabs = ["Products", "Suppliers"];

const ContentNavtabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Products");

  return (
    <div className="border-b border-[#BDBDBD] mb-4">
      <ul className="flex space-x-8">
        {contentTabs.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <li
              key={tab}
              className={`cursor-pointer text-sm font-medium px-3 py-1 rounded-t-md transition-colors ${
                isActive
                  ? "bg-[#E6ECF8] border-b-2 border-[#304EA1] text-[#304EA1]"
                  : "text-[#BDBDBD] hover:text-[#4668B1]"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContentNavtabs;
