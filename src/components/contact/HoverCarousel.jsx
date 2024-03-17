import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
export default function HoverCarousel({
  menuRef,
  width,
  services,
  contact,
  info,
  text1,
  img,
  address,
}) {
  return (
    <div
      ref={menuRef}
      className={`flex mt-11 lg:mt-32 ${contact ? "w-2/3 ml-auto": ""} overflow-hidden`}>
      <motion.ul
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="flex gap-5 ">
        {services.map(
          ({
            id,
            text1,
            img,
            address,
            address2,
            area,
            baths,
            rooms,
            
          
          }) => (
            <li
              key={id}
              className={` overflow-hidden cursor-pointer ${contact ? "rounded-xl" : ""}  group `}>
              <div className={`pointer-events-none ${contact ? "w-80 lg:w-[32rem]" : "w-80 lg:w-[556px] lg:h-[632px] "}  relative  `}>
                <div className={`${contact ? "bg-gray-200" : "bg-transparent"} rounded-xl p-5 absolute  left-[5%] right-[5%] opacity-0 group-hover:opacity-100 z-20 -bottom-32 group-hover:bottom-5 transition-all duration-500`}>
                  <div className="lg:flex justify-between items-center text-center ">
                    <h1 className={`uppercase text-white ${contact ? "bg-royal px-5 py-2 " : "bg-transparent"} font-bold text-2xl`}>
                      {text1}
                    </h1>
                    <div className="hidden lg:flex items-center">
                      {contact && <span className="bg-royal w-9 h-9 rounded-full text-white flex items-center justify-center text-center mr-5">
                        ↗
                      </span>}
                      <h2 className="text-center font-semibold text-2xl leading-5">
                        {contact} <br />
                        <span className="font-light text-lg">{info}</span>
                      </h2>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <div className="hidden lg:flex lg:flex-col">
                      <h3 className="font-bold text-2xl">{address}</h3>
                      <h4 className={`${contact ? "text-royal" : "text-white text-xl"}`}>{address2}</h4>
                    </div>
                   {contact && <div className="flex justify-evenly lg:justify-between items-center w-full lg:w-1/2 text-center">
                      <div>
                        <p className="font-bold text-2xl">{area}</p>
                        <p className="">m2</p>
                      </div>
                      <div className="border-x-[1px] border-royal px-6 lg:px-2">
                        <p className="font-bold text-2xl">{rooms}</p>
                        <p className="">Bedrooms</p>
                      </div>
                      <div>
                        <p className="font-bold text-2xl">{baths}</p>
                        <p className="">Baths</p>
                      </div>
                    </div>}
                  </div>
                </div>
                <Image
                  src={img}
                  className=" w-full object-cover group-hover:scale-125 transition-transform duration-700"
                />
              </div>
            </li>
          ),
        )}
      </motion.ul>
    </div>
  );
}
