import React from "react";
import logo from "../../assets/img/iprocure_logo.png";
import MainSearchBar from "./MainSearchBar";
import Button from "../ui/Button";

const HeaderTop: React.FC = () => {
  return (
    <header className="bg-gray-100 py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center sm:items-center justify-between gap-y-4 sm:gap-y-0 sm:gap-x-6">
        {/* Logo */}
        <div className="flex justify-center sm:justify-start w-full sm:w-auto">
          <img src={logo} alt="PROCURE Logo" className="h-10 w-auto" />
        </div>

        {/* Search Bar */}
        <div className="w-full sm:flex-grow sm:max-w-xl flex justify-center">
          <MainSearchBar
            categories={["Products", "Courses", "Articles"]}
            onSearch={(query, category) => {
              console.log("Searching:", query, "in", category);
            }}
          />
        </div>

        {/* Auth Buttons */}
        <div className="w-full sm:w-auto flex justify-center sm:justify-end space-x-4">
          <Button
            label="Register"
            color="standard"
            variant="solid"
            className="rounded-full"
            rounded="full"
            size="lg"
            type="button"
          />
          <Button
            label="Login"
            color="standard"
            variant="outline"
            rounded="full"
            size="lg"
            type="button"
          />
        </div>
      </div>
    </header>
  );
};

export default HeaderTop;
