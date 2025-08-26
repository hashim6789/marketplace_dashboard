import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/user/BreadCrumbs";
import { HomeIcon } from "lucide-react";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Product", href: "/products" },
];

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow container mx-auto px-4">
        <Breadcrumbs
          items={breadcrumbItems}
          icon={<HomeIcon fill="" className="w-4 h-4 text-gray-600" />}
        />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
