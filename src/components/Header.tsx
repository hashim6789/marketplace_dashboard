import React from "react";
import HeaderTop from "./user/HeaderTop";
import HeaderNav from "./user/HeaderNav";

const Header: React.FC = () => {
  return (
    <header className="w-full shadow-sm">
      <HeaderTop />
      <HeaderNav />
    </header>
  );
};

export default Header;
