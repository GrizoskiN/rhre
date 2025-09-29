import Gallery from "@/components/Projects/Gallery";
import HeaderImage from "@/components/Projects/HeaderImage";
import Title from "@/components/Projects/Title";
import Image from "next/image";
import header from "@/../public/img/danube/breez/header.webp";
import second from "@/../public/img/danube/breez/second.webp";
import third from "@/../public/img/danube/breez/third.webp";
import fourth from "@/../public/img/danube/breez/fourth.webp";
import bayzqr from "@/../public/img/danube/qr/bayzqr.jpg";
import Squares from "@/components/contact/Squares";
import Faq from "@/components/Projects/Faq";
import ContactForm from "@/components/contact/ContactForm";
import ProjectInfo from "@/components/Projects/ProjectInfo";
import DownloadBrochureBtn from "@/components/Projects/DownloadBrochureBtn";
import Head from "next/head";

export default function Index() {
  const photos = [
    {
      src: "/img/danube/breez/gallery/1.jpg",
      alt: "Image 1",
      width: 600,
      height: 800,
    },
    {
      src: "/img/danube/breez/gallery/5.jpg",
      alt: "Image 2",
      width: 800,
      height: 520,
    },
    {
      src: "/img/danube/breez/gallery/3.jpg",
      alt: "Image 1",
      width: 800,
      height: 520,
    },
    {
      src: "/img/danube/breez/gallery/2.jpg",
      alt: "Image 2",
      width: 800,
      height: 520,
    },
    {
      src: "/img/danube/breez/gallery/4.jpg",
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
    <title>Danube Properties - Breez | RHRE | Dubai, UAE</title>
    <meta name="description" content="Rise High Real Estate - Your trusted partner for buying, selling, and leasing properties in Dubai, UAE. Explore luxury apartments, townhouses, and villas with us." />
    </Head>
      <HeaderImage
        header={header}
        company={"Danube"}
        project={"Breez"}
        text={
          "WHERE ARRIVAL ITSELF IS AN EXPERIENCE"
        }
        price={"1.3M"}
      />
      <Title
        title={"BEYOND LIVING"}
        subtitle={"EXPERIENCING LIFE"}
        paragraph={
          "Claydon House embodies a timeless artform           of opulence, serenity, and holistic living           through its impressive architectural vision,           meticulously crafted residences, and top-tier           amenities"
        }
      />
      {/* <Icons /> */}
      <Image
        src={second}
        width={2000}
        className="w-full h-[25rem] md:h-auto object-cover"
      />
      <Title
        title={`WHERE LUXURY 
        MEETS LIFESTYLE`}
        // subtitle={"INFINITE POSSIBILITIES"}
        paragraph={`Discover a world where luxury meets sophistication, 
        where every detail is meticulously crafted to elevate 
        your lifestyle`}
      />
      <Gallery photos={photos} />
      <div className="relative ">
        <div className="absolute top-32 2xl:top-[35%] right-0 z-10 text-white text-right font-light mr-[5%] 2xl:mr-48">
          <h1 className=" text-3xl lg:text-6xl lg:leading-[4rem] ">
            The Art of Waterfront living
          </h1>
          <p className="w-10/12 md:w-2/4 2xl:w-3/5  lg:text-2xl mt-6 ml-auto italic ">
             perfected
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
      <ProjectInfo
        price={"1.3M"}
        handover={"March 2029"}
        payment={"70/30"}
        qr={bayzqr}
      />
      <Image
        src={fourth}
        width={2000}
        className="w-full h-[25rem] md:h-auto object-cover"
      />

      <Squares  />
      <Faq />

      <div className="w-full xl:w-2/3 m-auto">
        <ContactForm />
      </div>
    </>
  );
}
