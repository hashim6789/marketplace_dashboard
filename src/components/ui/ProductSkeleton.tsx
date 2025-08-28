const ProductSkeleton = () => {
  return (
    <div className="border border-[#E0E0E0] rounded-md bg-white shadow-sm w-full animate-pulse">
      <div className="flex flex-col gap-4 items-center sm:items-start p-4">
        {/* Image Placeholder */}
        <div className="w-full max-w-[220px] h-[160px] bg-gray-200 rounded-md" />

        {/* Text Placeholders */}
        <div className="w-full space-y-2">
          <div className="h-4 bg-gray-200 rounded w-3/4" />
          <div className="h-3 bg-gray-200 rounded w-1/2" />
          <div className="h-3 bg-gray-200 rounded w-2/3" />
        </div>

        {/* Button Placeholder */}
        <div className="w-full mt-4 h-8 bg-gray-200 rounded-md" />
      </div>
    </div>
  );
};

export default ProductSkeleton;
