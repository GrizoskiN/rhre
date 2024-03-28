import Gallery from "@/components/contact/Projects/Gallery";
import HeaderImage from "@/components/contact/Projects/HeaderImage";
import Title from "@/components/contact/Projects/Title";
import Image from "next/image";
import header from "@/../public/img/ellington/mercer/header.webp";
import second from "@/../public/img/ellington/mercer/second.webp";
import third from "@/../public/img/ellington/mercer/third.webp";
import fourth from "@/../public/img/ellington/mercer/fourth.webp";
import Squares from "@/components/contact/Squares";
import Faq from "@/components/contact/Projects/Faq";
import ContactForm from "@/components/contact/ContactForm";
import ProjectInfo from "@/components/contact/Projects/ProjectInfo";

export default function Index() {
  const photos = [
    {
      src: "/img/ellington/mercer/gallery/5.webp",
      alt: "Image 1",
      width: 600,
      height: 800,
    },
    {
      src: "/img/ellington/mercer/gallery/2.webp",
      alt: "Image 2",
      width: 800,
      height: 520,
    },
    {
      src: "/img/ellington/mercer/gallery/3.webp",
      alt: "Image 1",
      width: 800,
      height: 520,
    },
    {
      src: "/img/ellington/mercer/gallery/1.webp",
      alt: "Image 2",
      width: 800,
      height: 520,
    },
    {
      src: "/img/ellington/mercer/gallery/4.webp",
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
        company={"Ellington"}
        project={"Mercer House"}
        text={
          "Set in a newly revitalised Uptown Dubai,  Mercer House celebrates a refreshed energy  whereby lives and lifestyles are enhanced  through creativity, design, wellness, and  entertainment"
        }
        price={"2.5M"}
      />
      <Title
        title={"Mercer House"}
        subtitle={"A NEW ICON"}
        paragraph={
          " In addition to a collection of contemporary           apartments, Mercer House offers access           to a design icon with stunning architecture,           world-class amenities, high-end shopping,           and sociable dining."
        }
      />
      {/* <Icons /> */}
      <Image
        src={second}
        width={2000}
        className="w-full h-[25rem] md:h-auto object-cover"
      />
      <Title
        title={"WELCOMING  REFRACTIONS"}
        // subtitle={"INFINITE POSSIBILITIES"}
        paragraph={
          "Emanating the constant motion of its  location, Mercer House invites you into a  state of seamless flow. The facade design  elements are inspired by nature, taking on  the undulating qualities of water."
        }
      />
      <Gallery photos={photos} />
      <div className="relative ">
        <div className="absolute top-32 2xl:top-[35%] right-0 z-10 text-white text-right font-light mr-[5%] 2xl:mr-48">
          <h1 className=" text-4xl lg:text-6xl lg:leading-[4rem] ">
          CREATING CONNECTION
          </h1>
          <p className="w-10/12 md:w-2/4 2xl:w-2/5  lg:text-xl mt-6 ml-auto ">
          The harmonious layers of Mercer House are  inspired by the intricacies found in the natural  world. These curved and linear forms help  to soften the built environment, connecting  contemporary architecture to the organic  environment.
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
      <ProjectInfo price={"2.5M"} handover={2027} payment={"70/30"} />
      <Image
        src={fourth}
        width={2000}
        className="w-full h-[25rem] md:h-auto object-cover"
      />

      <Squares benefits={benefits} />
      <Faq />

      <div className="w-full lg:w-2/3 m-auto">
        <ContactForm />
      </div>
    </>
  );
}
