import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function IndexCarousel({
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
      className="flex mt-11 lg:mt-32 w-10/12 lg:w-full m-auto lg:ml-auto ">
      <motion.ul
        drag="x"  
        dragConstraints={{ right: 0, left: -width }}
        className="flex gap-5 ">
        {services.map(
          ({ id, text1, img, address, address2, logo, Projectlink }) => (
            <li
              key={id}
              className=" overflow-hidden cursor-pointer  rounded-xl   group ">
              <div className="  w-80  lg:w-[556px]    relative  ">
                <div className=" bg-gray-200  rounded-xl p-5 absolute bottom-4 left-[5%] right-[5%] lg:opacity-0 lg:group-hover:opacity-100 z-20 lg:-bottom-32 lg:group-hover:bottom-5 transition-all duration-500">
                  <div className="lg:flex justify-between items-center text-center ">
                    <h1 className="uppercase text-white  bg-royal px-5 py-2  font-bold lg:text-2xl">
                      {text1}
                    </h1>
                  <Image src={logo} width={130} height={30} quality={90} className="absolute right-4 bottom-3 lg:right-0 lg:bottom-0 w-24 object-cover  lg:relative lg:w-[130px] pt-1 mix-blend-exclusion "/>
                  </div>
                  <Link href={Projectlink} className="flex justify-between items-end mt-4">
                    <div className="hidden lg:flex lg:flex-col w-1/2">
                      <h4 className=" text-royal  text-xl">
                        {address2}
                      </h4>
                      <h3 className="font-bold text-royal text-4xl">{address}</h3>
                    </div>
                    <div  className="flex items-center justify-end text-right lg:w-1/2">
                    
                        <span className="bg-royal w-5 h-5 rounded-full text-white flex items-center justify-center text-center mr-3">
                          ↗
                        </span>
                     
                      <h2 className="text-center  text-xl leading-5">
                        Learn More <br />
                        {/* <span className="font-light text-xl">{info}</span> */}
                      </h2>
                    </div>
                  </Link>
                </div>
               
                <Image
                  src={img}
                  className="pointer-events-none w-full object-cover group-hover:scale-125 transition-transform duration-700"
                />
              </div>
            </li>
          ),
        )}
      </motion.ul>
    </div>
  );
}
