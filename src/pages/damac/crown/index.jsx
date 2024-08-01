import Gallery from "@/components/Projects/Gallery";
import HeaderImage from "@/components/Projects/HeaderImage";
import Title from "@/components/Projects/Title";
import Image from "next/image";
import header from "@/../public/img/damac/crown/header.jpg";
import second from "@/../public/img/damac/crown/second.jpg";
import third from "@/../public/img/damac/crown/third.jpg";
import armaniqr from "@/../public/img/damac/qr/crownqr.jpg";
import Squares from "@/components/contact/Squares";
import Faq from "@/components/Projects/Faq";
import ContactForm from "@/components/contact/ContactForm";
import ProjectInfo from "@/components/Projects/ProjectInfo";
import DownloadBrochureBtn from "@/components/Projects/DownloadBrochureBtn";
import Head from "next/head";

export default function Index() {
  const photos = [
    {
      src: "/img/damac/crown/gallery/5.jpg",
      alt: "Image 1",
      width: 600,
      height: 800,
    },
    {
      src: "/img/damac/crown/gallery/2.jpg",
      alt: "Image 2",
      width: 800,
      height: 520,
    },
    {
      src: "/img/damac/crown/gallery/3.jpg",
      alt: "Image 1",
      width: 800,
      height: 520,
    },
    {
      src: "/img/damac/crown/gallery/1.jpg",
      alt: "Image 2",
      width: 800,
      height: 520,
    },
    {
      src: "/img/damac/crown/gallery/4.jpg",
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
    <title>Damac Properties - Canal Crown | RHRE | Dubai, UAE</title>
    <meta name="description" content="Rise High Real Estate - Your trusted partner for buying, selling, and leasing properties in Dubai, UAE. Explore luxury apartments, townhouses, and villas with us." />
    </Head>
      <HeaderImage
        header={header}
        company={"DAMAC"}
        project={"Canal Crown"}
        text={
          "A multiple award-winning giant in an incredible Dubai marina location"
        }
        price={"1.12M"}
      />
      <Title
        title={"Unparalleled living experience."}
        // subtitle={"Dubai Marina"}
        paragraph={
          "Indulge in a whole new world of entertainment and relaxation with space-themed amenities that are simply out of this world. Discover the magic of Canal Crown today – schedule a viewing and elevate your lifestyle to new heights. Don’t miss out on this exclusive opportunity to experience the ultimate waterfront living"
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
        title={"TRANQUIL WATERFRONT"}
      //  subtitle={"INFINITE POSSIBILITIES"}
        paragraph={
          "Let the canal be the perfect backdrop for the architectural spectacle that is your home, dazzling with a crown that sparkles in the sunlight and shines brightly in the night sky"
        }
      />
      <Gallery photos={photos} />
      <div className="relative ">
        <div className="absolute top-32 2xl:top-[35%] right-0 z-10 text-white text-right font-light mr-[5%] 2xl:mr-48">
          <h1 className=" text-4xl lg:text-6xl lg:leading-[4rem] ">
          LEAVE SPACE FOR INDULGENCE
          </h1>
          <p className="w-10/12 md:w-2/4  lg:text-xl mt-6 ml-auto ">
          A breathtaking promenade beckons you with a dazzling array of culinary delights and a carefully curated collection of retail brands
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
      
      <ProjectInfo price={"1.12M"} handover={2027} payment={"60/40"} qr={armaniqr} bedrooms="4 Bedrooms"/>
     

      <Squares />
      <Faq />

      <div className="w-full xl:w-2/3 m-auto">
        <ContactForm />
      </div>
    </>
  );
}
