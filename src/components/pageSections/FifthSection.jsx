import { useState, useRef, useEffect } from "react";
import sobha from "@/../public/img/developers/sobha.jpg";
import elwood from "@/../public/img/developers/elwood.jpg";
import solair from "@/../public/img/developers/solair.jpg";
import reserve from "@/../public/img/developers/reserve.jpg";
import verde from "@/../public/img/developers/verde.jpg";
import eleganz from "@/../public/img/developers/eleganz.jpg";
import sportz from "@/../public/img/developers/sportz.jpg";
import ellington from "@/../public/img/developers/ellington.jpg";
import danube from "@/../public/img/developers/danube.jpg";
import IndexCarousel from "../Projects/IndexCarousel";
import sobhalogo from "@/../public/img/sobha/sobhalogo.png";
import ellingtonlogo from "@/../public/img/ellington/ellingtonlogo.png";
import danubelogo from "@/../public/img/danube/danubelogo.png";

const FifthSection = () => {
  const services = [

    {
      id: 5,
      text1: `Elwood`,
      address: "AED 7.9M",
      address2: "Starting Price",
      logo: sobhalogo,
      img: elwood,
      Projectlink:"/sobha/elwood",
    },

    {
      id: 6,
      text1: `Skyvue Solair`,
      address: "AED 1.29M",
      address2: "Starting Price",
      logo: sobhalogo,
      img: solair,
      Projectlink:"/sobha/SkyvueSolair",
    },
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
      id: 0,
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
    {
      id: 6,
      text1: `Riverside Crescent`,
      address: "AED 1.6M",
      address2: "Starting Price",
      logo: sobhalogo,
      img: sobha,
      Projectlink: "/sobha/hartland2",
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
