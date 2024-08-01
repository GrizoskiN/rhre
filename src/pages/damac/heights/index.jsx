import Gallery from "@/components/Projects/Gallery";
import HeaderImage from "@/components/Projects/HeaderImage";
import Title from "@/components/Projects/Title";
import Image from "next/image";
import header from "@/../public/img/damac/heights/header.jpg";
import second from "@/../public/img/damac/heights/second.jpg";
import third from "@/../public/img/damac/heights/third.jpg";
import armaniqr from "@/../public/img/damac/qr/heightsqr.jpg";
import Squares from "@/components/contact/Squares";
import Faq from "@/components/Projects/Faq";
import ContactForm from "@/components/contact/ContactForm";
import ProjectInfo from "@/components/Projects/ProjectInfo";
import DownloadBrochureBtn from "@/components/Projects/DownloadBrochureBtn";
import Head from "next/head";

export default function Index() {
  const photos = [
    {
      src: "/img/damac/heights/gallery/5.jpg",
      alt: "Image 1",
      width: 600,
      height: 800,
    },
    {
      src: "/img/damac/heights/gallery/2.jpg",
      alt: "Image 2",
      width: 800,
      height: 520,
    },
    {
      src: "/img/damac/heights/gallery/3.jpg",
      alt: "Image 1",
      width: 800,
      height: 520,
    },
    {
      src: "/img/damac/heights/gallery/1.jpg",
      alt: "Image 2",
      width: 800,
      height: 520,
    },
    {
      src: "/img/damac/heights/gallery/4.jpg",
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
    <title>Damac Properties - Heights | RHRE | Dubai, UAE</title>
    <meta name="description" content="Rise High Real Estate - Your trusted partner for buying, selling, and leasing properties in Dubai, UAE. Explore luxury apartments, townhouses, and villas with us." />
    </Head>
      <HeaderImage
        header={header}
        company={"DAMAC"}
        project={"Canal Heights"}
        text={
          "A multiple award-winning giant in an incredible Dubai marina location"
        }
        price={"1.25M"}
      />
      <Title
        title={"Damac Heights"}
        subtitle={"Dubai Marina"}
        paragraph={
          "Among the many larger-than-life construction projects in Dubai, the residential tower of Damac Heights is the latest addition. It is located in Dubai Marina, the high-profile waterfront address on the Arabian Gulf shoreline. Towering at a total height of 1,099 feet, it is currently the 13th tallest building in Dubai and the fifteenth tallest in the Middle East.  "
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
        title={"Stunning Canal And Downtown Views"}
      //  subtitle={"INFINITE POSSIBILITIES"}
        paragraph={
          "You will be surrounded by other fashionable high-rises and close to everything in Dubai because you will be located in the active financial zone of Business Bay."
        }
      />
      <Gallery photos={photos} />
      <div className="relative ">
        <div className="absolute top-32 2xl:top-[35%] right-0 z-10 text-white text-right font-light mr-[5%] 2xl:mr-48">
          <h1 className=" text-4xl lg:text-6xl lg:leading-[4rem] ">
          Unique water feature amenities
          </h1>
          {/* <p className="w-10/12 md:w-2/4  lg:text-xl mt-6 ml-auto ">
          Living in DAMAC Hills 2 is an experience like no other.
          </p> */}
          <DownloadBrochureBtn />
        </div>

        <Image
          src={third}
          width={1000}
          quality={100}
          className="w-full h-[45rem] md:h-auto object-cover"
        />
      </div>
      
      <ProjectInfo price={"1.25M"} handover={2027} payment={"60/40"} qr={armaniqr} bedrooms="4 Bedrooms"/>
     

      <Squares />
      <Faq />

      <div className="w-full xl:w-2/3 m-auto">
        <ContactForm />
      </div>
    </>
  );
}
