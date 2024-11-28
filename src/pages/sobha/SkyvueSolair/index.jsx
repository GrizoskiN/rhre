import Gallery from "@/components/Projects/Gallery";
import HeaderImage from "@/components/Projects/HeaderImage";
import Title from "@/components/Projects/Title";
import Image from "next/image";
import header from "@/../public/img/sobha/solair/header.jpg";
import second from "@/../public/img/sobha/solair/second.jpg";
import third from "@/../public/img/sobha/solair/third.jpg";
import fourth from "@/../public/img/sobha/solair/fourth.jpg";
// import oneqr from "@/../public/img/sobha/qr/solairqr.jpg";
import Squares from "@/components/contact/Squares";
import Faq from "@/components/Projects/Faq";
import ContactForm from "@/components/contact/ContactForm";
import ProjectInfo from "@/components/Projects/ProjectInfo";
import DownloadBrochureBtn from "@/components/Projects/DownloadBrochureBtn";
import Head from "next/head";

export default function Index() {
  const photos = [
    {
      src: "/img/sobha/solair/gallery/5.jpg",
      alt: "Image 1",
      width: 600,
      height: 800,
    },
    {
      src: "/img/sobha/solair/gallery/2.jpg",
      alt: "Image 2",
      width: 800,
      height: 520,
    },
    {
      src: "/img/sobha/solair/gallery/3.jpg",
      alt: "Image 1",
      width: 800,
      height: 520,
    },
    {
      src: "/img/sobha/solair/gallery/1.jpg",
      alt: "Image 2",
      width: 800,
      height: 520,
    },
    {
      src: "/img/sobha/solair/gallery/4.jpg",
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
    <title>Sobha Realty - Elwood | RHRE | Dubai, UAE</title>
    <meta name="description" content="Rise High Real Estate - Your trusted partner for buying, selling, and leasing properties in Dubai, UAE. Explore luxury apartments, townhouses, and villas with us." />
    </Head>
      <HeaderImage
        header={header}
        company={"Sobha"}
        project={"Skyvue Solair"}
        text={
          "Taking opulence to the next level, whilst staying centered"
        }
        price={"1.29M"}
      />
      <Title
        title={" Skyvue Solair"}
        subtitle={"DISCOVER"}
        paragraph={
          "Skyvue Solair, a true masterpiece, is the first tower in the prestigious Skyvue cluster, symbolizing the start of endless possibilities. Offering a selection of 1, 1.5, and 2 bedroom residences, it presents an unparalleled living experience with exceptional amenities in a seamlessly connected environment. Nestled in the heart of Sobha Hartland II, this iconic 58-story tower features residences with stunning views of the lagoon and the Dubai skyline, crafted to suit the most refined tastes."
        }
      />
      {/* <Icons /> */}
      <Image
        src={second}
        width={2000}
        className="w-full h-[25rem] md:h-auto object-cover"
      />
      <Title
        title={"DESIGNED FOR EVERY PASSION"}
        // subtitle={"INFINITE POSSIBILITIES"}
        paragraph={
          "As luxury evolves, so does the art of living. Skyvue Solair redefines opulence, offering timeless elegance and unmatched grandeur. Centered around a stunning amphitheatre that adapts to shifting water levels, this vibrant community features exquisite dining, open-air theatres, BBQ areas, sensory gardens, and a scenic cycle path."
        }
      />
      <Gallery photos={photos} />
      <div className="relative ">
        <div className="absolute top-32 2xl:top-[35%] right-0 z-10 text-white text-right font-light mr-[5%] 2xl:mr-48">
          <h1 className=" text-md w-10/12 md:w-2/3 md:text-2xl ml-auto lg:w-2/4  lg:text-4xl  uppercase">
          With thoughtfully crafted spaces and boundless experiences, every day offers new opportunities to embrace life at its fullest.
          </h1>
       
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
        price={"1.29M"}
        handover={"Q1 2029"}
        payment={"60/40"}
        // qr={oneqr}
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
