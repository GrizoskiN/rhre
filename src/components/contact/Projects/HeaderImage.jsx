import Image from "next/image";
import Link from "next/link";

const HeaderImage = ({ header, link, company, project, text }) => {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="flex flex-col lg:flex-row w-11/12 max-w-[1400px] m-auto justify-evenly items-center lg:justify-between  lg:items-center h-full text-white">
        <div className="mt-16 md:text-center lg:text-left">
          <h2 className="font-light uppercase lg:-mb-6 text-3xl lg:text-5xl">{company}</h2>
          <h1 className="text-6xl md:text-9xl 2xl:text-[9rem] font-bold">{project}</h1>
          <p className="text-xl lg:w-3/4 font-light mt-3 ">{text}</p>
          <div className="mt-6 lg:mt-11 flex flex-col lg:flex-row text-center">
            <button className="text-xl bg-red-500 px-11 py-4 mb-6 lg:mb-0 rounded-lg hover:bg-royal transition-all duration-300">
              Download Brochure
            </button>
            <Link
              href="/contact"
              className="text-xl bg-white text-royal px-11 py-4 rounded-lg lg:ml-5  hover:bg-royal hover:text-white transition-all duration-300">
              Register Interest
            </Link>
          </div>
        </div>
        <div className="border-y-[1px] border-white py-3 ">
          <h3 className="text-gray-400 text-2xl">STARTING PRICE</h3>
          <h2 className="font-bold text-6xl ">AED 1.57M</h2>
        </div>
      </div>
      <Image
        src={header}
        width={3000}
        height="auto"
        quality={100}
        priority
        alt={header}
        className="w-full h-full object-cover absolute inset-0 -z-10"
      />
    </div>
  );
};

export default HeaderImage;
