import Gallery from "@/components/Projects/Gallery";
import HeaderImage from "@/components/Projects/HeaderImage";
import Title from "@/components/Projects/Title";
import Image from "next/image";
import header from "@/../public/img/emaar/mangrove/header.jpg";
import second from "@/../public/img/emaar/mangrove/second.jpg";
import third from "@/../public/img/emaar/mangrove/third.jpg";
import fourth from "@/../public/img/emaar/mangrove/fourth.jpg";
import oneqr from "@/../public/img/emaar/qr/mangroveqr.jpg";
import Squares from "@/components/contact/Squares";
import Faq from "@/components/Projects/Faq";
import ContactForm from "@/components/contact/ContactForm";
import ProjectInfo from "@/components/Projects/ProjectInfo";
import DownloadBrochureBtn from "@/components/Projects/DownloadBrochureBtn";
import Head from "next/head";

export default function Index() {
  const photos = [
    {
      src: "/img/emaar/mangrove/gallery/5.jpg",
      alt: "Image 1",
      width: 600,
      height: 800,
    },
    {
      src: "/img/emaar/mangrove/gallery/2.jpg",
      alt: "Image 2",
      width: 800,
      height: 520,
    },
    {
      src: "/img/emaar/mangrove/gallery/3.jpg",
      alt: "Image 1",
      width: 800,
      height: 520,
    },
    {
      src: "/img/emaar/mangrove/gallery/1.jpg",
      alt: "Image 2",
      width: 800,
      height: 520,
    },
    {
      src: "/img/emaar/mangrove/gallery/4.jpg",
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
    <title>Emaar Properties - Mangrove | RHRE | Dubai, UAE</title>
    <meta name="description" content="Rise High Real Estate - Your trusted partner for buying, selling, and leasing properties in Dubai, UAE. Explore luxury apartments, townhouses, and villas with us." />
    </Head>
      <HeaderImage
        header={header}
        company={"Emaar"}
        project={"Mangrove"}
        text={
          "Mangrove is a collection of 1-, 2- and 3-bedroom apartments adjacent to a lush park, with unmatching views of the Creek."
        }
        price={"1.48M"}
      />
      <Title
        title={"Mangrove?"}
        subtitle={"AT DUBAI CREEK HARBOUR"}
        paragraph={
          "Mangrove is a vibrant, positive place full of life. This neighbourhood is great for families because it fosters close relationships among its residents and provides many opportunities for residents to spend time together. The fantastic location and proximity to many convenient establishments bode well for a bright future and an exceptional quality of life."
        }
      />
      {/* <Icons /> */}
      <Image
        src={second}
        width={2000}
        className="w-full h-[25rem] md:h-auto object-cover"
      />
      <Title
        title={"MANGROVE AT CREEK BEACH"}
        // subtitle={"INFINITE POSSIBILITIES"}
        paragraph={
          " Mangrove is located minutes away from the pristine Creek Beach, with views of the serene creek waters. It is also conveniently close to all primary business, shopping and entertainment destinations in Dubai, so you’ll find peace at home without being too far from all the action. The artful balance between work and life is struck in the harmony of Mangrove's air of refined sophistication."
        }
      />
      <Gallery photos={photos} />
      <div className="relative ">
        <div className="absolute top-32 2xl:top-[35%] right-0 z-10 text-white text-right font-light mr-[5%] 2xl:mr-48">
          {/* <h1 className=" text-4xl font-bold lg:text-6xl lg:leading-[4rem] ">
          Luxury Apartments <br/>And Massive Penthouse
          </h1> */}
       
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
        price={"1.48M"}
        handover={"2026"}
        payment={"80/20"}
        qr={oneqr}
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
