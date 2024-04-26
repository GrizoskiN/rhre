import Image from "next/image";
import { motion } from "framer-motion";
import sobha from "@/../public/img/sobha1.jpg";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
const SecondSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.2, // Trigger the animation when 20% of the element is in view
  });
  return (
    <div className="w-11/12 max-w-[1400px] m-auto py-16 xl:py-32" >
      <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.6 }}
        className="lg:flex justify-between items-end"
      >
        <motion.h1
         ref={ref}
         initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl mb-3 xl:mb-0 lg:text-6xl font-bold xl:w-1/2"
        >
          Your Trusted Real Estate Advisors
        </motion.h1>
        <motion.p
         ref={ref}
         initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="xl:w-1/3 text-lg"
        >
          A cutting-edge real estate agency that offers a seamless and immersive
          experience for finding your dream home in the heart of the city
        </motion.p>
      </motion.div>

      <motion.div
       ref={ref}
       initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-8 lg:mt-24 lg:flex gap-5"
      >
        <div className="grid grid-cols-1 lg:w-1/2 gap-2 lg:gap-5 ">
          {/* <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-xl pl-5 py-4"
          >
            <h1 className="text-5xl md:text-8xl font-bold">4k</h1>
            <p className="text-md md:text-xl">Project Completed</p>
          </motion.div> */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-royal text-white rounded-xl pl-5 py-4"
          >
            <h1 className="text-5xl   font-bold">Countless</h1>
            <p className="text-md md:text-xl">Happy Customers</p>
          </motion.div> */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className=" bg-royal/20 rounded-xl  py-4 flex flex-col items-center justify-center"
          >
            <h1 className="text-5xl md:text-8xl font-bold">15</h1>
            <p className="text-md md:text-xl">Years Of Rich Experience</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#f2f3f5] rounded-xl  py-4 flex flex-col items-center justify-center"
          >
            <h1 className="text-5xl md:text-8xl font-bold">150+</h1>
            <p className="text-md md:text-xl">Delighted Customers</p>
          </motion.div>
         
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-royal/10 mt-2 lg:mt-0 lg:w-1/2 h-full md:flex p-5 rounded-xl gap-5"
        >
          <div className="flex flex-col items-start justify-between">
            <motion.p
             ref={ref}
             initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl font-[500]"
            >
              We have witnessed the ever-evolving landscape of the real estate
              market and become a trusted partner by thousands of clients
            </motion.p>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-royal rounded-full my-5 w-11 lg:w-24 h-11 lg:h-24 flex items-center justify-center text-white text-xl lg:text-5xl leading-tight"
            >
              <Link href="/about">↗️</Link>
            </motion.div>
          </div>
          <Image src={sobha} width={500} alt="Rise High Real Estate - Sobha, Dubai, Apartments in Dubai, UAE" className="rounded-xl" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SecondSection;
