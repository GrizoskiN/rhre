import Image from "next/image";
import header from "@/../public/img/sobha/header.webp";
import sobhalogo from "@/../public/img/sobha/sobhalogo.png";
export default function index() {
  return (
    <div>
      <div className="relative overflow-hidden">
        <div className="flex w-11/12 max-w-[1400px] m-auto justify-center items-center  my-60 ">
          <div className=" text-center">
            <Image
              src={sobhalogo}
              width={500}
              alt="Sobha Logo, Rise High Real Estate"
            />
          </div>
        </div>
        <Image
          src={header}
          width={2000}
          height="auto"
          quality={80}
          priority
          className="w-full h-full object-cover absolute inset-0 -z-10"
        />
      </div>
    </div>
  );
}
