import Image from "next/image";
import logologo from "@/../public/img/Logo.svg";
import rise from "@/../public/img/rise.svg";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="mt-16 bg-royal w-full 2xl:w-11/12 m-auto rounded-tr-[150px] lg:rounded-3xl text-white pt-6  pb-11">
      <div className="max-w-[1400px] m-auto w-11/12 md:w-2/3 lg:w-10/12 justify-between  lg:flex items-start gap-16 my-16">
        <div className="xl:flex flex-col  xl:items-start  gap-11 xl:w-1/3 ">
          <Image src={logologo} priority width={500} className="w-3/4 mb-6 lg:w-10/12 lg:mb-0" />
          <div>
            
            
            <p className="text-md font-light">
              Welcome to our REAL ESTATE agency! Our team of experienced
              designers and decorators is passionate about creating beautiful,
              functional spaces that enhance our clients' lives.
            </p>
          </div>
        </div>
      <div className="md:flex justify-between items-start md:mt-16 xl:w-1/2">
      <div className=" flex-col flex text-xl   lg:ml-auto my-11 md:my-0" >
          <h1 className="font-bold text-2xl  tracking-wider mb-6">Company</h1>
          <Link className="my-1 text-lg text-gray-300" href="/">About Us</Link>
          <Link className="my-1 text-lg text-gray-300" href="/">Services</Link>
          <Link className="my-1 text-lg text-gray-300" href="/">Projects</Link>
          <Link className="my-1 text-lg text-gray-300" href="/">News</Link>
          <Link className="my-1 text-lg text-gray-300" href="/contact">Get In Touch</Link>
        </div>
        <div className="lg:ml-auto">
        <h1 className="font-bold text-2xl  tracking-wider mb-6">Information</h1>
          <h3 className="text-lg  my-1 font-light">A M H Al Shaikh Bldg
Al Khabeesi, Deira
Dubai</h3>
          <h3 className="text-lg  my-1 font-light">00971 52999 2763</h3>
          <h3 className="text-lg  my-1 font-light">info@risehighrealestate.ae</h3>
        </div>
      </div>
      </div>
      <div className="max-w-[1400px] items-end m-auto w-11/12 md:w-2/3 xl:w-10/12 lg:flex justify-between ">
        <div className="flex-col flex md:flex-row gap-4 md:justify-center">
            <a href="/" className="text-sm  text-center  font-light border-[1px] border-white px-9 py-3">Facebook</a>
            <a href="/" className="text-sm  text-center  font-light border-[1px] border-white px-9 py-3">Instagram</a>
            <a href="/" className="text-sm  text-center  font-light border-[1px] border-white px-9 py-3">LinkedIn</a>
        </div>
        <div>
            <h2 className="text-center lg:text-left mt-11 lg:mt-0">©️ Copyright 2024, All Right reserved</h2>
        </div>
      </div>
      <div className="text-center text-red-500 mt-5 lg:mt-16">
        <a href="https://gobro.studio" target="_">Developed by <span>GoBro Studio</span></a>
      </div>
    </div>
  );
};

export default Footer;
