import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#151519]   text-[#F5EFE6] py-12 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-[#FFB347] mb-4">
            Ratnagiri Tours
          </h2>
          <p className="text-sm">
            Discover the beauty of Ratnagiri – beaches, forts, temples and more.
            Plan your perfect getaway with us.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-between md:justify-evenly">
          <div>
            <h3 className="text-lg font-semibold text-[#FFB347] mb-4">
              Explore
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-[#386FA4]">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#386FA4]">
                  Beaches
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#386FA4]">
                  Temples
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#386FA4]">
                  Forts
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-[#FFB347] mb-4">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-[#386FA4]">
                  Tour Booking
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#386FA4]">
                  Custom Packages
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#386FA4]">
                  Guided Tours
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#386FA4]">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact info*/}
        <div>
          <h3 className="text-lg font-semibold text-[#FFB347] mb-4">Connect</h3>
          <p className="text-sm mb-3">Email: info@ratnagiriholidays.com</p>
          <div className="flex gap-4 text-[#F5EFE6] text-lg">
            <a href="#" className="hover:text-[#FFB347]">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-[#FFB347]">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-[#FFB347]">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-[#FFB347]">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Ratnagiri Tours. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
