import Gallery from "@/components/Projects/Gallery";
import HeaderImage from "@/components/Projects/HeaderImage";
import Title from "@/components/Projects/Title";
import Image from "next/image";
import header from "@/../public/img/emaar/oria/header.jpg";
import second from "@/../public/img/emaar/oria/second.jpg";
import third from "@/../public/img/emaar/oria/third.jpg";
import fourth from "@/../public/img/emaar/oria/fourth.jpg";
import oneqr from "@/../public/img/emaar/qr/oriaqr.jpg";
import Squares from "@/components/contact/Squares";
import Faq from "@/components/Projects/Faq";
import ContactForm from "@/components/contact/ContactForm";
import ProjectInfo from "@/components/Projects/ProjectInfo";
import DownloadBrochureBtn from "@/components/Projects/DownloadBrochureBtn";
import Head from "next/head";

export default function Index() {
  const photos = [
    {
      src: "/img/emaar/oria/gallery/5.jpg",
      alt: "Image 1",
      width: 600,
      height: 800,
    },
    {
      src: "/img/emaar/oria/gallery/2.jpg",
      alt: "Image 2",
      width: 800,
      height: 520,
    },
    {
      src: "/img/emaar/oria/gallery/3.jpg",
      alt: "Image 1",
      width: 800,
      height: 520,
    },
    {
      src: "/img/emaar/oria/gallery/1.jpg",
      alt: "Image 2",
      width: 800,
      height: 520,
    },
    {
      src: "/img/emaar/oria/gallery/4.jpg",
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
    <title>Emaar Properties - Bayview | RHRE | Dubai, UAE</title>
    <meta name="description" content="Rise High Real Estate - Your trusted partner for buying, selling, and leasing properties in Dubai, UAE. Explore luxury apartments, townhouses, and villas with us." />
    </Head>
      <HeaderImage
        header={header}
        company={"Emaar"}
        project={"Oria"}
        text={
          "Oria Emaar Dubai offers a selection of 1 to 3 Bedroom Apartments with timeless elegance and modern designs"
        }
        price={"1.6M"}
      />
      <Title
        title={"ORIA"}
        subtitle={"AT DUBAI CREEK HARBOUR"}
        paragraph={
          "Imagine waking up to the sunrise over Dubai’s iconic skyline, where modern design meets natural beauty. Located in the trendy Creek Beach district, Valo stands as a striking urban landmark, beautifully harmonising with the calming atmosphere of the waterfront and the lively pulse of Dubai’s heart."
        }
      />
      {/* <Icons /> */}
      <Image
        src={second}
        width={2000}
        className="w-full h-[25rem] md:h-auto object-cover"
      />
      <Title
        title={"Relax your mind and body"}
        // subtitle={"INFINITE POSSIBILITIES"}
        paragraph={
          " From dawn 'til dusk, Valo residents are treated to a visual feast. Located just next to the main plaza, Valo offers a blend of urban energy and peaceful nature. Living at Valo means having the city at your fingertips. From the enigmatic charm of Dubai Creek to the urban beaches and the city's bustling heart, you’re constantly plugged into the urban grid."
        }
      />
      <Gallery photos={photos} />
      <div className="relative ">
        <div className="absolute top-32 2xl:top-[35%] right-0 z-10 text-white text-right font-light mr-[5%] 2xl:mr-48">
          <h1 className=" text-4xl font-bold lg:text-6xl lg:leading-[4rem] ">
          Premium Beachfront
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
        price={"1.6M"}
        handover={"2028"}
        payment={"90/10"}
        qr={oneqr}
      />
      <Image
        src={fourth}
        width={2000}
        className="w-full h-[25rem] md:h-auto object-cover"
      />

      <Squares  />
      <Faq />

      <div className="w-full lg:w-2/3 m-auto">
        <ContactForm />
      </div>
    </>
  );
}
