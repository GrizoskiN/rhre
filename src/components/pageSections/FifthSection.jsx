import { useState, useRef, useEffect } from "react";
import sobha from "@/../public/img/developers/sobha.jpg";
import reserve from "@/../public/img/developers/reserve.jpg";
import verde from "@/../public/img/developers/verde.jpg";
import eleganz from "@/../public/img/developers/eleganz.jpg";
import sportz from "@/../public/img/developers/sportz.jpg";
import ellington from "@/../public/img/developers/ellington.jpg";
import danube from "@/../public/img/developers/danube.jpg";
import meraas from "@/../public/img/developers/meraas.jpg";
import damac from "@/../public/img/developers/damac.jpg";
import IndexCarousel from "../Projects/IndexCarousel";
import sobhalogo from "@/../public/img/sobha/sobhalogo.png";
import damaclogo from "@/../public/img/damacimg/damaclogo.png";
import ellingtonlogo from "@/../public/img/ellington/ellingtonlogo.png";
import danubelogo from "@/../public/img/danube/danubelogo.png";
import meraaslogo from "@/../public/img/meraas/meraaslogo.png";
const FifthSection = () => {
  const services = [
    {
      id: 0,
      text1: `Riverside Crescent`,
      address: "AED 1.6M",
      address2: "Starting Price",
      logo: sobhalogo,
      img: sobha,
      Projectlink: "/sobha/hartland2",
    },
    // {
    //   id: 5,
    //   text1: `Eleganz`,
    //   address: "AED 2.5M",
    //   address2: "Starting Price",
    //   logo: danubelogo,
    //   img: eleganz,
    //   Projectlink:"/danube/eleganz",
    // },
    {
      id: 1,
      text1: `Reserve`,
      address: "AED 9.3M",
      address2: "Starting Price",
      logo: sobhalogo,
      img: reserve,
      Projectlink: "/sobha/reserve",
    },
    {
      id: 6,
      text1: `One Riverpoint`,
      address: "AED 2.8M",
      address2: "Starting Price",
      logo: ellingtonlogo,
      img: ellington,
      Projectlink: "/ellington/oneriver",
    },
    {
      id: 2,
      text1: `Verde`,
      address: "AED 1.59M",
      address2: "Starting Price",
      logo: sobhalogo,
      img: verde,
      Projectlink: "/sobha/verde",
    },
    {
      id: 4,
      text1: `Sportz`,
      address: "AED 2.5M",
      address2: "Starting Price",
      logo: danubelogo,
      img: sportz,
      Projectlink: "/danube/sportz",
    },
    {
      id: 3,
      text1: `Bayz 101`,
      address: "AED 1.7M",
      address2: "Starting Price",
      logo: danubelogo,
      img: danube,
      Projectlink: "/danube/bayz",
    },
  ];
  const [width, setWidth] = useState(null);

  const menuRef = useRef();

  useEffect(() => {
    setWidth(menuRef.current.scrollWidth - menuRef.current.offsetWidth);
  }, []);
  return (
    <div id="projects" className="w-full m-auto  xl:py-11 overflow-hidden">
      <div className="w-11/12 max-w-[1400px] m-auto lg:flex justify-between items-end">
        <h1 className="text-4xl mb-3 xl:mb-0 lg:text-6xl font-bold xl:w-1/2">
          Discover Your Perfect Property Match
        </h1>
        <p className="xl:w-1/3 text-lg">
          Embark on a journey of discovery through exclusive collection of
          homes, luxury properties to fulfill your aspirations and inspire your
          imagination
        </p>
      </div>
      {/* <div ref={menuRef} className="flex mt-11 lg:mt-32 w-2/3 ml-auto ">
        <motion.ul
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex gap-5 ">
          {services.map(
            ({ id, text1, img, address, address2, area, baths, rooms }) => (
              <li
                key={id}
                className=" overflow-hidden cursor-pointer w-80 lg:w-[32rem] group ">
                <div className="pointer-events-none  relative  ">
                  <div className="bg-gray-200 rounded-xl p-5 absolute  left-[5%] right-[5%] opacity-0 group-hover:opacity-100 z-20 -bottom-32 group-hover:bottom-5 transition-all duration-500">
                    <div className="lg:flex justify-between items-center text-center ">
                      <h1 className="uppercase text-white bg-royal px-5 py-2 font-bold text-2xl">
                        {text1}
                      </h1>
                      <div className="hidden lg:flex items-center">
                        <span className="bg-royal w-9 h-9 rounded-full text-white flex items-center justify-center text-center mr-5">
                          ↗
                        </span>
                        <h2 className="text-center font-semibold text-2xl leading-5">
                          Contact Us <br />
                          <span className="font-light text-lg">
                            for more info
                          </span>
                        </h2>
                      </div>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                      <div className="hidden lg:flex lg:flex-col">
                        <h3 className="font-bold text-2xl">{address}</h3>
                        <h4 className="">{address2}</h4>
                      </div>
                      <div className="flex justify-evenly lg:justify-between items-center w-full lg:w-1/2 text-center">
                        <div>
                          <p className="font-bold text-2xl">{area}</p>
                          <p className="">m2</p>
                        </div>
                        <div className="border-x-[1px] border-royal px-6 lg:px-2">
                          <p className="font-bold text-2xl">{rooms}</p>
                          <p className="">Bedrooms</p>
                        </div>
                        <div>
                          <p className="font-bold text-2xl">{baths}</p>
                          <p className="">Baths</p>
                        </div>
                      </div>
                  </div>
                 </div>
                  <Image src={img}className="rounded-xl w-full group-hover:scale-125 transition-transform duration-700"/>
                </div>
              </li>
            ),
          )}
        </motion.ul>
      </div> */}
      <IndexCarousel
        menuRef={menuRef}
        width={width}
        services={services}
        contact={"Contact us"}
        info="for more info"
      />
    </div>
  );
};

export default FifthSection;
