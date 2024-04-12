import Image from "next/image";
import logo from "@/../public/img/Logo.svg";
import logodark from "@/../public/img/Logodark.svg";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const Menu = (props) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const about = router.pathname === "/about";
  const listings = router.pathname === "/properties";
  const newProjects = router.pathname === "/newProjects";
  const properties = router.pathname === "/properties/[id]";
  const menuOpen = (
    <svg
      className="fill-royal  w-6"
      width="240"
      height="146"
      viewBox="0 0 240 146"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect
        x="23"
        width="217"
        height="22"
        rx="11"
        fill={`${
          about || listings || newProjects || properties ? "royal" : "white"
        }`}
      />
      <rect
        y="62"
        width="217"
        height="22"
        rx="11"
        fill={`${
          about || listings || newProjects || properties ? "royal" : "white"
        }`}
      />
      <rect
        x="23"
        y="124"
        width="217"
        height="22"
        rx="11"
        fill={`${
          about || listings || newProjects || properties ? "royal" : "white"
        }`}
      />
    </svg>
  );

  const menuClosed = (
    <svg
      className={`w-6`}
      width="170"
      height="170"
      viewBox="0 0 170 170"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect
        x="16"
        y="1"
        width="217"
        height="22"
        rx="11"
        transform="rotate(45 16 1)"
        fill="white"
      />
      <rect
        y="154"
        width="217"
        height="22"
        rx="11"
        transform="rotate(-45 0 154)"
        fill="white"
      />
    </svg>
  );
  const handleMenu = () => {
    props.handleMenus(setOpen(!open));
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleMenuHover = () => {
    if (window.innerWidth >= 1024) {
      setIsOpen(true);
    }
  };

  const handleMenuLeave = () => {
    if (window.innerWidth >= 1024) {
      setIsOpen(false);
      setIsSubMenuOpen(false);
    }
  };

  const handleSubMenuHover = () => {
    setIsSubMenuOpen(true);
  };

  const handleSubMenuLeave = () => {
    setIsSubMenuOpen(false);
  };
  const handleClick = () => {
    if (window.innerWidth < 1024) {
      setIsOpen(!isOpen);
    }
  };
  return (
    <>
      <div className="hidden text-white max-w-[1400px] w-11/12 absolute top-5 left-1/2 -translate-x-1/2 lg:flex justify-between items-center z-20">
        <Link href="/">
          <Image
            src={
              about || listings || newProjects || properties ? logodark : logo
            }
            priority
            width={150}
            className="bg-fit hover:scale-[105%] transition-transform duration-300"
          />
        </Link>
        <div
          className={`flex items-center  font-[400] mt-4 text-lg ${
            about || listings || newProjects || properties
              ? "text-royal"
              : "text-white"
          }`}>
          <Link
            href="/properties"
            className="lg:mx-5  hover:text-gray-300 transition-all duration-300">
            Available now
          </Link>
          <div
            className="relative"
            onMouseEnter={handleMenuHover}
            onMouseLeave={handleMenuLeave}>
            <Link
              href="/"
              className="lg:mx-5  hover:text-gray-300 transition-all duration-300">
              New Projects
            </Link>
            {isOpen && (
              <div
                className="absolute top-full left-1 w-80 py-2 px-4 backdrop-blur-sm "
                onMouseEnter={handleSubMenuHover}
                onMouseLeave={handleSubMenuLeave}>
                {/* Add your submenu items here */}
                <Link href="/damac" className="flex py-1  hover:text-gray-300">
                  Damac New Projects
                </Link>
                <Link
                  href="/ellington"
                  className="flex py-1  hover:text-gray-300">
                  Ellington New Projects
                </Link>
                <Link href="/meraas" className="flex py-1  hover:text-gray-300">
                  Meraas New Projects
                </Link>
                <Link
                  href="/nakheel"
                  className="flex py-1  hover:text-gray-300">
                  Nakheel New Projects
                </Link>
                <Link href="/emaar" className="flex py-1  hover:text-gray-300">
                  Emaar New Projects
                </Link>
                <Link href="/sobha" className="flex py-1  hover:text-gray-300">
                  Sobha New Projects
                </Link>
              </div>
            )}
          </div>
          <Link
            href="/"
            className="lg:mx-5  hover:text-gray-300 transition-all duration-300">
            News
          </Link>
          <Link
            href="/about"
            className="lg:mx-5  hover:text-gray-300 transition-all duration-300">
            About Us
          </Link>
          <Link
            href="/contact"
            className={`lg:mx-5   px-7 py-2 ${
              about || listings || newProjects || properties
                ? "bg-royal text-white hover:bg-royal/90"
                : "bg-white text-royal hover:bg-royal/20 hover:text-white hover:border-royal"
            } rounded-md   transition-all duration-300`}>
            Get In Touch
          </Link>
        </div>
      </div>
      <div
        className={`MOBILE  lg:hidden absolute w-full m-auto top-0 left-1/2 -translate-x-1/2 z-40 `}>
        <div className=" m-auto w-11/12  flex justify-between items-start  relative z-50">
          <Link href="/">
            <Image
              src={
                about || listings || newProjects || properties ? logodark : logo
              }
              priority
              className="object-cover"
            />
          </Link>

          <span onClick={handleMenu} className="cursor-pointer ">
            {open ? menuClosed : menuOpen}
          </span>
        </div>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-royal/90 backdrop-blur-sm w-full fixed h-screen inset-0 z-40 text-white text-2xl pt-6">
            <div className="w-11/12 m-auto mt-32">
              <div
                onClick={handleMenu}
                className="border-b-[1px] py-3 border-white/20 w-full">
                <Link href="/about">About us</Link>
              </div>
              <div
                onClick={handleMenu}
                className="border-b-[1px] text-red-500 py-3 border-white/20 w-full">
                <Link href="/properties">Available Now!</Link>
              </div>

              <div className="relative border-b-[1px] py-3 border-white/20 w-full">
                <Link
                  href="/"
                  className="lg:mx-5   transition-all duration-300"
                  onClick={handleClick}>
                  New Projects
                </Link>
                {isOpen && (
                  <div className=" top-full left-0 font-light text-lg py-2 px-4">
                    {/* Add your menu items here */}
                    <Link onClick={handleMenu} href="/damac" className="flex py-1 ">
                      Damac New Projects
                    </Link>
                    <Link onClick={handleMenu} href="/ellington" className="flex py-1 ">
                      Ellington New Projects
                    </Link>
                    <Link onClick={handleMenu} href="/meraas" className="flex py-1 ">
                      Meraas New Projects
                    </Link>
                    <Link onClick={handleMenu} href="/nakheel" className="flex py-1 ">
                      Nakheel New Projects
                    </Link>
                    <Link onClick={handleMenu} href="/emaar" className="flex py-1 ">
                      Emaar New Projects
                    </Link>
                    <Link onClick={handleMenu} href="/sobha" className="flex py-1 ">
                      Sobha New Projects
                    </Link>
                  </div>
                )}
              </div>
              <div
                onClick={handleMenu}
                className="border-b-[1px] py-3 border-white/20 w-full">
                <Link href="/blog">Blog</Link>
              </div>
              <div
                onClick={handleMenu}
                className="border-b-[1px] py-3 border-white/20 w-full">
                <Link href="/contact">Contact</Link>
              </div>
            </div>
          </motion.div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Menu;
