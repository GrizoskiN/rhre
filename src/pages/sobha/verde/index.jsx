import Gallery from "@/components/Projects/Gallery";
import HeaderImage from "@/components/Projects/HeaderImage";
import img from "@/../public/img/sobha/verde/verdeheader.webp";
import Title from "@/components/Projects/Title";
import Icons from "@/components/Projects/Icons";
import Image from "next/image";
import verde from "@/../public/img/sobha/verde/verde2.webp";
import comfort from "@/../public/img/sobha/verde/verde4.webp";
import verdeqr from "@/../public/img/sobha/qr/verdeqr.jpg";
import Squares from "@/components/contact/Squares";
import Faq from "@/components/Projects/Faq";
import ContactForm from "@/components/contact/ContactForm";
import ProjectInfo from "@/components/Projects/ProjectInfo";
import DownloadBrochureBtn from "@/components/Projects/DownloadBrochureBtn";
import Head from "next/head";

export default function Index() {
  const photos = [
    {
      src: "/img/sobha/verde/gallery/5.jpg",
      alt: "Image 1",
      width: 600,
      height: 800,
    },
    {
      src: "/img/sobha/verde/gallery/2.jpg",
      alt: "Image 2",
      width: 800,
      height: 520,
    },
    {
      src: "/img/sobha/verde/gallery/3.jpg",
      alt: "Image 1",
      width: 800,
      height: 520,
    },
    {
      src: "/img/sobha/verde/gallery/1.jpg",
      alt: "Image 2",
      width: 800,
      height: 520,
    },
    {
      src: "/img/sobha/verde/gallery/4.jpg",
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
    <title>Sobha Realty - Verde | RHRE | Dubai, UAE</title>
    <meta name="description" content="Rise High Real Estate - Your trusted partner for buying, selling, and leasing properties in Dubai, UAE. Explore luxury apartments, townhouses, and villas with us." />
    </Head>
      <HeaderImage
        header={img}
        company={"Sobha"}
        project={"Verde"}
        text={
          "Sobha Realty redefines the concept of luxury residential living with a repertoire of real estate projects across Dubai."
        }
        price={"1.57M"}
      />
      <Title
        title={"The Enduring"}
        subtitle={"LEGACY OF SUCCESS"}
        paragraph={
          "With razor-sharp focus on quality and innovation, it has created a plethora of iconic spaces such as extravagant palaces, ornate  mosques, cutting edge campuses and ultra-luxurious communities with grand villas and apartments."
        }
      />
      <Icons />
      <Image
        src={verde}
        width={2000}
        className="w-full h-[25rem] md:h-auto object-cover"
      />
      <Title
        title={"The Window To"}
        subtitle={"INFINITE POSSIBILITIES"}
        paragraph={
          "Step into your private sanctuary and be swept away by the  panoramic views of the sparkling blue waters and verdant greenery that will transport your senses to an unparalleled world of serenity."
        }
      />
      <Gallery photos={photos} />
      <ProjectInfo
        price={"1.56M"}
        handover={2027}
        payment={"60/40"}
        qr={verdeqr}
      />
      <div className="relative ">
        <div className="absolute top-32 2xl:top-[35%] right-0 z-10 text-white text-right font-light mr-[5%] 2xl:mr-48">
          <h1 className=" text-4xl lg:text-6xl lg:leading-[4rem] ">
            WHERE COMFORT AND <br /> EXTRAVAGANCE MEET
          </h1>
          <p className="w-10/12 md:w-2/4 2xl:w-2/5  lg:text-xl mt-6 ml-auto ">
            Life at Sobha Hartland II embodies an exultant sense of connection
            in a close-knit community and superior quality homes crafted for the
            discerning eye.
          </p>
          <DownloadBrochureBtn />
        </div>

        <Image
          src={comfort}
          width={1000}
          quality={100}
          className="w-full h-[45rem] md:h-auto object-cover"
        />
      </div>

      <Squares  />
      <Faq />

      <div className="w-full xl:w-2/3 m-auto">
        <ContactForm />
      </div>
    </>
  );
}
