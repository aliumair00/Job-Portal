import React from "react";
import { Briefcase } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-16 border-t border-gray-100">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <div className="flex items-center justify-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-linear-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
            <Briefcase className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-gray-900 tracking-tight">
            JobPortal
          </span>
        </div>

        <p className="text-gray-600 text-sm md:text-base max-w-lg mb-8 leading-relaxed">
          Connecting talented professionals with innovative companies worldwide.
          <br />
          Your career success is our mission.
        </p>

       
        <div className="text-gray-500 text-xs md:text-sm space-y-1">
          <p>&copy; 2026 JobPortal.</p>
          <p className="flex items-center justify-center gap-1">
            Made with <span className="text-red-500 text-base">❤️</span>...
            ALi's Coding
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
