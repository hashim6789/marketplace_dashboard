import { useState } from "react";
import Button from "../ui/Button";
import { FALLBACK_IMAGE } from "../../constants";

interface ProductBannerProps {
  imageUrl: string;
  title: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const ProductBanner: React.FC<ProductBannerProps> = ({
  imageUrl,
  title,
  buttonText,
  onButtonClick,
}) => {
  const [imgSrc, setImgSrc] = useState(imageUrl);

  const handleImageError = () => {
    setImgSrc(FALLBACK_IMAGE);
  };

  return (
    <div className="relative w-10/12 mx-auto h-64 sm:h-80 md:h-96 lg:h-[400px] rounded-3xl mt-12 overflow-hidden shadow-2xl">
      {/* Background Image */}
      <img
        src={imgSrc}
        alt="Product Banner"
        onError={handleImageError}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/40"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12 w-8/12">
        <h1 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal leading-tight mb-3 sm:mb-4">
          {title}
        </h1>

        <div className=" inset-0 bg-gradient-to-r from-black via-black/70 to-transparent flex flex-col justify-center items-start p-6 text-white">
          {buttonText && onButtonClick && (
            <Button
              label={buttonText}
              color="standard"
              variant="solid"
              className="rounded-full mt-2"
              rounded="full"
              size="lg"
              type="button"
              onClick={onButtonClick}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;
