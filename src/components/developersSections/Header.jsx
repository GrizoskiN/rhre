import Image from "next/image";


export default function Header({header, logo}) {
  return (
    <div>
      <div className="relative overflow-hidden">
        <div className="flex w-11/12 max-w-[1200px] m-auto justify-center items-center  my-60 ">
          <div >
            <Image className=" w-2/3 m-auto"
              src={logo}
              width={400}
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
