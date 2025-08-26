import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/user/BreadCrumbs";
import { HomeIcon } from "lucide-react";
import Banner from "../components/user/Banner";
import bannerImage from "../assets/img/banner_01.jpg";
import logo from "../assets/img/iprocure_logo.png";

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
        <Banner
          title="Durable Construction: The 3M 6200 half face respirator, ensuring a durable and long-lasting product."
          buttonText="Buy Now"
          imageUrl={bannerImage}
          onButtonClick={() => console.log("Button clicked")}
        />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
