import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import * as icons from "react-icons/fa";

export default function Navbar() {
  // navItems
  const navItems = [
    { path: "/", link: "Home" },
    { path: "/services", link: "Services" },
    { path: "/about", link: "About" },
    { path: "/blogs", link: "Blogs" },
    { path: "/Contact", link: "Contact" },
  ];
  return (
    <header className="bg-black text-white fixed top-0 left-0 right-0">
      <nav className="px py-4 max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-white">
          Design<span className="text-orange-500">DK</span>
        </a>

        {/* Navitems pour le lg devices */}
        <ul className="md:flex gap-12 text-lg hidden">
          {navItems.map(({ path, link }) => (
            <li className="text-white">
              <NavLink to={path}>{link}</NavLink>
            </li>
          ))}
        </ul>

        {/* MENU iTEMS */}
        <div className="text-white lg:flex gap-4 items-center hidden">
          <a href="/" className="hover:text-orange-500">
            <icons.FaFacebook />
          </a>
          <a href="/" className="hover:text-orange-500">
            <icons.FaDribbble />
          </a>
          <a href="/" className="hover:text-orange-500">
            <icons.FaTwitter />
          </a>
          <button className="bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in">
            Log in
          </button>
        </div>

        {/* mobile menu item, display screen */}
        <div>
            <button className="cursor-pointer"><icons.FaBars className="w-5 h-5"/></button>
        </div>
      </nav>
    </header>
  );
}
