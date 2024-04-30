import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import blog3 from "@/../public/img/tourist.jpg";
import blog2 from "@/../public/img/visa.jpg";
import blog1 from "@/../public/img/gift.jpg";
import blog4 from "@/../public/img/airport.jpg";
import Image from "next/image";
import Link from "next/link";

import NewsCarousel from "@/components/contact/Projects/NewsCarousel";
const EightSection = () => {
  const services = [
    {
      id: 0,
      text1: "Dubai's 5-Year Multiple Entry Tourist Visa for Indians",
      address: "A Comprehensive Guide",
      img: blog2,
      url: "/blog/touristVisaForIndians",
    },
    {
      id: 1,
      text1: "Dubai's Golden Visa for Property Investors",
      address: "A Comprehensive Overview",
      img: blog3,
      url: "/blog/goldenVisa",
    },
    {
      id: 2,
      text1: "Can you Gift a property in UAE?",
      address: "Regulations and Fees",
      img: blog1,
      url: "/blog/giftingPropertyUAE",
    },
    {
      id: 3,
      text1: "All Dubai International Airport operations...",
      address: "m International will span 70 square-km",
      img: blog4,
      url: "/blog/dubaiAirport",
    },
 
  ];
  const [width, setWidth] = useState(null);

  const menuRef = useRef();

  useEffect(() => {
    setWidth(menuRef.current.scrollWidth - menuRef.current.offsetWidth);
  }, []);
  return (
    <div id="news" className="w-full text-white  ml-auto  py-11 overflow-hidden lg:flex bg-royal pb-32">
      <div className="w-11/12 lg:w-2/3  m-auto  ">
        <h1 className="text-4xl mb-3 xl:mb-0 lg:text-6xl font-bold lg:w-2/3 m-auto">
          Latest News
        </h1>
        <p className="lg:w-2/3 m-auto mt-5 text-xl">
          Here you can find the best articles that will help you and your
          business when it comes to investments in real estate!
        </p>
      </div>
      
      <NewsCarousel menuRef={menuRef} width={width} services={services} />
    </div>
  );
};

export default EightSection;
