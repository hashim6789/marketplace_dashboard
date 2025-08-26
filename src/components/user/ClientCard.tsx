import React from "react";
import sampleLogo from "../../assets/img/iprocure_logo.png";
interface ClientCardProps {
  name: string;
  logo: string;
}

const ClientCard: React.FC<ClientCardProps> = ({
  name,
  // logo
}) => {
  return (
    <div className="flex-shrink-0 w-32 h-32 flex items-center justify-center border rounded-md shadow-sm bg-gray-50 transition-all duration-300 hover:shadow-md p-2">
      <img src={sampleLogo} alt={name} className="max-h-20 object-contain" />
    </div>
  );
};

export default ClientCard;
