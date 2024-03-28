import { useEffect, useState, useRef } from "react";
import Gallery from "@/components/contact/Projects/Gallery";
import HeaderImage from "@/components/contact/Projects/HeaderImage";
import img from "@/../public/img/damacimg/header.jpg";
import bedroom from "@/../public/img/damacimg/projects/lagoon.jpg";
import bedroom2 from "@/../public/img/damacimg/projects/hills.jpg";
import bedrooms from "@/../public/img/damacimg/projects/gris.jpg";
import Title from "@/components/contact/Projects/Title";
import Image from "next/image";
import damac2 from "@/../public/img/damacimg/second.jpg";
import comfort from "@/../public/img/damacimg/development.jpg";
import home from "@/../public/img/damacimg/home.jpg";
import Apartments from "@/components/contact/Projects/Apartments";
import Squares from "@/components/contact/Squares";
import Faq from "@/components/contact/Projects/Faq";
import ContactForm from "@/components/contact/ContactForm";


export default function index (){
  const photos = [
    {
      src: "/img/damacimg/gallery/damac5.jpg",
      alt: "Image 1",
      width: 600,
      height: 800,
    },
    {
      src: "/img/damacimg/gallery/damac2.jpg",
      alt: "Image 2",
      width: 800,
      height: 520,
    },
    {
      src: "/img/damacimg/gallery/damac3.jpg",
      alt: "Image 1",
      width: 800,
      height: 520,
    },
    {
      src: "/img/damacimg/gallery/damac1.jpg",
      alt: "Image 2",
      width: 800,
      height: 520,
    },
    {
      src: "/img/damacimg/gallery/damac4.jpg",
      alt: "Image 2",
      width: 800,
      height: 517,
    },
  ];
  const image = img;
  const clients = [
    {
      id: 0,
      name: "Damac Lagoons",
      area: "A new master community inspired by wonders of the Mediterranean",
      image: bedroom,
    },
    {
      id: 1,
      name: "Damac Hills",
      area: "Luxury villas, apartments and a hotel",
      image: bedroom2,
    },
    {
      id: 2,
      name: "Safa One de GRISOGONO",
      area: "Luxury and super luxury residences in Safa Park",
      image: bedrooms,
    },
  ];

  const benefits = [
    {
      id: 0,
      title: "Rental income",
      text: "Rent prices in Dubai have jumped by 28.5% in the past year alone. A quiet, family-friendly neighborhood with parks, schools, and shopping areas will always attract families, couples, and individuals looking to rent a studio or apartment for the long term. You can use a property management company to take care of all the maintenance and management. You just have to sit back and relax.",
    },
    {
      id: 1,
      title: "Resale after key delivery",
      text: "Rent prices in Dubai have jumped by 28.5% in the past year alone. A quiet, family-friendly neighborhood with parks, schools, and shopping areas will always attract families, couples, and individuals looking to rent a studio or apartment for the long term. You can use a property management company to take care of all the maintenance and management. You just have to sit back and relax.",
    },
    {
      id: 2,
      title: "Flip deal",
      text: "Rent prices in Dubai have jumped by 28.5% in the past year alone. A quiet, family-friendly neighborhood with parks, schools, and shopping areas will always attract families, couples, and individuals looking to rent a studio or apartment for the long term. You can use a property management company to take care of all the maintenance and management. You just have to sit back and relax.",
    },
    {
      id: 3,
      title: "Investment for living in Dubai",
      text: "Rent prices in Dubai have jumped by 28.5% in the past year alone. A quiet, family-friendly neighborhood with parks, schools, and shopping areas will always attract families, couples, and individuals looking to rent a studio or apartment for the long term. You can use a property management company to take care of all the maintenance and management. You just have to sit back and relax.",
    },
  ];


  


  return (
    <>
      <HeaderImage
        header={image}
        company={"Properties by"}
        project={"DAMAC"}
        text={
          "DAMAC Group established its property development division in 2002 with the establishment of DAMAC Properties, which has grown and expanded to be a globally recognized brand name around the world"
        }
        price={"480.000"}
      />
      <Title
        title={"DAMAC Properties"}
        subtitle={"LEGACY OF SUCCESS"}
        paragraph={
          "DAMAC Properties has been at the forefront of the Middle East’s luxury real estate market since 2002, delivering luxury residential, commercial and leisure properties across the region, including the UAE, Saudi Arabia, Qatar, Jordan, Lebanon, Maldives, Canada and the United Kingdom."
        }
      />

      <Image
        src={damac2}
        width={2000}
        className="w-full h-[25rem] md:h-auto object-cover"
      />
      <Title
        title={"The Window To"}
        subtitle={"INFINITE POSSIBILITIES"}
        paragraph={
          "Unlock the potential for lucrative returns with our exclusive investment offerings, where selected projects guarantee returns of up to 8%. What's more, with our flexible payment plans, including a 4% payment option, investing in your dream property has never been more accessible. "
        }
      />
      <Gallery photos={photos} />
      <div className="relative ">
        <div className="absolute top-32 2xl:top-[35%] right-0 z-10 text-white text-right font-light mr-[5%] 2xl:mr-48">
          <h1 className=" text-4xl lg:text-6xl lg:leading-[4rem] ">
            PROPERTY DEVELOPMENT <br /> Industry leading business
          </h1>
          <p className="w-10/12 md:w-2/4 2xl:w-2/5  lg:text-xl mt-6 ml-auto ">
            DAMAC Properties provides dream homes and unique living concepts to
            customers from all over the world, and strives to challenge the
            market by transforming living experiences in Dubai and beyond.
          </p>
          <button className="text-xl bg-red-500 px-11 py-4 mt-6 lg:mt-11 rounded-lg hover:bg-royal transition-all duration-300">
            Download Brochure
          </button>
        </div>
        <Image
          src={comfort}
          width={1000}
          quality={100}
          className="w-full h-[45rem] md:h-auto object-cover"
        />
      </div>
      <Apartments
        clients={clients}
        title={"DAMAC GROUP"}
        subtitle={"The premier luxury property developer in Dubai"}
      />
      <div className="relative ">
        <div className="absolute top-32 2xl:top-[35%] right-0 z-10 text-white text-right font-light mr-[5%] 2xl:mr-48">
          <h1 className=" text-3xl lg:text-6xl lg:leading-[4rem] ">
            WHERE NATURE AND HOME
            <br /> BLOOM IN RADIANCE
          </h1>

          <button className="text-xl bg-white text-royal px-11 py-4 mt-6 lg:mt-11 rounded-lg hover:bg-royal hover:text-white transition-all duration-300">
            Download Brochure
          </button>
        </div>
        <Image
          src={home}
          width={1000}
          quality={100}
          className="w-full h-[45rem] md:h-auto object-cover"
        />
      </div>
      {/* <div className="w-11/12 max-w-[1400px] mt-32 m-auto">
        <h3 className="text-2xl uppercase">Modern lifestyle</h3>
        <h1 className="text-4xl lg:text-6xl lg:leading-[4rem] lg:w-2/3 font-bold">
          What does the 360 Riverside Crescent project offer?
        </h1>
      </div> */}

      <Squares benefits={benefits} />
      <Faq  />
      {/* <div className="w-full m-auto my-32 flex items-center pl-48 pt-16 pb-32 bg-gray-200">
        <div><h1 className="text-4xl font-bold">AMMENITIES</h1><p className="">At Sobha Hartland II, amenities become necessities.</p></div>
      <NewsCarousel services={amenity} menuRef={menuRef} width={width} />
      </div> */}
       <div className="w-full lg:w-2/3 m-auto">
        <ContactForm />
      </div>
    </>
  );
};


