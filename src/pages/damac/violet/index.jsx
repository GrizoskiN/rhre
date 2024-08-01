import Gallery from "@/components/Projects/Gallery";
import HeaderImage from "@/components/Projects/HeaderImage";
import Title from "@/components/Projects/Title";
import Image from "next/image";
import header from "@/../public/img/damac/violet/header.jpg";
import second from "@/../public/img/damac/violet/second.jpg";
import third from "@/../public/img/damac/violet/third.jpg";
import armaniqr from "@/../public/img/damac/qr/violetqr.jpg";
import Squares from "@/components/contact/Squares";
import Faq from "@/components/Projects/Faq";
import ContactForm from "@/components/contact/ContactForm";
import ProjectInfo from "@/components/Projects/ProjectInfo";
import DownloadBrochureBtn from "@/components/Projects/DownloadBrochureBtn";
import Head from "next/head";

export default function Index() {
  const photos = [
    {
      src: "/img/damac/violet/gallery/5.jpg",
      alt: "Image 1",
      width: 600,
      height: 800,
    },
    {
      src: "/img/damac/violet/gallery/2.jpg",
      alt: "Image 2",
      width: 800,
      height: 520,
    },
    {
      src: "/img/damac/violet/gallery/3.jpg",
      alt: "Image 1",
      width: 800,
      height: 520,
    },
    {
      src: "/img/damac/violet/gallery/1.jpg",
      alt: "Image 2",
      width: 800,
      height: 520,
    },
    {
      src: "/img/damac/violet/gallery/4.jpg",
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
    <title>Damac Properties - Violet | RHRE | Dubai, UAE</title>
    <meta name="description" content="Rise High Real Estate - Your trusted partner for buying, selling, and leasing properties in Dubai, UAE. Explore luxury apartments, townhouses, and villas with us." />
    </Head>
      <HeaderImage
        header={header}
        company={"DAMAC"}
        project={"Violet"}
        text={
          "Discover the pinnacle of modern living with Violet at DAMAC Hills 2, the latest residential masterpiece by renowned DAMAC Properties."
        }
        price={"1.87M"}
      />
      <Title
        title={"Invest in Luxury and Serenity"}
        // subtitle={"Discover a world of timeless elegance"}
        paragraph={
          "Living in Violet at DAMAC Hills 2 is more than just owning a home; it’s embracing a lifestyle of unparalleled comfort and luxury. The community is laced with premium amenities that cater to every aspect of modern living. From a state-of-the-art gym equipped with the latest fitness equipment to a bespoke climbing wall for a thrilling challenge, every detail is designed to elevate your living experience."
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
        title={"TIMELESS ELEGANCE"}
        // subtitle={"INFINITE POSSIBILITIES"}
        paragraph={
          "Since 2004, the Armani/Casa Interior Design Studio has provided complete interior design services to private individuals and property developers, from the conceptual phase under the artistic direction of Giorgio Armani, through to the management of construction."
        }
      />
      <Gallery photos={photos} />
      <div className="relative ">
        <div className="absolute top-32 2xl:top-[35%] right-0 z-10 text-white text-right font-light mr-[5%] 2xl:mr-48">
          <h1 className=" text-4xl lg:text-6xl lg:leading-[4rem] ">
          Luxury and Accessibility
          </h1>
          <p className="w-10/12 md:w-2/4  lg:text-xl mt-6 ml-auto ">
          Living in the community of Violet in DAMAC Hills 2 is an experience like no other.
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
      <ProjectInfo price={"1.87M"} handover={2026} payment={"60/40"} qr={armaniqr}/>
     

      <Squares />
      <Faq />

      <div className="w-full xl:w-2/3 m-auto">
        <ContactForm />
      </div>
    </>
  );
}
