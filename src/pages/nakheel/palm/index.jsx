import Gallery from "@/components/contact/Projects/Gallery";
import HeaderImage from "@/components/contact/Projects/HeaderImage";
import Title from "@/components/contact/Projects/Title";
import Image from "next/image";
import header from "@/../public/img/nakheel/palm/header.jpg";
import second from "@/../public/img/nakheel/palm/second.jpg";
import third from "@/../public/img/nakheel/palm/third.jpg";
import fourth from "@/../public/img/nakheel/palm/fourth.jpg";
import Squares from "@/components/contact/Squares";
import Faq from "@/components/contact/Projects/Faq";
import ContactForm from "@/components/contact/ContactForm";
import ProjectInfo from "@/components/contact/Projects/ProjectInfo";

export default function Index() {
  const photos = [
    {
      src: "/img/nakheel/palm/gallery/5.jpg",
      alt: "Image 1",
      width: 600,
      height: 800,
    },
    {
      src: "/img/nakheel/palm/gallery/2.jpg",
      alt: "Image 2",
      width: 800,
      height: 520,
    },
    {
      src: "/img/nakheel/palm/gallery/3.jpg",
      alt: "Image 1",
      width: 800,
      height: 520,
    },
    {
      src: "/img/nakheel/palm/gallery/1.jpg",
      alt: "Image 2",
      width: 800,
      height: 520,
    },
    {
      src: "/img/nakheel/palm/gallery/4.jpg",
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
        company={"nakheel"}    project={"Palm Jebel Ali"}
        text={
          "The new, futuristic Palm Jebel Ali will raise the global benchmark in waterfront living, featuring extensive green spaces and luxury lifestyle amenities."
        }
        price={"18M"}
      />
      <Title
        title={"Palm Jebel Ali"}
        subtitle={"Master Development"}
        paragraph={
          "It will feature mixed-use walkable neighbourhoods and incorporate smart city technologies and provide a diverse range of mobility options for residents, visitors and communities. Palm Jebel Ali is set on 13.4 square kilometres of land and has the longest coastline of any destination in Dubai, adding a total of 91 kilometres of beachfront. It will be home to over 80 hotels and resorts, and a wide choice of entertainment and leisure facilities, which will distinguish the archipelago as an aspirational residential destination in the Emirate."
        }
      />
      {/* <Icons /> */}
      <Image
        src={second}
        width={2000}
        className="w-full h-[25rem] md:h-auto object-cover"
      />
      <Title
        title={"ICONIC PLACE TO CALL HOME"}
        // subtitle={"INFINITE POSSIBILITIES"}
        paragraph={
          "Palm Jebel Ali harnesses the beauty and power of the natural environment, coming together to create an aspirational destination in Dubai, where residents and visitors can live and visit in harmony. It will exemplify what Dubai has achieved and continues to achieve, with the creation of communities which are at one with the surrounding elements of sand, water and nature."
        }
      />
      <Gallery photos={photos} />
      <div className="relative ">
        <div className="absolute top-32 2xl:top-[35%] right-0 z-10 text-white text-right font-light mr-[5%] 2xl:mr-48">
          <h1 className=" text-4xl lg:text-6xl lg:leading-[4rem] ">
          A LANDMARK OF <br /> LUXURY LIVING
          </h1>
          <p className="w-10/12 md:w-2/4 2xl:w-3/4  lg:text-xl mt-6 ml-auto ">
          Live in one of the spectacular island districts, where everyday life is elevated from sunrise to sunset.
          </p>
          <button href="#contact" className="text-xl bg-red-500 px-11 py-4 mt-6 lg:mt-11 rounded-lg hover:bg-royal transition-all duration-300">
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
      <ProjectInfo price={"AED 18M"} handover={2027} payment={"80/20"} />
      <Image
        src={fourth}
        width={2000}
        className="w-full h-[25rem] md:h-auto object-cover"
      />

      <Squares benefits={benefits} />
      <Faq />

      <div className="w-full lg:w-2/3 m-auto">
        <ContactForm id="contact" />
      </div>
    </>
  );
}
