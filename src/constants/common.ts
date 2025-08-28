import clientLogo1 from "../assets/img/client_logo_01.png";
import clientLogo2 from "../assets/img/client_logo_02.jpg";
import clientLogo3 from "../assets/img/client_logo_03.jpg";
import clientLogo4 from "../assets/img/client_logo_04.png";
import clientLogo5 from "../assets/img/client_logo_05.jpg";

export const FALLBACK_IMAGE =
  "https://via.placeholder.com/1200x400?text=No+Image+Available";

export const clients = [
  { name: "3M", logo: clientLogo1 },
  { name: "Amentum", logo: clientLogo2 },
  { name: "Daikin", logo: clientLogo3 },
  { name: "Airwheel", logo: clientLogo4 },
  { name: "GE", logo: clientLogo5 },
  { name: "Samsung", logo: clientLogo1 },
  { name: "Samsung", logo: clientLogo2 },
  { name: "Daikin", logo: clientLogo3 },
  { name: "Airwheel", logo: clientLogo4 },
  { name: "GE", logo: clientLogo5 },
];

export const navItems = [
  "Products",
  "Suppliers",
  "Services",
  "ServicePartners",
  "RFQ Marketplace",
];

export const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Product", href: "/products" },
];
