import Gallery from "@/components/Projects/Gallery";
import HeaderImage from "@/components/Projects/HeaderImage";
import Title from "@/components/Projects/Title";
import Image from "next/image";
import header from "@/../public/img/damac/lagoons/header.jpg";
import second from "@/../public/img/damac/lagoons/second.jpg";
import third from "@/../public/img/damac/lagoons/third.jpg";
import armaniqr from "@/../public/img/damac/qr/lagoonsqr.jpg";
import Squares from "@/components/contact/Squares";
import Faq from "@/components/Projects/Faq";
import ContactForm from "@/components/contact/ContactForm";
import ProjectInfo from "@/components/Projects/ProjectInfo";
import DownloadBrochureBtn from "@/components/Projects/DownloadBrochureBtn";
import Head from "next/head";

export default function Index() {
  const photos = [
    {
      src: "/img/damac/lagoons/gallery/5.jpg",
      alt: "Image 1",
      width: 600,
      height: 800,
    },
    {
      src: "/img/damac/lagoons/gallery/2.jpg",
      alt: "Image 2",
      width: 800,
      height: 520,
    },
    {
      src: "/img/damac/lagoons/gallery/3.jpg",
      alt: "Image 1",
      width: 800,
      height: 520,
    },
    {
      src: "/img/damac/lagoons/gallery/1.jpg",
      alt: "Image 2",
      width: 800,
      height: 520,
    },
    {
      src: "/img/damac/lagoons/gallery/4.jpg",
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
      <Head>
    <title>Damac Properties - Lagoons | RHRE | Dubai, UAE</title>
    <meta name="description" content="Rise High Real Estate - Your trusted partner for buying, selling, and leasing properties in Dubai, UAE. Explore luxury apartments, townhouses, and villas with us." />
    </Head>
      <HeaderImage
        header={header}
        company={"DAMAC"}
        project={"Lagoons - Malta"}
        text={
          "DAMAC Lagoons is a residential complex that spans 45 million sq.ft. It is divided into eight Mediterranean-inspired communities built around gorgeous man-made lagoons."
        }
        price={"3M"}
      />
      <Title
        title={"LAGOONS"}
        subtitle={"Why to choose us"}
        paragraph={
          "Welcome to the newest addition at Damac Lagoons by Damac Properties, where the first-ever apartment buildings in the Damac Lagoons Community are now unveiled. These buildings, known as Damac Lagoons Views, represent a continuation of the success story of the Damac Lagoon Villa community. "
        }
      />
      {/* <Icons /> */}
      <Image
        src={second}
        width={2000}
        quality={100}
        className="w-full h-[25rem] md:h-auto object-cover"
      />
      <Title
        title={"The Window To"}
       subtitle={"INFINITE POSSIBILITIES"}
        paragraph={
          "Nestled between Emirates Road (E611) and Sheikh Mohammed Bin Zayed Road (E311), this splendid waterfront neighborhood boasts an excellent location. With direct access to the city's main thoroughfares, Damac Lagoons offers a prime position just across from Damac Hills, ensuring seamless connectivity to the wider city."
        }
      />
      <Gallery photos={photos} />
      <div className="relative ">
        <div className="absolute top-32 2xl:top-[35%] right-0 z-10 text-white text-right font-light mr-[5%] 2xl:mr-48">
          <h1 className=" text-4xl lg:text-6xl lg:leading-[4rem] ">
          Luxury and Accessibility
          </h1>
          <p className="w-10/12 md:w-2/4  lg:text-xl mt-6 ml-auto ">
          Living in DAMAC Hills 2 is an experience like no other.
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
      
      <ProjectInfo price={"3M"} handover={2025} payment={"60/40"} qr={armaniqr} bedrooms="4 Bedrooms"/>
     

      <Squares />
      <Faq />

      <div className="w-full lg:w-2/3 m-auto">
        <ContactForm />
      </div>
    </>
  );
}
