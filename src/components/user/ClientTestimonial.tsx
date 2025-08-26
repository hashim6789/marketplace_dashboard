import React, { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import ClientCard from "./ClientCard";

const clients = [
  { name: "3M", logo: "/logos/3m.png" },
  { name: "amefhum", logo: "/logos/amefhum.png" },
  { name: "DAIKIN", logo: "/logos/daikin.png" },
  { name: "GE", logo: "/logos/ge.png" },
  { name: "Airwhale", logo: "/logos/airwhale.png" },
];

function ClientTestimonial() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -250 : 250,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full px-4 py-8 bg-[#F2F2F2] text-[#000000]">
      <h2 className="text-lg font-semibold mb-6 text-center transition-all duration-300 hover:text-gray-800">
        Trusted by leading Clients
      </h2>

      <div className="relative max-w-5xl mx-auto">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white border rounded-full p-2 shadow transition-all duration-300 hover:bg-gray-100"
        >
          <ChevronLeftIcon className="w-6 h-6 text-[#000000]" />
        </button>

        {/* Logo Carousel */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-6 px-12 py-2 scrollbar-hide"
        >
          {clients.map((client) => (
            <ClientCard
              key={client.name}
              name={client.name}
              logo={client.logo}
            />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white border rounded-full p-2 shadow transition-all duration-300 hover:bg-gray-100"
        >
          <ChevronRightIcon className="w-6 h-6 text-[#000000]" />
        </button>
      </div>
    </div>
  );
}

export default ClientTestimonial;
