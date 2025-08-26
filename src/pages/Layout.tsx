import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/user/BreadCrumbs";
import Banner from "../components/user/Banner";
import bannerImage from "../assets/img/banner_01.jpg";
import ClientTestimonial from "../components/user/ClientTestimonial";
import houseIcon from "../assets/svg/house-solid-full.svg";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Product", href: "/products" },
];

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <Breadcrumbs
        items={breadcrumbItems}
        icon={
          <img src={houseIcon} alt="Home" className="w-4 h-4 inline-block" />
        }
      />
      <main className="flex-grow container py-12">
        <Banner
          title="Durable Construction: The 3M 6200 half face respirator, ensuring a durable and long-lasting product."
          buttonText="Buy Now"
          imageUrl={bannerImage}
          onButtonClick={() => console.log("Button clicked")}
        />
        <Outlet />
      </main>
      <ClientTestimonial />
      <Footer />
    </div>
  );
};

export default Layout;
