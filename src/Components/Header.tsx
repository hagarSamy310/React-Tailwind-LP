import bg from "../assets/bg.jpg";
import logo from "../assets/logoHeader.svg";
import { navItems } from "../data";
import user from "../assets/user.svg";
import fav from "../assets/fav.svg";
import shop from "../assets/shop.svg";
import { Tooltip } from "react-tooltip";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className="w-full h-screen flex flex-col relative bg-cover bg-top pb-6"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-[50]"></div>

      {/* HEADER */}
      <header className="w-full h-[100px] flex items-center lg:px-[64px] px-5 border-b border-white/40 z-[100]">
        {/* Left: Hamburger + Logo */}
        <div className="flex items-center ml-0 gap-8">
          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1 z-[110] cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span
              className={`w-6 h-0.5 bg-white transition-transform duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-transform duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>

          {/* Logo (does not shrink) */}
          <img
            src={logo}
            alt="logo"
            className="cursor-pointer lg:w-[140px] w-[100px] h-[30px] pr-3 flex-shrink-0"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-[50px] pr-20 ml-10">
          {navItems.map((item) => (
            <a
              key={item.title}
              href={item.link}
              className="text-[18px] uppercase border-b border-transparent hover:border-white font-bold"
            >
              {item.title}
            </a>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center md:gap-[40px] gap-5 ml-auto pr-2">
          <img
            src={user}
            alt="user"
            className="cursor-pointer"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Profile"
          />
          <img
            src={fav}
            alt="favorites"
            className="cursor-pointer"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Favorites"
          />
          <img
            src={shop}
            alt="shop"
            className="cursor-pointer"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Cart"
          />
          <Tooltip
            id="my-tooltip"
            style={{
              backgroundColor: "white",
              color: "black",
              padding: "0px 8px",
              fontSize: "14px",
            }}
            place="bottom"
          />
        </div>
      </header>

      {/* Overlay (background) */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[105]"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Side Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-40 bg-black/20 backdrop-blur-md z-[110] transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-start items-center justify-between p-6 border-b border-white/20">
          <h2 className="text-white text-l uppercase">Menu</h2>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="cursor-pointer text-white text-xl hover:rotate-90 transition-transform duration-300 ml-4 mb-1"
          >
            ×
          </button>
        </div>

        <nav className="flex flex-col p-6 gap-6">
          {navItems.map((item) => (
            <a
              key={item.title}
              href={item.link}
              className="text-white text-[14px] uppercase border-b border-transparent hover:border-white font-semi-bold py-3 transition-all duration-300 hover:translate-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.title}
            </a>
          ))}
        </nav>
      </div>

      {/* HERO CONTENT */}
      <div
        className={`w-full flex-1 flex flex-col items-center justify-center transition-opacity duration-300 ${
          isMenuOpen ? "lg:opacity-100 opacity-90" : "opacity-100"
        }`}
      >
        <span className="uppercase font-600 md:text-[50px] text-[50px] mt-5 mb-4 z-[100]">
          Comfort
        </span>
        <span className="uppercase text-center text-[21px] md:tracking-[5px] tracking-[3px] z-[100] font-[200] md:mt-[-20px] pl-5 pr-5 pb-9 pt-4">
          classi spells class and comfort
        </span>
        <button className="uppercase border-2 border-white rounded-4px cursor-pointer w-[175px] h-[56px] text-center md:mt-[80px] mt-[30px] z-[100] transition-transform duration-300 hover:scale-120 hover:shadow-lg hover:shadow-white/30">
          shop now
        </button>
      </div>
    </div>
  );
};

export default Header;
