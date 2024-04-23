import {motion} from "framer-motion"
import Image from "next/image"
import Link from "next/link"
export default function NewsCarousel({menuRef, width, services }){
    return(
        <div ref={menuRef} className="flex mt-11 lg:mt-32 w-full ml-auto overflow-hidden">
        <motion.ul
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex gap-5 ml-4 lg:ml-16">
          {services.map(
            ({ id, text1, img, address, url}) => (
              <li
                key={id}
                className=" overflow-hidden cursor-pointer w-[17rem] md:w-[30rem] lg:w-[27rem]  group">
                <div className="pointer-events-none overflow-hidden ">
                  <div className="overflow-hidden  rounded-md lg:rounded-xl ">
                  <Image src={img}className="object-cover w-full  h-64 md:h-80  lg:h-auto group-hover:scale-125 transition-transform duration-300"/>
                  </div>
                  <div className=" rounded-xl mt-2 lg:mt-5 ">
                    <div className=" ">
                      <h1 className="font-bold text-xl lg:text-3xl">
                        {text1}
                      </h1>
                    <p className="lg:text-xl mb-5 lg:py-2 ">{address}</p>
                  </div>
                
                 </div>
                </div>
                     <Link href={url} className="text-red-500 underline text-xl ">Read More</Link>
              </li>
            ),
          )}
        </motion.ul>
      </div>
    )
}