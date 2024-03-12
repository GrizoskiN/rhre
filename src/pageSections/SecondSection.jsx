import Image from "next/image";
import sobha from "@/../public/img/sobha1.jpg";
import Link from "next/link";

const SecondSection = () => {
  return (
    <div className="w-11/12 max-w-[1400px] m-auto py-16 xl:py-32">
      <div className=" lg:flex justify-between items-end">
        <h1 className="text-4xl mb-3 xl:mb-0 lg:text-6xl font-bold xl:w-1/2">
          Your Trusted Real Estate Advisors
        </h1>
        <p className="xl:w-1/3 text-lg">
          A cutting-edge real estate agency that offers a seamless and immersive
          experience for finding yor dream home in the heart of the city
        </p>
      </div>

      <div className="mt-8 lg:mt-24 lg:flex gap-5">
        <div className="grid grid-cols-2 lg:w-1/2 gap-5 ">
          <div className="bg-white rounded-xl pl-5 py-4">
            <h1 className="text-5xl md:text-8xl font-bold">4k</h1>
            <p className="text-md md:text-xl">Project Completed</p>
          </div>
          <div className="bg-royal rounded-xl pl-5 py-4 text-white">
            <h1 className="text-5xl md:text-8xl font-bold">3K</h1>
            <p className="text-md md:text-xl">Happy customers</p>
          </div>
          <div className="bg-[#E6E7E8] rounded-xl pl-5 py-4">
            <h1 className="text-5xl md:text-8xl font-bold">8</h1>
            <p className="text-md md:text-xl">Years Experiences</p>
          </div>
          <div className="bg-[#E6E7E8] rounded-xl pl-5 py-4">
            <h1 className="text-5xl md:text-8xl font-bold">24</h1>
            <p className="text-md md:text-xl">Awards Achievement</p>
          </div>
        </div>
        <div className="bg-royal/10 mt-5 lg:mt-0 lg:w-1/2 h-full md:flex p-5 rounded-xl gap-5">
          <div className="flex flex-col items-start justify-between">
            
            <p className="text-xl font-[500]">
              We have witnessed the ever-evolving landscape of the real estate
              market and become a trusted partner by thousands of clients
            </p>
            <Link href="/" className="bg-royal rounded-full my-5 w-11 lg:w-24 h-11 lg:h-24 flex items-center justify-center text-white text-xl lg:text-5xl leading-tight">↗️</Link>
          </div>
          <Image src={sobha} width={500} alt="Rise High Real Estate - Sobha, Dubai, Apartments in Dubai, UAE" className="rounded-xl"/>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
