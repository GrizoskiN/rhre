import Image from "next/image";
import { useState } from "react";

const Apartments = ({clients}) => {
//   const clients = [
//     { id: 0, name: "1 Bedroom", area: "496 – 848 SQ FT", image: general },
//     { id: 1, name: "1.5 Bedroom", area: "639 – 737 SQ FT", image: specialty },
//     { id: 2, name: "2 Bedroom", area: "944 – 1135 SQ FT", image: comm },
//   ];

  const [select, setSelect] = useState("");

  const handleClick = (id) => {
    setSelect(id);
  };
  return (
    <div className="w-11/12  max-w-[1400px] m-auto my-16 xl:my-32">
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold ">
      RIVERSIDE CRESCENT
      </h1>
     <p className="mb-6 text-2xl">Floorplans</p>
      <div className="flex lg:mt-32  m-auto justify-between items-center">
        <div className="w-full ">
          {clients.map(({ id, name, area }) => (
            <ul
              key={id}
              className="flex items-center transition-all duration-300 hover:duration-500 even:border-y-2 border-royal even:py-3 md:w-1/2 lg:w-1/3">
              {select === id }
              <li
                onMouseOver={() => handleClick(id)}
                className=" text-xl lg:text-3xl xl:text-3xl 2xl:text-3xl my-2 xl:my-5 hover:text-red-500 cursor-pointer transition-transform duration-300  ">
                {name}
                <p className="font-light text-xl">{area}</p>
              </li>
            </ul>
          ))}
        </div>
        <div className="hidden md:h-[20rem] lg:h-[30rem]  relative md:flex justify-center items-center w-full ">
          {clients.map(({ id, image }) => (
            <Image
              key={id}
              src={image}
              width={500}
              className={`${
                select == id ? "opacity-100" : "opacity-0"
              } object-cover h-full w-full absolute rounded-2xl inset-0 left-1/2 top-1/2 -translate-y-1/2  -translate-x-1/2 transition-all duration-300`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Apartments;
