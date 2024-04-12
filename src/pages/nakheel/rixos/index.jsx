import Gallery from "@/components/contact/Projects/Gallery";
import HeaderImage from "@/components/contact/Projects/HeaderImage";
import Title from "@/components/contact/Projects/Title";
import Image from "next/image";
import header from "@/../public/img/nakheel/rixos/header.jpg";
import second from "@/../public/img/nakheel/rixos/second.jpg";
import third from "@/../public/img/nakheel/rixos/third.jpg";
import fourth from "@/../public/img/nakheel/rixos/fourth.jpg";
import Squares from "@/components/contact/Squares";
import Faq from "@/components/contact/Projects/Faq";
import ContactForm from "@/components/contact/ContactForm";
import ProjectInfo from "@/components/contact/Projects/ProjectInfo";

export default function Index() {
  const photos = [
    {
      src: "/img/nakheel/rixos/gallery/5.jpg",
      alt: "Image 1",
      width: 600,
      height: 800,
    },
    {
      src: "/img/nakheel/rixos/gallery/2.jpg",
      alt: "Image 2",
      width: 800,
      height: 520,
    },
    {
      src: "/img/nakheel/rixos/gallery/3.jpg",
      alt: "Image 1",
      width: 800,
      height: 520,
    },
    {
      src: "/img/nakheel/rixos/gallery/1.jpg",
      alt: "Image 2",
      width: 800,
      height: 520,
    },
    {
      src: "/img/nakheel/rixos/gallery/4.jpg",
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
        project={"Rixos"}
        text={
          "New waterfront development offers a resort lifestyle in a curated and relaxed setting situated in a secluded cove on Dubai Islands"
        }
        price={"2.5M"}
      />
      <Title
        title={"Rixos Residences"}
        subtitle={"Contemporary Waterfront Living"}
        paragraph={
          "This new waterfront development offers a resort lifestyle in a curated and relaxed setting situated in a secluded cove on Dubai Islands, with a 700 metre beach that all residents have direct access to. It will provide residents and visitors the same level of service and amenities as at any Rixos hotel across the world. Residents will have access to amenities that focus on sports, leisure and wellness, such as communal residential lounges, popular cafés and restaurants, various entertainment options, hotel style lobbies for each building with drop off facilities, infinity pools, a spa and fitness centre."
        }
      />
      {/* <Icons /> */}
      <Image
        src={second}
        width={2000}
        className="w-full h-[25rem] md:h-auto object-cover"
      />
      <Title
        title={"UNPARALLELED WATERFRONT LIFESTYLE"}
        // subtitle={"INFINITE POSSIBILITIES"}
        paragraph={
          "Rixos Dubai Islands, Hotel & Residences features mid rise contemporary architecture with a resort look and feel. The residences will be comprised of one, two and three bedroom apartments with spacious overhanging terraces, four bedroom duplexes with private pools, and beach houses including their own gardens and terraces and ten luxury villas."
        }
      />
      <Gallery photos={photos} />
      <div className="relative ">
        <div className="absolute top-32 2xl:top-[35%] right-0 z-10 text-white text-right font-light mr-[5%] 2xl:mr-48">
          {/* <h1 className=" text-4xl lg:text-6xl lg:leading-[4rem] ">
          A LANDMARK OF <br /> LUXURY LIVING
          </h1> */}
          <p className="w-10/12 md:w-2/4 2xl:w-1/3  lg:text-5xl mt-6 ml-auto ">
            Rixos Dubai Islands, Hotel & Residences is the first luxury hotel
            and residential offering on Dubai Islands.{" "}
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
      <ProjectInfo price={"AED 2.5M"} handover={2026} payment={"80/20"} />
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
