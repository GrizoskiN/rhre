import Image from "next/image";
import { motion } from "framer-motion";
import img from "@/../public/img/contact.webp";
import { useInView } from "react-intersection-observer";

const SixthSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.2, // Trigger the animation when 80% of the element is in view
  });
  return (
    <div className="w-full   m-auto py-16 p-4 lg:py-16 lg:p-11 mt-32 bg-royal/80  relative overflow-hidden">
      <h1 className="text-4xl text-center text-white mb-11 xl:mb-16 lg:text-6xl font-bold  ">
        Our Services
      </h1>
      <div className="lg:flex gap-5 lg:py-16 max-w-[1400px] m-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl px-4 py-9 lg:p-9 hover:bg-royal cursor-pointer hover:text-white lg:hover:-mt-3 transition-all duration-300">
          <h1 className="font-semibold text-6xl">01</h1>
          <div className="mt-11 lg:mt-24">
            <h1 className="font-bold text-4xl lg:text-5xl mb-5 leading-10 ">
              <span className="text-red-500">BUYING</span> A PROPERTY
            </h1>
            <p className="text-xl font-light">
              Looking to buy a property in Dubai? Our agency offers a wide
              selection of luxury apartments, townhouses, villas and plots. Our
              experienced agents will assist you every step of the way, from
              property selection to closing the deal.
            </p>
          </div>
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 40 }}
          transition={{ duration: 0.6 }}
          className="bg-white my-4 lg:my-0 rounded-xl p-9 hover:bg-royal cursor-pointer hover:text-white lg:hover:-mt-3 transition-all duration-300">
          <h1 className="font-semibold text-6xl">02</h1>
          <div className="mt-11 lg:mt-24">
            <h1 className="font-bold text-4xl lg:text-5xl mb-5 leading-10 ">
              <span className="text-red-500">SELLING</span> A PROPERTY
            </h1>
            <p className="text-xl font-light">
              Ready to sell your property in Dubai? Our team of professionals
              will help you market your property effectively to reach potential
              buyers. We'll handle the negotiations and paperwork, ensuring a
              smooth selling process.
            </p>
          </div>
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 60 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl p-9 hover:bg-royal cursor-pointer hover:text-white lg:hover:-mt-3 transition-all duration-300">
          <h1 className="font-semibold text-6xl">03</h1>
          <div className="mt-11 lg:mt-24">
            <h1 className="font-bold text-4xl lg:text-5xl mb-5 leading-10 ">
              <span className="text-red-500">LEASING</span> A PROPERTY
            </h1>
            <p className="text-xl font-light">
              Need a place to rent in Dubai? We have a diverse portfolio of
              rental properties, including apartments, villas, and commercial
              spaces. Our team will help you find the perfect rental that fits
              your budget and lifestyle.
            </p>
          </div>
        </motion.div>
      </div>
      <Image
        src={img}
        width={1000}
        className=" absolute bottom-0  left-0 object-center -z-10 w-full"
      />
    </div>
  );
};

export default SixthSection;
