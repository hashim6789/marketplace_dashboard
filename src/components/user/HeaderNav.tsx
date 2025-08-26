import React from "react";

function HeaderNav() {
  const navItems = [
    "Products",
    "Suppliers",
    "Services",
    "ServicePartners",
    "RFQ Marketplace",
  ];

  return (
    <nav style={{ backgroundColor: "#304EA1" }} className="text-white">
      <div className="mx-16">
        <ul className="flex flex-wrap justify-start sm:justify-start gap-x-6 py-3 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item}>
              <button className="hover:text-gray-200 transition duration-200">
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
