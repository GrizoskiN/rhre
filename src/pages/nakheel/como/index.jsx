import Gallery from "@/components/Projects/Gallery";
import HeaderImage from "@/components/Projects/HeaderImage";
import Title from "@/components/Projects/Title";
import Image from "next/image";
import header from "@/../public/img/nakheel/como/header.jpg";
import second from "@/../public/img/nakheel/como/second.jpg";
import third from "@/../public/img/nakheel/como/third.jpg";
import fourth from "@/../public/img/nakheel/como/fourth.jpg";
import Squares from "@/components/contact/Squares";
import Faq from "@/components/Projects/Faq";
import ContactForm from "@/components/contact/ContactForm";
import ProjectInfo from "@/components/Projects/ProjectInfo";

export default function Index() {
  const photos = [
    {
      src: "/img/nakheel/como/gallery/5.jpg",
      alt: "Image 1",
      width: 600,
      height: 800,
    },
    {
      src: "/img/nakheel/como/gallery/2.jpg",
      alt: "Image 2",
      width: 800,
      height: 520,
    },
    {
      src: "/img/nakheel/como/gallery/3.jpg",
      alt: "Image 1",
      width: 800,
      height: 520,
    },
    {
      src: "/img/nakheel/como/gallery/1.jpg",
      alt: "Image 2",
      width: 800,
      height: 520,
    },
    {
      src: "/img/nakheel/como/gallery/4.jpg",
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
        project={"Como"}
        text={
          "como District One is a truly remarkable residential development that redefines the concept of luxurious living in Dubai."
        }
        price={"21M"}
      />
      <Title
        title={"Como Residences"}
        subtitle={"A New, Cosmopolitan Mode of LivingLIFESTYLE"}
        paragraph={
          "Como Residences is a new exclusive residential development set to redefine the skyline of Palm Jumeirah. It boasts 76 storeys of just 76 residences, standing at over 300 metres tall, featuring an innovative design that ensures each residence can take full advantage of the 180° to 360° views of Dubai and the Arabian Sea from wrap around balconies. This architectural marvel offers unrivalled luxurious living experiences with privacy, exclusivity and extensive premium amenities."
        }
      />
      {/* <Icons /> */}
      <Image
        src={second}
        width={2000}
        className="w-full h-[25rem] md:h-auto object-cover"
      />
      <Title
        title={"GLAMOROUS LIFESTYLE"}
        // subtitle={"INFINITE POSSIBILITIES"}
        paragraph={
          "Discover the pinnacle of sophisticated beachfront living. This sleek, majestic tower rises above Palm Jumeirah, harmoniously blending into the world-renowned landscape of extravagant luxury resorts, high-end stores, entertainment venues and premiere dining destinations."
        }
      />
      <Gallery photos={photos} />
      <div className="relative ">
        <div className="absolute top-32 2xl:top-[35%] right-0 z-10 text-white text-right font-light mr-[5%] 2xl:mr-48">
          <h1 className=" text-4xl lg:text-6xl lg:leading-[4rem] ">
            Nakheel Experiences
          </h1>
          <p className="w-10/12 md:w-2/4 2xl:w-3/4  lg:text-xl mt-6 ml-auto ">
            Harnessing the beauty of nature, Nakheel transforms land and water
            into innovative landmark destinations.
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
      <ProjectInfo price={"AED 21M"} handover={2027} payment={"80/20"} />
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
