import Gallery from "@/components/Projects/Gallery";
import HeaderImage from "@/components/Projects/HeaderImage";
import Title from "@/components/Projects/Title";
import Image from "next/image";
import header from "@/../public/img/meraas/acres/header.webp";
import second from "@/../public/img/meraas/acres/second.webp";
import third from "@/../public/img/meraas/acres/third.webp";
import fourth from "@/../public/img/meraas/acres/fourth.webp";
import Squares from "@/components/contact/Squares";
import Faq from "@/components/Projects/Faq";
import ContactForm from "@/components/contact/ContactForm";
import ProjectInfo from "@/components/Projects/ProjectInfo";
import acresqr from "@/../public/img/meraas/qr/acresqr.jpg";
export default function Index() {
  const photos = [
    {
      src: "/img/meraas/acres/gallery/5.webp",
      alt: "Image 1",
      width: 600,
      height: 800,
    },
    {
      src: "/img/meraas/acres/gallery/2.webp",
      alt: "Image 2",
      width: 800,
      height: 520,
    },
    {
      src: "/img/meraas/acres/gallery/3.webp",
      alt: "Image 1",
      width: 800,
      height: 520,
    },
    {
      src: "/img/meraas/acres/gallery/1.webp",
      alt: "Image 2",
      width: 800,
      height: 520,
    },
    {
      src: "/img/meraas/acres/gallery/4.webp",
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
        company={"Meraas"}
        project={"The Acres"}
        text={
          "Discover The Acres, where every step inside brings you closer to the outdoors."
        }
        price={"5.01M"}
      />
      <Title
        title={"STEP INSIDE"}
        subtitle={"THE OUTDOORS"}
        paragraph={
          "Welcome to The Acres, a brand-new community of standalone villas featuring impeccable surroundings enveloped by nature. Graced with serene gardens and azure lagoons, this exclusive neighborhood harmonizes with the undulating terrain, creating a space that’s connected by meandering pathways to every corner of this ever-flourishing environment."
        }
      />
      {/* <Icons /> */}
      <Image
        src={second}
        width={2000}
        className="w-full h-[25rem] md:h-auto object-cover"
      />
      <Title
        title={"IN THE MIDST OF NATURE"}
        // subtitle={"INFINITE POSSIBILITIES"}
        paragraph={
          "Discover a community unlike any other in Dubai. A prestigious location          where modern luxury and the splendour of nature converge."
        }
      />
      <Gallery photos={photos} />
      <div className="relative ">
        <div className="absolute top-32 2xl:top-[35%] right-0 z-10 text-white text-right font-light mr-[5%] 2xl:mr-48">
          <h1 className=" text-4xl lg:text-6xl lg:leading-[4rem] ">
            A MASTERPLAN <br /> OF NATURAL LIVING
          </h1>
          <p className="w-10/12 md:w-2/4 2xl:w-2/5  lg:text-xl mt-6 ml-auto ">
            Explore a world where bespoke villas find their home amongst
            flourishing surroundings, with lush parks that are conveniently
            located just a minute’s stroll away, inviting you to effortlessly
            immerse yourself in the beauty of nature.
          </p>
          <button className="text-xl bg-red-500 px-11 py-4 mt-6 lg:mt-11 rounded-lg hover:bg-royal transition-all duration-300">
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
      <ProjectInfo price={"5.01M"} handover={2027} payment={"65/35"} qr={acresqr}/>
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
