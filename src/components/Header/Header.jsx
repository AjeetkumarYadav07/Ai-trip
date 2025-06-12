import React, { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaSun, FaMoon } from "react-icons/fa6";
import { useTheme } from "../../context/ThemeContext";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { googleLogout } from "@react-oauth/google";
import GoogleLoginDialog from "../TripSetup/GoogleLoginDialog";

const Header = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const navigate = useNavigate();
  const { darkMode, toggleTheme } = useTheme();

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <>
      <div className="p-2 shadow-sm flex justify-between items-center px-5 bg-white dark:bg-gray-800">
        {/* Logo */}
        <div>
          <Link to="/">
            <img className="w-12" src={assets.logo} alt="logo" />
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Theme toggle button */}
          <button
            onClick={toggleTheme}
            className="text-xl p-2 rounded-full dark:text-yellow-300 text-gray-800"
          >
            {darkMode  ? <FaSun className="cursor-pointer" /> : <FaMoon />}
          </button>


          {user ? (
            <div className="flex gap-3 items-center">
              <Button
                className="rounded-full cursor-pointer"
                variant="outline"
                onClick={() => navigate("/create-trip")}
              >
                + Create Trip
              </Button>

              <Popover>
                <PopoverTrigger>
                  <FaUser className="w-10 h-10 text-gray-500 dark:text-white rounded-full bg-gray-200 dark:bg-gray-700 p-2 cursor-pointer" />
                </PopoverTrigger>
                <PopoverContent className="text-sm p-2 cursor-pointer">
                  <h2
                    onClick={() => {
                      googleLogout();
                      localStorage.clear();
                      navigate("/");
                    }}
                  >
                    Log Out
                  </h2>
                </PopoverContent>
              </Popover>
            </div>
          ) : (
            <Button className="cursor-pointer" onClick={() => setOpenLogin(true)}>
              Sign In
            </Button>
          )}
        </div>
      </div>

      {/* Google login dialog */}
      <GoogleLoginDialog open={openLogin} onClose={() => setOpenLogin(false)} />
    </>
  );
};

export default Header;
