import Image from "next/image";
import React from "react";

const ProjectInfo = ({ price, handover, payment,qr }) => {
  return (
  <div className="w-11/12 m-auto  text-royal  lg:my-32 pt-24 py-32">
        <h1 className="text-center font-bold text-4xl lg:text-5xl mb-16">PROJECT INFORMATION</h1>
      <div className="max-w-[1400px] m-auto grid md:grid-cols-3 md:gap-11 items-center text-center ">
      <div className=" py-3 lg:mt-5 ">
        <h3 className="text-gray-500 text-2xl">Starting Price</h3>
        <h2 className="font-bold text-4xl lg:text-5xl xl:text-6xl border-y-[1px] lg:border-y-2 border-royal pb-4 pt-2 mt-4">AED {price}</h2>
      </div>
      <div className=" py-3 lg:mt-5 ">
        <h3 className="text-gray-500 text-2xl">Handover</h3>
        <h2 className="font-bold text-4xl lg:text-5xl xl:text-6xl border-y-[1px] lg:border-y-2 border-royal pb-4 pt-2 mt-4">{handover}</h2>
      </div>
      <div className=" py-3 lg:mt-5 ">
        <h3 className="text-gray-500 text-2xl">Payment Plan</h3>
        <h2 className="font-bold text-4xl lg:text-5xl xl:text-6xl border-y-[1px] lg:border-y-2 border-royal pb-4 pt-2 mt-4">{payment}</h2>
      </div>
    </div>
    <Image src={qr} width={200} alt={qr} className="max-w-2/3 m-auto mt-11"/>
  </div>
  );
};

export default ProjectInfo;
