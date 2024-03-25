import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-blueApex to-orangeApex w-full z-50 fixed items-center p-2 flex justify-between">
      <div className="flex">
        <div>
          <img
            src={logo}
            className="h-[80px] w-[160px] object-cover bg-blend-normal "
          />
        </div>
        <div className="hidden md:flex items-center justify-between">
          <ul className=" flex items-center px-4">
            <li className="px-2 cursor-pointer hover:text-orange hover:underline duration-200 ease-in-out">
              About
            </li>
            <li className="px-4 cursor-pointer hover:text-orange hover:underline duration-200 ease-in-out">
              Services
            </li>
            <li className="px-2 cursor-pointer hover:text-orange hover:underline duration-200 ease-in-out">
              Portfolio
            </li>
            <li className="px-2 cursor-pointer hover:text-orange hover:underline duration-200 ease-in-out">
              Testimonials
            </li>
            <li className="px-2 cursor-pointer hover:text-orange hover:underline duration-200 ease-in-out">
              Contact
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-end ml-[10px] ">
          <button className=" hidden lg:block  border-2 rounded-md p-2">
            Get Quote
          </button>
          <div className="lg:hidden ml-[180px] md:ml-[100px]" size={30}>
            <GiHamburgerMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
<div className="min-h-screen bg-gradient-to-r from-[204,207,208] to-[239,213,218]"></div>;
