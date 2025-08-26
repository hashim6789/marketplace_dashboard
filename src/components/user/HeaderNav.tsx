import React, { useState } from "react";

function HeaderNav() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    "Products",
    "Suppliers",
    "Services",
    "ServicePartners",
    "RFQ Marketplace",
  ];

  return (
    <nav style={{ backgroundColor: "#304EA1" }} className="text-white">
      <div className="mx-4 sm:mx-16 py-3">
        {/* Mobile Toggle Button */}
        <div className="flex justify-between items-center sm:hidden">
          <span className="text-sm font-medium">Menu</span>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Items */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } sm:flex flex-wrap justify-start gap-x-8 text-sm font-medium transition-all duration-300`}
        >
          {navItems.map((item) => (
            <li key={item}>
              <button className="hover:text-gray-200 transition duration-200 py-2 sm:py-0">
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default HeaderNav;
