import Image from "next/image";
import Link from "next/link";

const HeaderImage = ({ header, link, company, project, text, price }) => {
  return (
    <div className="relative overflow-hidden">
      <div className="flex flex-col lg:flex-row w-11/12 max-w-[1400px] m-auto justify-evenly items-center lg:justify-between  lg:items-center  text-white  my-60 2xl:my-80">
        <div className=" md:text-center lg:text-left">
          <h2 className="font-light uppercase  text-3xl lg:text-5xl">{company}</h2>
          <h1 className="text-7xl md:text-9xl  font-bold  ">{project}</h1>
          <p className=" md:text-xl lg:w-3/4 font-light mt-3 leading-5 md:leading-normal text-gray-200">{text}</p>
          <div className="mt-11 lg:mt-11 flex flex-col lg:flex-row text-center">
            <button className="text-lg bg-red-500 px-11 py-4 mb-6 lg:mb-0 rounded-lg hover:bg-royal transition-all duration-300">
              Download Brochure
            </button>
            <Link
              href="/contact"
              className="text-lg bg-white text-royal px-11 py-4 rounded-lg lg:ml-5  hover:bg-royal hover:text-white transition-all duration-300">
              Register Interest
            </Link>
          </div>
        </div>
        <div className="border-y-[1px] border-white py-3 mt-11 ">
          <h3 className="text-gray-400 text-2xl">STARTING PRICE</h3>
          <h2 className="font-bold text-6xl ">AED {price}</h2>
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
