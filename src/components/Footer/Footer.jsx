import React from "react";
import "./Footer.css"

const Footer = () => {
  return (
    <>
      <div className="footerContainer w-full py-12  bg-black flex grid sm:grid-cols-5 gap-4">
      <div className="companyInfo xl:max-w-48">
        <div className="text-white font-bold text-2xl">Swiggy</div>
        <div className="text-gray-500">© 2024 Bundl Technologies Pvt. Ltd</div></div>   
        <div className="CompanyContainer">
          <ul>
            <span className="text-white">Company</span>
            <li className="text-gray-500">About</li>
            <li className="text-gray-500">Careers</li>
            <li className="text-gray-500">Team</li>
            <li className="text-gray-500">Swiggy One</li>
            <li className="text-gray-500">Swiggy Instamart</li>
            <li className="text-gray-500">Swiggy Genie</li>
          </ul>
        </div>

        <div className="ContactUsContainer">
          <ul>
            <span className="text-white">Contact us</span>
            <li className="text-gray-500">Help & Support</li>
            <li className="text-gray-500">Partner with us</li>
            <li className="text-gray-500">Ride with us</li>
          </ul>
        </div>

        <div className="LegalContainer">
          <ul>
            <span className="text-white">Legal</span>
            <li className="text-gray-500">Terms & Conditions</li>
            <li className="text-gray-500">Cookie Policy</li>
            <li className="text-gray-500">Privacy Policy</li>
          </ul>
        </div>

        <div className="LocationContainer">
          <ul>
            <span className="text-white">We deliver to:</span>
            <li className="text-gray-500">Bangalore</li>
            <li className="text-gray-500">Gurgaon</li>
            <li className="text-gray-500">Hyderabad</li>
            <li className="text-gray-500">Delhi</li>
            <li className="text-gray-500">Mumbai</li>
            <li className="text-gray-500">Pune</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
