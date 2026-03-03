import React from "react";
import { Link } from "react-router-dom";
import { Briefcase } from "lucide-react";
import "./UiverseButton.css";

const Header = () => {
  const isAuthenticated = false;
  const user = {
    fullName: "ali",
    role: "employer",
  };

  return (
    <header>
      <div className="container mx-auto px-4  ">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-linear-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <Briefcase className="h-5 w-5 text-white " />
            </div>
            <span className="text-xl font-bold text-gray-900">Jobportal</span>
          </div>
          {/* { Navigation links hidden on mobile } */}
          <nav className="hidden md:flex items-center  space-x-8">
            <Link
              to="/find-jobs"
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              Find Jobs
            </Link>
            <Link
              to={
                isAuthenticated && user?.role === "employer"
                  ? "/employer-dashboard"
                  : "/login"
              }
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              For Employers
            </Link>
            {/* auth button  */}
          </nav>
          <div className="flex items-center space-x-3">
            {isAuthenticated ? (
              <div className="flex items-center space-x-3">
                <span> Welcome, {user?.fullName}</span>
                <Link
                  to={
                    user?.role === "employer" ? "/employer-dashboard" : "/login"
                  }
                  className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-sm hover:shadow-md "
                >
                  Dashboard
                </Link>
              </div>
            ) : (
              <>
                <>
                  <Link to="/login" className="uiverse mr-4">
                    <div className="wrapper">
                      <span>Login</span>
                      <div className="circle circle-12"></div>
                      <div className="circle circle-11"></div>
                      <div className="circle circle-10"></div>
                      <div className="circle circle-9"></div>
                      <div className="circle circle-8"></div>
                      <div className="circle circle-7"></div>
                      <div className="circle circle-6"></div>
                      <div className="circle circle-5"></div>
                      <div className="circle circle-4"></div>
                      <div className="circle circle-3"></div>
                      <div className="circle circle-2"></div>
                      <div className="circle circle-1"></div>
                    </div>
                  </Link>
                  <Link
                    to="/signup"
                    className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-sm hover:shadow-md ml-2 "
                  >
                    Signup
                  </Link>
                </>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
