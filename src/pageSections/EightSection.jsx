import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import blog3 from "@/../public/img/blog3.jpg";
import blog2 from "@/../public/img/blog2.jpg";
import blog1 from "@/../public/img/blog1.jpg";
import Image from "next/image";
import Link from "next/link";
const EightSection = () => {
  const services = [
    {
      id: 0,
      text1: "How to get a GOLDEN VISA?",
      address: "Here is what you need to know...",
      img: blog3,
    },
    {
        id: 1,
        text1: "Do you know builders?",
        address: "Why do I need an architect?",
        img: blog2,
      },
      {
        id: 2,
        text1: "Do you know builders?",
        address: "Why do I need an architect?",
        img: blog1,
      },
      {
        id: 3,
        text1: "Do you know builders?",
        address: "Why do I need an architect?",
        img: blog2,
      },
      {
        id: 4,
        text1: "Do you know builders?",
        address: "Why do I need an architect?",
        img: blog3,
      },
      {
        id: 5,
        text1: "Do you know builders?",
        address: "Why do I need an architect?",
        img: blog1,
      },
  
  ];
  const [width, setWidth] = useState(null);

  const menuRef = useRef();

  useEffect(() => {
    setWidth(menuRef.current.scrollWidth - menuRef.current.offsetWidth);
  }, []);
  return (
    <div className="w-full text-white  ml-auto  py-11 overflow-hidden lg:flex bg-royal pb-32">
      <div className="w-11/12 lg:w-2/3  m-auto  ">
        <h1 className="text-4xl mb-3 xl:mb-0 lg:text-6xl font-bold lg:w-2/3 m-auto">
          Latest News
        </h1>
       <p className="lg:w-2/3 m-auto mt-5 text-xl">Here you can find the best articles that will help you and your business when it comes to investments in real estate!</p>
      </div>
      <div ref={menuRef} className="flex mt-11 lg:mt-32 w-full ml-auto overflow-hidden">
        <motion.ul
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex gap-5 ">
          {services.map(
            ({ id, text1, img, address}) => (
              <li
                key={id}
                className=" overflow-hidden cursor-pointer w-96 lg:w-[27rem]  group">
                <div className="pointer-events-none overflow-hidden ">
                  <div className="overflow-hidden ">
                  <Image src={img}className="rounded-xl w-full group-hover:scale-125 transition-transform duration-300"/>
                  </div>
                  <div className=" rounded-xl mt-5 ">
                    <div className=" ">
                      <h1 className="font-bold text-3xl">
                        {text1}
                      </h1>
                    <p className="text-xl py-2 ">{address}</p>
                    <Link href="/" className="text-red-500 underline text-xl ">Read More</Link>
                  </div>
                
                 </div>
                </div>
              </li>
            ),
          )}
        </motion.ul>
      </div>
    </div>
  );
};

export default EightSection;
