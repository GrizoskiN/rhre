import Gallery from "@/components/Projects/Gallery";
import HeaderImage from "@/components/Projects/HeaderImage";
import Title from "@/components/Projects/Title";
import Image from "next/image";
import header from "@/../public/img/danube/diamonz/header.jpg";
import second from "@/../public/img/danube/diamonz/Second.jpg";
import third from "@/../public/img/danube/diamonz/third.jpg";
import fourth from "@/../public/img/danube/diamonz/fourth.jpg";
import Squares from "@/components/contact/Squares";
import Faq from "@/components/Projects/Faq";
import ContactForm from "@/components/contact/ContactForm";
import ProjectInfo from "@/components/Projects/ProjectInfo";
import DownloadBrochureBtn from "@/components/Projects/DonwloadBrochureBtn";
import diamondzqr from "@/../public/img/danube/qr/diamondzqr.jpg"

export default function Index() {
  const photos = [
    {
      src: "/img/danube/diamonz/gallery/5.jpg",
      alt: "Image 1",
      width: 600,
      height: 800,
    },
    {
      src: "/img/danube/diamonz/gallery/2.jpg",
      alt: "Image 2",
      width: 800,
      height: 520,
    },
    {
      src: "/img/danube/diamonz/gallery/3.jpg",
      alt: "Image 1",
      width: 800,
      height: 520,
    },
    {
      src: "/img/danube/diamonz/gallery/1.jpg",
      alt: "Image 2",
      width: 800,
      height: 520,
    },
    {
      src: "/img/danube/diamonz/gallery/4.jpg",
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
        company={"Danube"}
        project={"Diamondz "}
        text={
          "DIAMONDZ by Danube embodies the essence of opulent living and a glittering lifestyle of perfection."
        }
        price={"1.1M"}
      />
      <Title
        title={"Diamondz By Danube"}
        subtitle={"Jumeirah Lake Towers, Dubai"}
        paragraph={`Danube Group has grown from a single store started in Deira, Dubai 28 years ago to one ofthe most trusted and household brands in the Middle-East. The multi-million-dollar group has been consistently increasing its global footprint and annual revenue supported by an ever-growing family of over 2,500. The Danube Group is head-quartered in Dubai andoperates in 9 countries across Middle-East & Asia. The group owns many award-winning business verticals. Danube Building Material is the No.1 building material company of the region offering more than 25,000 products under one roof.`}
      />
      {/* <Icons /> */}
      <Image
        src={second}
        width={1000}
        className="w-full h-[25rem] md:h-auto object-cover"
      />
      <Title
        title={`Why
        Diamondz?`}
        // subtitle={"INFINITE POSSIBILITIES"}
        paragraph={`As the architectural gem of Uptown, situated in Jumeirah Lake Towers, Dubai, DIAMONDZ is the crafted jewel of homeowners and investors. Taking inspiration from the ultimate symbol of perfection, DIAMONDZ by Danube embodies the essence of opulent living and a glittering lifestyle of perfection.`}
      />
      <Gallery photos={photos} />
      <div className="relative ">
        <div className="absolute top-32 2xl:top-[35%] right-0 z-10 text-white text-right font-light mr-[5%] 2xl:mr-48">
          {/* <h1 className=" text-4xl lg:text-6xl lg:leading-[4rem] ">
          ELEGANZ AT JVC
          </h1> */}
          <p className="w-10/12 md:w-2/4 2xl:w-2/5 text-3xl lg:text-5xl uppercase mt-6 ml-auto ">
            DIAMONDZ presents a realm of luxury that transcends ordinary living
          </p>
          <DownloadBrochureBtn/>
        </div>

        <Image
          src={third}
          width={1000}
          className="w-full h-[45rem] md:h-auto object-cover"
        />
      </div>
      <ProjectInfo price={"1.1M"} handover={"2027"} payment={"70/30"} qr={diamondzqr}/>
      <Image
        src={fourth}
        width={2000}
        className="w-full h-[25rem] md:h-auto object-cover"
      />

      <Squares benefits={benefits} />
      <Faq />

      <div className="w-full lg:w-2/3 m-auto">
        <ContactForm />
      </div>
    </>
  );
}
