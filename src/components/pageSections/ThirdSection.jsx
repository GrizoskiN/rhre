import Image from "next/image";
import { motion } from "framer-motion";
import rhre1 from "@/../public/img/rhre1.jpg";
import rhre2 from "@/../public/img/rhre5.jpg";
import rhre3 from "@/../public/img/rhre6.jpg";
import rhre from "@/../public/img/rhre.jpg";
import { useInView } from "react-intersection-observer";

const ThirdSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.2, // Trigger the animation when 20% of the element is in view
  });

  return (
    <motion.div ref={ref} className="w-11/12 max-w-[1400px] m-auto">
      <div className="lg:flex justify-between items-end gap-11">
        <motion.h1       
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6 }} className="text-4xl lg:text-5xl mb-3 xl:mb-0 font-bold xl:w-1/2">
          Discover Your Perfect Property Match
        </motion.h1 >
        <motion.p     
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6 }} className="xl:w-1/3 text-lg">
          Embark on a journey of discovery through an exclusive collection of
          homes, luxury properties to fulfill your aspirations and inspire your
          imagination
        </motion.p> 
      </div>
      <div className="flex flex-col md:flex-row mt-8 xl:mt-16 2xl:mt-32 gap-3 xl:gap-5  ">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 80 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 relative group cursor-pointer overflow-hidden"
        >
          {/* <div className="absolute z-10 bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300"></div> */}
          <Image
            src={rhre1}
            width={1500}
            className="w-full  rounded-2xl group-hover:scale-125 transition-all duration-500"
          />
        </motion.div>
        <motion.div       ref={ref}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 80 }}
          transition={{ duration: 0.6 }} className="md:w-1/2 grid ">
          <div className="group overflow-hidden cursor-pointer order-2 md:order-1">
            <Image src={rhre} width={1500} className="w-full rounded-2xl group-hover:scale-125 transition-all duration-500" />
          </div>
          <div className="grid grid-cols-2 md:mt-3 mb-3 gap-3 md:gap-3 md:order-2">
            <div className="group overflow-hidden  w-full cursor-pointer ">
              <Image src={rhre2} width={1500} className="w-full rounded-2xl group-hover:scale-125 transition-all duration-500" />
            </div>
            <div className="group overflow-hidden w-full cursor-pointer">
              <Image src={rhre3} width={1500} className="w-full rounded-2xl group-hover:scale-125 transition-all duration-500" />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ThirdSection;
