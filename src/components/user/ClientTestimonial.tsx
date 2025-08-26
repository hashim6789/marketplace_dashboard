import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import logo from "../../assets/img/iprocure_logo.png";

const clients = [
  { name: "3M", logo: "/logos/3m.png" },
  { name: "Amentum", logo: "/logos/amentum.png" },
  { name: "Daikin", logo: "/logos/daikin.png" },
  { name: "GE", logo: "/logos/ge.png" },
  { name: "Airwheel", logo: "/logos/airwheel.png" },
  { name: "Samsung", logo: "/logos/samsung.png" },
];

const ClientCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? clients.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === clients.length - 1 ? 0 : prev + 1));
  };

  const visibleClients =
    clients.slice(index, index + 4).length < 4
      ? [
          ...clients.slice(index),
          ...clients.slice(0, 4 - (clients.length - index)),
        ]
      : clients.slice(index, index + 4);

  return (
    <div className="w-full bg-[#F2F2F2] py-10 px-6 md:px-12 flex flex-col items-center">
      <h2 className="text-center font-[400] text-[36.67px] leading-[100%] tracking-[0%] font-poppins mb-10">
        Trusted by leading Clients
      </h2>

      <div className="relative flex items-center justify-center w-full max-w-6xl overflow-hidden">
        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#F2F2F2] w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#d6d6d6] transition"
        >
          <span className="text-[20px] font-semibold text-[#333]">
            {" "}
            <ChevronLeft />
          </span>
        </button>

        {/* Logo Row */}
        <div className="flex gap-8 px-12 overflow-hidden">
          {visibleClients.map((client, idx) => (
            <div
              key={idx}
              className="w-28 h-28 flex items-center justify-center bg-white rounded-md shadow-sm hover:shadow-md transition"
            >
              <img
                src={logo}
                // src={client.logo}
                alt={client.name}
                className="max-h-20 object-contain"
              />
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#F2F2F2] w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#d6d6d6] transition"
        >
          <span className="text-[20px] font-semibold text-[#333]">
            <ChevronRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default ClientCarousel;
