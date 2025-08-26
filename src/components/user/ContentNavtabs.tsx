import React, { useState } from "react";

const contentTabs = ["Products", "Suppliers"];

const ContentNavtabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Products");

  return (
    <div className="border-b border-[#BDBDBD] mb-4 overflow-x-auto">
      <ul className="flex flex-wrap md:flex-nowrap space-x-4 md:space-x-8 px-2 md:px-0 min-w-max">
        {contentTabs.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <li
              key={tab}
              className={`cursor-pointer text-sm md:text-base font-medium px-3 py-2 rounded-t-md whitespace-nowrap transition-colors ${
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
