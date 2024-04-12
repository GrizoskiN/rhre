import Image from "next/image";
import { motion } from "framer-motion";
import header from "@/../public/img/headers.webp";
import Link from "next/link";

const HeaderSection = () => {
  return (
    <>
      <div className="h-screen  overflow-hidden relative w-full text-white">
        <div className="flex flex-col text-center justify-center items-center max-w-[1400px] w-11/12 h-full m-auto">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl lg:text-7xl xl:text-8xl mt-24 font-light">
            Discover Your Dream Home<br />  <span className="font-bold uppercase">with Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 xl:w-1/2 xl:text-lg my-8">
          Explore a wide range of properties that suit your lifestyle and budget.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 110 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/sobha"className="bg-white text-royal text-lg  px-9 py-2 xl:px-14 xl:py-2 rounded-lg pointer">
               Learn More
            </Link>
          </motion.div>
        </div>
        <div className="absolute -z-10 bg-royal/20 w-full h-full top-0 left-0"></div>
        <Image
          src={header}
          className="absolute -z-20 w-full h-full inset-0 object-cover"
        />
      </div>
    </>
  );
};

export default HeaderSection;
