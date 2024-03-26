import React from "react";

const ProjectInfo = ({ price, handover, payment }) => {
  return (
  <div className="w-full bg-royal text-white mb-32 pt-24 pb-32">
        <h1 className="text-center font-bold text-5xl mb-16">PROJECT INFORMATION</h1>
      <div className="w-11/12 max-w-[1400px] m-auto flex lg:justify-between text-center ">
      <div className=" py-3 mt-11 ">
        <h3 className="text-white text-2xl">Starting Price</h3>
        <h2 className="font-bold text-6xl border-y-2 border-white pb-4 pt-2 mt-4">AED {price}</h2>
      </div>
      <div className=" py-3 mt-11 ">
        <h3 className="text-white text-2xl">Handover</h3>
        <h2 className="font-bold text-6xl border-y-2 border-white pb-4 pt-2 mt-4">AED {handover}</h2>
      </div>
      <div className=" py-3 mt-11 ">
        <h3 className="text-white text-2xl">Payment Plan</h3>
        <h2 className="font-bold text-6xl border-y-2 border-white pb-4 pt-2 mt-4">AED {payment}</h2>
      </div>
    </div>
  </div>
  );
};

export default ProjectInfo;
