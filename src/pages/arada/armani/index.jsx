import Gallery from "@/components/Projects/Gallery";
import HeaderImage from "@/components/Projects/HeaderImage";
import Title from "@/components/Projects/Title";
import Image from "next/image";
import header from "@/../public/img/arada/header.jpg";
import second from "@/../public/img/arada/second.jpg";
import third from "@/../public/img/arada/third.jpg";

import Squares from "@/components/contact/Squares";
import Faq from "@/components/Projects/Faq";
import ContactForm from "@/components/contact/ContactForm";
import ProjectInfo from "@/components/Projects/ProjectInfo";
import DownloadBrochureBtn from "@/components/Projects/DownloadBrochureBtn";

export default function Index() {
  const photos = [
    {
      src: "/img/arada/gallery/5.jpg",
      alt: "Image 1",
      width: 600,
      height: 800,
    },
    {
      src: "/img/arada/gallery/2.jpg",
      alt: "Image 2",
      width: 800,
      height: 520,
    },
    {
      src: "/img/arada/gallery/3.jpg",
      alt: "Image 1",
      width: 800,
      height: 520,
    },
    {
      src: "/img/arada/gallery/1.jpg",
      alt: "Image 2",
      width: 800,
      height: 520,
    },
    {
      src: "/img/arada/gallery/4.jpg",
      alt: "Image 2",
      width: 800,
      height: 517,
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
        header={header}
        company={"Arada"}
        project={"Armani Beach"}
        text={
          "Enjoying sweeping, panoramic views of the Arabian Gulf as well as Dubai’s famed skyline, Armani Beach Residences at Palm Jumeirah is designed to achieve harmony between architecture, the surrounding seascape and the senses."
        }
        price={"23M"}
      />
      <Title
        title={"Armani Beach Residences"}
        // subtitle={"Discover a world of timeless elegance"}
        paragraph={
          "The magnificent elevated entry experience sets the tone, providing residents with extravagant ocean views from a range of angles. Throughout the building, the interplay of light and shadow amplifies a series of stylish design elements, including the overhanging arch and the many water features and pools."
        }
      />
      {/* <Icons /> */}
      <Image
        src={second}
        width={2000}
        className="w-full h-[25rem] md:h-auto object-cover"
      />
      <Title
        title={"TIMELESS ELEGANCE"}
        // subtitle={"INFINITE POSSIBILITIES"}
        paragraph={
          "Since 2004, the Armani/Casa Interior Design Studio has provided complete interior design services to private individuals and property developers, from the conceptual phase under the artistic direction of Giorgio Armani, through to the management of construction."
        }
      />
      <Gallery photos={photos} />
      <div className="relative ">
        <div className="absolute top-32 2xl:top-[35%] right-0 z-10 text-white text-right font-light mr-[5%] 2xl:mr-48">
          {/* <h1 className=" text-4xl lg:text-6xl lg:leading-[4rem] ">
            COMMUNITY LAGOON
          </h1> */}
          <p className="w-10/12 md:w-2/4 2xl:w-2/5  lg:text-xl mt-6 ml-auto ">
          Enjoying sweeping, panoramic views of the Arabian Gulf as well as Dubai’s famed skyline, Armani Beach Residences at Palm Jumeirah is designed to achieve harmony between architecture, the surrounding seascape and the senses.
          </p>
          <DownloadBrochureBtn />
        </div>

        <Image
          src={third}
          width={1000}
          quality={100}
          className="w-full h-[45rem] md:h-auto object-cover"
        />
      </div>
      <ProjectInfo price={"23M"} handover={2026} payment={"60/40"} />
     

      <Squares />
      <Faq />

      <div className="w-full lg:w-2/3 m-auto">
        <ContactForm />
      </div>
    </>
  );
}
