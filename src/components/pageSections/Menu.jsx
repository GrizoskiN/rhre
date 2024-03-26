import Image from "next/image";
import logo from "@/../public/img/Logo.svg";
import logodark from "@/../public/img/Logodark.svg";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {useRouter} from "next/router";
const Menu = (props) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter()
  const about = router.pathname === "/about"
  const menuOpen = (
    <svg
      className="w-6"
      width="240"
      height="146"
      viewBox="0 0 240 146"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect x="23" width="217" height="22" rx="11" fill="white" />
      <rect y="62" width="217" height="22" rx="11" fill="white" />
      <rect x="23" y="124" width="217" height="22" rx="11" fill="white" />
    </svg>
  );

  const menuClosed = (
    <svg
      className="w-6"
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

  return (
    <>
      <div className="hidden text-white max-w-[1400px] w-11/12 absolute top-5 left-1/2 -translate-x-1/2 lg:flex justify-between items-center z-20">
        <Link href="/">
          <Image src={about ? logodark : logo} priority  width={200} className="bg-fit hover:scale-[105%] transition-transform duration-300" />
        </Link>
        <div className={`flex items-center uppercase font-[400] mt-4 text-lg ${about ? "text-royal" : "text-white"}`}>
          <Link href="/about" className="lg:mx-5  hover:tracking-wide hover:text-gray-300 transition-all duration-300">
            About Us
          </Link>
          <Link href="/" className="lg:mx-5  hover:tracking-wide hover:text-gray-300 transition-all duration-300">
            Services
          </Link>
          <Link href="/" className="lg:mx-5  hover:tracking-wide hover:text-gray-300 transition-all duration-300">
            Projects for sales
          </Link>
          <Link href="/" className="lg:mx-5  hover:tracking-wide hover:text-gray-300 transition-all duration-300">
            News
          </Link>
          <Link href="/contact" className={`lg:mx-5 border-[1px] px-11 py-3 ${about ? "bg-royal text-white hover:bg-royal/90": "hover:bg-royal hover:border-royal"} rounded-md   transition-all duration-300`}>
            Get In Touch
          </Link>
        </div>
      </div>
      <div className={`MOBILE  lg:hidden absolute w-full m-auto top-0 left-1/2 -translate-x-1/2 z-40 ${about ? "bg-royal" : ""}`}>
        <div className=" m-auto w-11/12  flex justify-between items-start  relative z-50">
          <Link href="/">
            {" "}
            <Image
              src={logo}
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
                className="border-b-[1px] py-3 border-white/20 w-full">
                <Link href="/about">Services</Link>
              </div>
              <div
                onClick={handleMenu}
                className="border-b-[1px] py-3 border-white/20 w-full">
                <Link href="/blog">Projects For Sale</Link>
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
              <div
                onClick={handleMenu}
                className="border-b-[1px] py-3 border-white/20 w-full">
                <Link href="/careers">Careers</Link>
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
