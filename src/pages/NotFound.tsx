import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6 text-center">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-600 mb-6 max-w-md">
        Sorry, the page you're looking for doesn't exist or has been moved.
        Let's get you back on track.
      </p>
      <h2 className="text-2xl font-bold text-[#304EA1] bg-[#F0F4FF] px-4 py-2 rounded-md shadow-sm">
        Please Enter the Go To Products Page
      </h2>
      <Link
        to="/user/products"
        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors duration-200"
      >
        Go Products Page
      </Link>
    </div>
  );
};

export default NotFound;
