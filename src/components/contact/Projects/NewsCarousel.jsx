import {motion} from "framer-motion"
import Image from "next/image"
import Link from "next/link"
export default function NewsCarousel({menuRef, width, services, text1, img, address, }){
    return(
        <div ref={menuRef} className="flex mt-11 lg:mt-32 w-full ml-auto overflow-hidden">
        <motion.ul
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex gap-5 ml-16">
          {services.map(
            ({ id, text1, img, address}) => (
              <li
                key={id}
                className=" overflow-hidden cursor-pointer w-96 md:w-[30rem] lg:w-[27rem]  group">
                <div className="pointer-events-none overflow-hidden ">
                  <div className="overflow-hidden  h-64 md:h-80  lg:h-auto rounded-xl ">
                  <Image src={img}className="w-full  group-hover:scale-125 transition-transform duration-300"/>
                  </div>
                  <div className=" rounded-xl mt-5 ">
                    <div className=" ">
                      <h1 className="font-bold text-3xl">
                        {text1}
                      </h1>
                    <p className="text-xl py-2 ">{address}</p>
                    {address && <Link href="/" className="text-red-500 underline text-xl ">Read More</Link>}
                  </div>
                
                 </div>
                </div>
              </li>
            ),
          )}
        </motion.ul>
      </div>
    )
}