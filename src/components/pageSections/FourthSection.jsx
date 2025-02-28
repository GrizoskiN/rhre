import Image from "next/image";
import dubai from "@/../public/img/dubai.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const FourthSection = () => {
  const email = (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_26_11059)">
        <path
          d="M11.6633 9.74707L10.1558 11.2597C9.54443 11.8732 8.46879 11.8864 7.84424 11.2597L6.33663 9.74707L0.922009 15.1793C1.12356 15.2725 1.34578 15.3281 1.58203 15.3281H16.418C16.6542 15.3281 16.8764 15.2725 17.0779 15.1793L11.6633 9.74707Z"
          fill="white"
        />
        <path
          d="M16.418 2.67188H1.58203C1.34578 2.67188 1.12356 2.72749 0.922077 2.82069L6.70799 8.6258C6.70837 8.62618 6.70883 8.62625 6.70922 8.62664C6.7096 8.62703 6.70967 8.62755 6.70967 8.62755L8.59099 10.5151C8.79082 10.7149 9.20925 10.7149 9.40908 10.5151L11.29 8.62787C11.29 8.62787 11.2905 8.62703 11.2909 8.62664C11.2909 8.62664 11.2917 8.62618 11.2921 8.6258L17.0779 2.82066C16.8764 2.72742 16.6542 2.67188 16.418 2.67188Z"
          fill="white"
        />
        <path
          d="M0.168258 3.55835C0.0639844 3.76922 0 4.00329 0 4.25402V13.7462C0 13.9969 0.0639141 14.231 0.168223 14.4419L5.59223 9.00029L0.168258 3.55835Z"
          fill="white"
        />
        <path
          d="M17.8317 3.55811L12.4078 9.00012L17.8317 14.4418C17.936 14.2309 18 13.9968 18 13.746V4.25385C18 4.00304 17.936 3.76897 17.8317 3.55811Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_26_11059">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
  const phone = (
    <svg
      width="14"
      height="13"
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.7944 10.5022C12.529 11.2516 11.4757 11.8731 10.6356 12.0546C10.0609 12.177 9.31012 12.2746 6.78287 11.2269C3.55025 9.88763 1.4685 6.60275 1.30625 6.38962C1.15088 6.1765 0 4.65025 0 3.07175C0 1.49325 0.801625 0.724625 1.12475 0.394625C1.39013 0.12375 1.82875 0 2.2495 0C2.38562 0 2.508 0.00687509 2.618 0.0123751C2.94113 0.0261251 3.10337 0.0453754 3.3165 0.5555C3.58187 1.19488 4.22812 2.77338 4.30512 2.93563C4.3835 3.09788 4.46188 3.31788 4.35188 3.531C4.24875 3.751 4.158 3.84862 3.99575 4.03562C3.8335 4.22262 3.6795 4.36562 3.51725 4.56638C3.36875 4.741 3.201 4.928 3.388 5.25113C3.575 5.56738 4.22125 6.622 5.17275 7.469C6.40062 8.56212 7.39612 8.91138 7.75225 9.05988C8.01762 9.16988 8.33387 9.14375 8.52775 8.9375C8.77387 8.67213 9.07775 8.23213 9.38713 7.799C9.60712 7.48825 9.88488 7.44975 10.1764 7.55975C10.4734 7.66287 12.045 8.43975 12.3681 8.60062C12.6912 8.76287 12.9044 8.83988 12.9827 8.976C13.0597 9.11213 13.0597 9.7515 12.7944 10.5022Z"
        fill="#FAFAFA"
      />
    </svg>
  );
  const whatsapp = (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.33114 17.5269L2.37219 17.4045L2.29622 17.3002C1.00776 15.5308 0.25 13.3517 0.25 11C0.25 5.07151 5.07026 0.25 10.9973 0.25H11.0027C16.9297 0.25 21.75 5.07287 21.75 11C21.75 16.9271 16.9297 21.75 11.0027 21.75C8.81613 21.75 6.78906 21.0997 5.08944 19.9738L4.98947 19.9076L4.87525 19.9441L1.11724 21.1455L2.33114 17.5269Z"
        stroke="white"
        strokeWidth="0.5"
      />
      <path
        d="M17.4034 15.5335C17.138 16.2829 16.0848 16.9044 15.2446 17.0859C14.6699 17.2083 13.9191 17.3059 11.3919 16.2581C8.15926 14.9189 6.07751 11.634 5.91526 11.4209C5.75988 11.2077 4.60901 9.6815 4.60901 8.103C4.60901 6.5245 5.41063 5.75588 5.73376 5.42588C5.99913 5.155 6.43776 5.03125 6.85851 5.03125C6.99463 5.03125 7.11701 5.03813 7.22701 5.04363C7.55013 5.05738 7.71238 5.07663 7.92551 5.58675C8.19088 6.22613 8.83713 7.80463 8.91413 7.96688C8.99251 8.12913 9.07088 8.34913 8.96088 8.56225C8.85776 8.78225 8.76701 8.87987 8.60476 9.06687C8.44251 9.25387 8.28851 9.39687 8.12626 9.59763C7.97776 9.77225 7.81001 9.95925 7.99701 10.2824C8.18401 10.5986 8.83026 11.6532 9.78176 12.5002C11.0096 13.5934 12.0051 13.9426 12.3613 14.0911C12.6266 14.2011 12.9429 14.175 13.1368 13.9688C13.3829 13.7034 13.6868 13.2634 13.9961 12.8303C14.2161 12.5195 14.4939 12.481 14.7854 12.591C15.0824 12.6941 16.654 13.471 16.9771 13.6319C17.3003 13.7941 17.5134 13.8711 17.5918 14.0073C17.6688 14.1434 17.6688 14.7828 17.4034 15.5335Z"
        fill="#FAFAFA"
      />
    </svg>
  );
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.2, // Trigger the animation when 20% of the element is in view
  });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 40 }}
      transition={{ duration: 0.6 }}
      className="bg-royal  relative py-11 lg:py-32 w-11/12 m-auto rounded-3xl  my-11 lg:my-32 ">
      <motion.h1  ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 40 }}
      transition={{ duration: 0.6 }} className="text-center text-2xl md:text-3xl xl:text-4xl uppercase font-bold text-white w-10/12 xl:w-1/3 mx-auto">
        The <span className="text-[#FF4747]">big w’s</span> in property hunting for investment
      </motion.h1>
      {/* <div className="hidden text-white md:flex w-2/3 lg:w-2/5 xl:w-1/4 m-auto items-center justify-between mt-6  lg:mt-16 text-xl">
        <motion.a href="mailto:info@risehighrealestate.ae" ref={ref}
      initial={{ opacity: 0, y: 160 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 160}}
      transition={{ duration: 0.6 }} className="flex  items-center hover:text-red-500 transition-color duration-300">
          <span className="mr-3">{email}</span> Email Us
        </motion.a>
        <motion.a href="tel:+971529992763" ref={ref}
      initial={{ opacity: 0, y: 160 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 160}}
      transition={{ duration: 0.6 }} className="flex  items-center hover:text-red-500 transition-color duration-300">
          <span className="mr-3">{phone}</span>Call Us
        </motion.a>
        <motion.a  href="https://wa.me/971529992763" ref={ref}
      initial={{ opacity: 0, y: 160 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 160}}
      transition={{ duration: 0.6 }} className="flex  items-center hover:text-red-500 transition-color duration-300">
          <span className="mr-3 ">{whatsapp}</span>WhatsApp
        </motion.a>
      </div> */}
      {/* <div className="relative lg:w-2/3 m-auto">
        <span className="absolute bg-white opacity-80 w-5 h-5 md:w-8 md:h-8 rounded-full top-32 left-[20%] z-10 animate-bounce "></span>
        <span className="absolute bg-white opacity-60 w-5 h-5 md:w-8 md:h-8 rounded-full top-16 left-[45%] z-0 animate-bounce "></span>
        <span className="absolute bg-white opacity-60 w-5 h-5 md:w-8 md:h-8 rounded-full top-[40%] left-[65%] z-0 animate-bounce "></span>
        <span className="absolute bg-white opacity-60 w-5 h-5 md:w-8 md:h-8 rounded-full top-[33%] left-[40%] z-0 animate-bounce "></span>
        <span className="absolute bg-white opacity-60 w-5 h-5 md:w-8 md:h-8 rounded-full top-[23%] left-[35%] z-0 animate-bounce "></span>
        <span className="absolute bg-white opacity-60 w-5 h-5 md:w-8 md:h-8 rounded-full top-[63%] left-[45%] z-0 animate-bounce "></span>
        <span className="absolute bg-white opacity-60 w-5 h-5 md:w-8 md:h-8 rounded-full top-[73%] left-[85%] z-0 animate-bounce "></span>
        <span className="absolute bg-white opacity-60 w-5 h-5 md:w-8 md:h-8 rounded-full top-[53%] left-[65%] z-0 animate-bounce "></span>
        <span className="absolute bg-white opacity-60 w-5 h-5 md:w-8 md:h-8 rounded-full top-[57%] left-[35%] z-0 animate-bounce "></span>
        <Image src={dubai} width={1000} className="w-full  " />
      </div> */}
      <div className="grid w-10/12  xl:w-2/3 m-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-11 xl:mt-24">
        {/* Section 1 */}
        <div ref={ref}    initial={{ opacity: 0, y: 120 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 40 }}
      transition={{ duration: 0.6 }} className="bg-white text-royal text-left py-6 xl:py-11 px-6 rounded-lg">
          <h3 className="text-3xl font-medium text-royal mb-4"> 01</h3>
          <h3 className="text-3xl font-bold uppercase mb-8"> <span className="text-[#FF4747]">WHEN</span> DO YOU BUY PROPERTY?</h3>
          <p className="text-royal font-light"> 
            <span className="font-bold">Pro Tip:</span> There couldn’t be a better time than now.
          </p>
        </div>
        <div ref={ref}    initial={{ opacity: 0, y: 120 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 40 }}
      transition={{ duration: 0.6 }} className="bg-white text-royal text-left py-6 xl:py-11 px-6 rounded-lg">
          <h3 className="text-3xl font-medium text-royal mb-4"> 02</h3>
          <h3 className="text-3xl font-bold uppercase mb-8"> <span className="text-[#FF4747]">WHERE</span>  do you buy property?</h3>
          <p className="text-royal font-light"> 
            <span className="font-bold">Pro Tip:</span> Choose location which has an established community.
          </p>
        </div>
        <div ref={ref}    initial={{ opacity: 0, y: 120 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 40 }}
      transition={{ duration: 0.6 }} className="bg-white text-royal text-left py-6 xl:py-11 px-6 rounded-lg">
          <h3 className="text-3xl font-medium text-royal mb-4"> 03</h3>
          <h3 className="text-3xl font-bold uppercase mb-8"> <span className="text-[#FF4747]">WHY</span> DO YOU BUY PROPERTY?</h3>
          <p className="text-royal font-light"> 
            <span className="font-bold">Pro Tip:</span>  Property is low risk investment that yields a good ROI.
          </p>
        </div>
        <div ref={ref}    initial={{ opacity: 0, y: 120 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 40 }}
      transition={{ duration: 0.6 }} className="bg-white text-royal text-left py-6 xl:py-11 px-6 rounded-lg">
          <h3 className="text-3xl font-medium text-royal mb-4"> 04</h3>
          <h3 className="text-3xl font-bold uppercase mb-8"> <span className="text-[#FF4747]">WHAT</span> property you’ll buy?</h3>
          <p className="text-royal font-light"> 
            <span className="font-bold">Pro Tip:</span>  Invest on property which has a strong potential investment.
          </p>
        </div>
        <div ref={ref}    initial={{ opacity: 0, y: 120 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 40 }}
      transition={{ duration: 0.6 }} className="bg-white text-royal text-left py-6 xl:py-11 px-6 rounded-lg">
          <h3 className="text-3xl font-medium text-royal mb-4"> 05</h3>
          <h3 className="text-3xl font-bold uppercase mb-8"> <span className="text-[#FF4747]">WHO</span> helps you buy property?</h3>
          <p className="text-royal font-light"> 
            <span className="font-bold">Pro Tip:</span> Choose someone who is expert in the market and service-oriented.
          </p>
        </div>
        <div ref={ref}    initial={{ opacity: 0, y: 120 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 40 }}
      transition={{ duration: 0.6 }} className="bg-white text-royal text-left py-6 xl:py-11 px-6 rounded-lg">
          <h3 className="text-3xl font-medium text-royal mb-4"> 06</h3>
          <h3 className="text-3xl font-bold uppercase mb-8"> <span className="text-[#FF4747]">WHOM</span> DO YOU BUY PROPERTY WITH?</h3>
          <p className="text-royal font-light"> 
            <span className="font-bold">Pro Tip:</span> Work with our trusted experts for seamless transactions and exclusive deals. Call us today!
          </p>
        </div>
        {/* Section 2 */}
      </div>
    </motion.div>
  );
};

export default FourthSection;
