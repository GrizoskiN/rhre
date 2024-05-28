import Gallery from "@/components/Projects/Gallery";
import HeaderImage from "@/components/Projects/HeaderImage";
import Title from "@/components/Projects/Title";
import Image from "next/image";
import header from "@/../public/img/nakheel/bay/header.jpg";
import second from "@/../public/img/nakheel/bay/second.jpg";
import third from "@/../public/img/nakheel/bay/third.jpg";
import fourth from "@/../public/img/nakheel/bay/fourth.jpg";
import Squares from "@/components/contact/Squares";
import Faq from "@/components/Projects/Faq";
import ContactForm from "@/components/contact/ContactForm";
import ProjectInfo from "@/components/Projects/ProjectInfo";

export default function Index() {
  const photos = [
    {
      src: "/img/nakheel/bay/gallery/5.jpg",
      alt: "Image 1",
      width: 600,
      height: 800,
    },
    {
      src: "/img/nakheel/bay/gallery/2.jpg",
      alt: "Image 2",
      width: 800,
      height: 520,
    },
    {
      src: "/img/nakheel/bay/gallery/3.jpg",
      alt: "Image 1",
      width: 800,
      height: 520,
    },
    {
      src: "/img/nakheel/bay/gallery/1.jpg",
      alt: "Image 2",
      width: 800,
      height: 520,
    },
    {
      src: "/img/nakheel/bay/gallery/4.jpg",
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
      <HeaderImage
        header={header}
        company={"nakheel"}
        project={"Bay Villas"}
        text={"Immerse yourself in serenity at Bay Villas Dubai Island!"}
        price={"7.5M"}
      />
      <Title
        title={"Bay Villas"}
        subtitle={"Immerse yourself in serenity"}
        paragraph={
          " Experience the lifestyle in an exclusive management loaded with magnificent surroundings and premium features of entertainment from luxury design lagoons, breathtaking boardwalks, clubhouses, community gardens and many such."
        }
      />
      {/* <Icons /> */}
      <Image
        src={second}
        width={2000}
        className="w-full h-[25rem] md:h-auto object-cover"
      />
      <Title
        title={"Iconic homes"}
        // subtitle={"INFINITE POSSIBILITIES"}
        paragraph={
          "The ideal location has its own charm where you get to enjoy the impeccable benefits with exquisite designs and finishes of the highest standards. Every fine option to relax and dine in with amazing people in premium restaurants."
        }
      />
      <Gallery photos={photos} />
      <div className="relative ">
        <div className="absolute top-32 2xl:top-[35%] right-0 z-10 text-white text-right font-light mr-[5%] 2xl:mr-48">
          <h1 className=" text-4xl lg:text-6xl lg:leading-[4rem] uppercase ">
            Experience the beauty <br /> of fresh air
          </h1>
          <p className="w-10/12 md:w-2/4 2xl:w-3/4  lg:text-xl mt-6 ml-auto ">
            In this stylish and extraordinary community, the statesman homes
            bring an abundance of entertainment, superior comfort and
            convenience that is unmatchable.
          </p>
          <button
            href="#contact"
            className="text-xl bg-red-500 px-11 py-4 mt-6 lg:mt-11 rounded-lg hover:bg-royal transition-all duration-300">
            Download Brochure
          </button>
        </div>

        <Image
          src={third}
          width={1000}
          quality={100}
          className="w-full h-[45rem] md:h-auto object-cover"
        />
      </div>
      <ProjectInfo price={"AED 7.5M"} handover={2027} payment={"80/20"} />
      <Image
        src={fourth}
        width={2000}
        className="w-full h-[25rem] md:h-auto object-cover"
      />

      <Squares  />
      <Faq />

      <div className="w-full lg:w-2/3 m-auto">
        <ContactForm id="contact" />
      </div>
    </>
  );
}
