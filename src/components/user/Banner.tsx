import { useState } from "react";
import Button from "../ui/Button";

interface ProductBannerProps {
  imageUrl: string;
  title: string;
  subtitle?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const ProductBanner: React.FC<ProductBannerProps> = ({
  imageUrl,
  title,
  subtitle,
  buttonText,
  onButtonClick,
}) => {
  const fallbackImage =
    "https://via.placeholder.com/1200x400?text=No+Image+Available";
  const [imgSrc, setImgSrc] = useState(imageUrl);

  const handleImageError = () => {
    setImgSrc(fallbackImage);
  };
  return (
    <div className="relative w-full aspect-[3/1] rounded-lg overflow-hidden shadow-lg">
      <img
        src={imgSrc}
        alt={title}
        className="w-full h-full object-cover"
        onError={handleImageError}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent flex flex-col justify-center items-start p-6 text-white">
        <h2 className="text-xl sm:text-2xl font-bold">{title}</h2>
        {subtitle && <p className="text-sm sm:text-base mt-2">{subtitle}</p>}
        {buttonText && onButtonClick && (
          <Button
            label={buttonText}
            color="standard"
            variant="solid"
            className="rounded-full mt-4"
            rounded="full"
            size="lg"
            type="button"
            onClick={onButtonClick}
          />
        )}
      </div>
    </div>
  );
};

export default ProductBanner;
