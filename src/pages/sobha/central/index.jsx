import Gallery from "@/components/Projects/Gallery";
import HeaderImage from "@/components/Projects/HeaderImage";
import Title from "@/components/Projects/Title";
import Image from "next/image";
import header from "@/../public/img/sobha/central/header.webp";
import second from "@/../public/img/sobha/central/second.webp";
import third from "@/../public/img/sobha/central/third.webp";
import fourth from "@/../public/img/sobha/central/fourth.webp";
// import oneqr from "@/../public/img/sobha/qr/centralqr.jpg";
import Squares from "@/components/contact/Squares";
import Faq from "@/components/Projects/Faq";
import ContactForm from "@/components/contact/ContactForm";
import ProjectInfo from "@/components/Projects/ProjectInfo";
import DownloadBrochureBtn from "@/components/Projects/DownloadBrochureBtn";
import Head from "next/head";

export default function Index() {
  const photos = [
    {
      src: "/img/sobha/central/gallery/5.webp",
      alt: "Image 1",
      width: 600,
      height: 800,
    },
    {
      src: "/img/sobha/central/gallery/2.webp",
      alt: "Image 2",
      width: 800,
      height: 520,
    },
    {
      src: "/img/sobha/central/gallery/3.webp",
      alt: "Image 1",
      width: 800,
      height: 520,
    },
    {
      src: "/img/sobha/central/gallery/1.jpg",
      alt: "Image 2",
      width: 800,
      height: 520,
    },
    {
      src: "/img/sobha/central/gallery/4.jpg",
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
    <title>Sobha Realty - Central | RHRE | Dubai, UAE</title>
    <meta name="description" content="Rise High Real Estate - Your trusted partner for buying, selling, and leasing properties in Dubai, UAE. Explore luxury apartments, townhouses, and villas with us." />
    </Head>
      <HeaderImage
        header={header}
        company={"Sobha"}
        project={"Central"}
        text={
          "Escape the ordinary and step into a new chapter of living where every detail is crafted for your delight"
        }
        price={"1.3M"}
      />
      <Title
        title={"Sobha Central "}
        subtitle={"WHERE IT ALL CONNECTS"}
        paragraph={
          "Sobha Central is a landmark residential community rising on Sheikh Zayed Road, Dubai’s most iconic corridor. This architectural giant unites six sleek and elegant towers around lush, elevated parks, a tech-powered retail mall, along with a dedicated oce space, and curated lifestyle amenities"
        }
      />
      {/* <Icons /> */}
      <Image
        src={second}
        width={2000}
        className="w-full h-[25rem] md:h-auto object-cover"
      />
      <Title
        title={"UNTOUCHED. UNDISCOVERED. UNRIVALLED."}
        // subtitle={"INFINITE POSSIBILITIES"}
        paragraph={
          " Located just 50 minutes from Dubai, 30 minutes from Sharjah, and 10 minutes from Al Marjan Island, Sobha Siniya Island is a haven that is both accessible and secluded. Experience a life where luxury meets nature, and every day is an exquisite retreat."
        }
      />
      <Gallery photos={photos} />
      <div className="relative ">
        <div className="absolute top-32 2xl:top-[35%] right-0 z-10 text-white text-right font-light mr-[5%] 2xl:mr-48">
          <h1 className=" text-md w-10/12 md:w-2/3 md:text-2xl ml-auto lg:w-2/4  lg:text-2xl  uppercase">
          STEP INTO A WORLD OF REFINED ELEGANCE, WHERE EVERY DETAIL IS DESIGNED FOR SOPHISTICATION AND COMFORT
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
        price={"1.3M"}
        handover={"March 2029"}
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
