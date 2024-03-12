import Image from "next/image";
import header from "@/../public/img/headers.webp";
import Link from "next/link";
const HeaderSection = () => {
  return (
    <>
      <div className="h-screen  overflow-hidden relative w-full text-white">
        <div className="flex flex-col text-left justify-center items-start max-w-[1400px] w-11/12 h-full m-auto">
          <h1 className=" text-5xl lg:text-7xl xl:text-[8rem] mt-24 font-bold">
            Making Your <br /> Dream <span className="font-light">Space</span>
          </h1>
          <p className="lg:w-1/2 xl:w-1/2 xl:text-2xl my-8">
            Welcome to our interior design agency! Our team of experienced
            designers and decorators is passionate about creating beautiful,
            functional spaces that enhance our client's lives.
          </p>
          <Link href="/" className="bg-white text-royal text-xl  px-9 py-2 xl:px-20 xl:py-3 rounded-lg pointer">Learn More</Link>
        </div>
        <div className="absolute -z-10 bg-royal/20 w-full h-full top-0 left-0"></div>
        <Image
          src={header}  objectFit="cover" layout="fill"
          className="absolute -z-20 w-full h-full inset-0 "
        />
      </div>
    </>
  );
};

export default HeaderSection;
