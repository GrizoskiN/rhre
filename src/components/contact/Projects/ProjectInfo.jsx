import React from "react";

const ProjectInfo = ({ price, handover, payment }) => {
  return (
  <div className="w-full  text-royal  lg:my-32 pt-24 py-32">
        <h1 className="text-center font-bold text-2xl lg:text-5xl mb-16">PROJECT INFORMATION</h1>
      <div className="w-11/12 max-w-[1400px] m-auto flex flex-col lg:flex-row lg:justify-between text-center ">
      <div className=" py-3 mt-11 ">
        <h3 className="text-gray-500 text-2xl">Starting Price</h3>
        <h2 className="font-bold text-4xl lg:text-5xl xl:text-6xl border-y-[1px] lg:border-y-2 border-royal pb-4 pt-2 mt-4">AED {price}</h2>
      </div>
      <div className=" py-3 mt-11 ">
        <h3 className="text-gray-500 text-2xl">Handover</h3>
        <h2 className="font-bold text-4xl lg:text-5xl xl:text-6xl border-y-[1px] lg:border-y-2 border-royal pb-4 pt-2 mt-4">AED {handover}</h2>
      </div>
      <div className=" py-3 mt-11 ">
        <h3 className="text-gray-500 text-2xl">Payment Plan</h3>
        <h2 className="font-bold text-4xl lg:text-5xl xl:text-6xl border-y-[1px] lg:border-y-2 border-royal pb-4 pt-2 mt-4">AED {payment}</h2>
      </div>
    </div>
  </div>
  );
};

export default ProjectInfo;