import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { clients } from "../../constants";

const ClientCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? clients.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === clients.length - 1 ? 0 : prev + 1));
  };

  const visibleClients =
    clients.slice(index, index + 5).length < 5
      ? [
          ...clients.slice(index),
          ...clients.slice(0, 5 - (clients.length - index)),
        ]
      : clients.slice(index, index + 5);

  return (
    <div className="w-full bg-[#F2F2F2] py-10 px-4 sm:px-6 md:px-12 flex flex-col items-center">
      <h2 className="text-center font-[400] text-[28px] sm:text-[32px] md:text-[36.67px] leading-[100%] tracking-[0%] font-poppins mb-8 sm:mb-10">
        Trusted by leading Clients
      </h2>

      <div className="relative flex items-center justify-center w-full max-w-6xl overflow-hidden">
        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 bg-[#F2F2F2] w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:bg-[#d6d6d6] transition"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Logo Row */}
        <div className="flex gap-4 sm:gap-6 md:gap-8 px-4 sm:px-8 md:px-12 overflow-x-auto scrollbar-hide">
          {visibleClients.map((client, idx) => (
            <div
              key={idx}
              className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center bg-white rounded-md shadow-sm hover:shadow-md transition"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-16 sm:max-h-20 object-contain filter grayscale"
              />
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 bg-[#F2F2F2] w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:bg-[#d6d6d6] transition"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default ClientCarousel;
