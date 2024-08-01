import Gallery from "@/components/Projects/Gallery";
import HeaderImage from "@/components/Projects/HeaderImage";
import Title from "@/components/Projects/Title";
import Image from "next/image";
import header from "@/../public/img/damac/autograph/header.jpg";
import second from "@/../public/img/damac/autograph/second.jpg";
import third from "@/../public/img/damac/autograph/third.jpg";
import armaniqr from "@/../public/img/damac/qr/autographqr.jpg";
import Squares from "@/components/contact/Squares";
import Faq from "@/components/Projects/Faq";
import ContactForm from "@/components/contact/ContactForm";
import ProjectInfo from "@/components/Projects/ProjectInfo";
import DownloadBrochureBtn from "@/components/Projects/DownloadBrochureBtn";
import Head from "next/head";

export default function Index() {
  const photos = [
    {
      src: "/img/damac/autograph/gallery/5.jpg",
      alt: "Image 1",
      width: 600,
      height: 800,
    },
    {
      src: "/img/damac/autograph/gallery/2.jpg",
      alt: "Image 2",
      width: 800,
      height: 520,
    },
    {
      src: "/img/damac/autograph/gallery/3.jpg",
      alt: "Image 1",
      width: 800,
      height: 520,
    },
    {
      src: "/img/damac/autograph/gallery/1.jpg",
      alt: "Image 2",
      width: 800,
      height: 520,
    },
    {
      src: "/img/damac/autograph/gallery/4.jpg",
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
    <title>Damac Properties - Autograph | RHRE | Dubai, UAE</title>
    <meta name="description" content="Rise High Real Estate - Your trusted partner for buying, selling, and leasing properties in Dubai, UAE. Explore luxury apartments, townhouses, and villas with us." />
    </Head>
      <HeaderImage
        header={header}
        company={"DAMAC"}
        project={"Autograph"}
        text={
          "Autograph Collection is a new and highly-curated selection of exquisite villas in DAMAC Hills"
        }
        price={"7M"}
      />
      <Title
        title={" Autograph Collection"}
        // subtitle={"Discover a world of timeless elegance"}
        paragraph={
          "Damac Properties presents a limited edition of homes within the Autograph Collection by Damac, where every detail reflects timeless luxury and groundbreaking sophistication. These villas promise a lifestyle that captures the essence of balanced living, merging tranquility with contemporary elegance"
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
        title={"WHERE LUXURY IS BOUNDLESS"}
        // subtitle={"INFINITE POSSIBILITIES"}
        paragraph={
          "Violet is a blossoming urban oasis for the entire family. Add colour to your life with a 4-bedroom townhouse In damac hills 2 opposite water town and its outstanding World-class amenities."
        }
      />
      <Gallery photos={photos} />
      <div className="relative ">
        <div className="absolute top-32 2xl:top-[35%] right-0 z-10 text-white text-right font-light mr-[5%] 2xl:mr-48">
          <h1 className=" text-4xl lg:text-6xl lg:leading-[4rem] ">
          Live Connected in Every
 Way at Damac Hills
          </h1>
          <p className="w-10/12 md:w-2/4  lg:text-xl mt-6 ml-auto ">
          Nestled within the tranquil yet vibrant expanses of Dubailand, Damac Hills represents the epitome of cozy, contemporary living.
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
      
      <ProjectInfo price={"7M"} handover={2027} payment={"60/40"} qr={armaniqr}/>
     

      <Squares />
      <Faq />

      <div className="w-full xl:w-2/3 m-auto">
        <ContactForm />
      </div>
    </>
  );
}
