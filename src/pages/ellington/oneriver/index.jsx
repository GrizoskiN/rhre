import Gallery from "@/components/contact/Projects/Gallery";
import HeaderImage from "@/components/contact/Projects/HeaderImage";
import Title from "@/components/contact/Projects/Title";
import Image from "next/image";
import header from "@/../public/img/ellington/oneriverpoint/header.webp";
import second from "@/../public/img/ellington/oneriverpoint/second.webp";
import third from "@/../public/img/ellington/oneriverpoint/third.webp";
import fourth from "@/../public/img/ellington/oneriverpoint/fourth.webp";
import oneqr from "@/../public/img/ellington/qr/onepointqr.jpg";
import Squares from "@/components/contact/Squares";
import Faq from "@/components/contact/Projects/Faq";
import ContactForm from "@/components/contact/ContactForm";
import ProjectInfo from "@/components/contact/Projects/ProjectInfo";

export default function Index() {
  const photos = [
    {
      src: "/img/ellington/oneriverpoint/gallery/5.webp",
      alt: "Image 1",
      width: 600,
      height: 800,
    },
    {
      src: "/img/ellington/oneriverpoint/gallery/2.webp",
      alt: "Image 2",
      width: 800,
      height: 520,
    },
    {
      src: "/img/ellington/oneriverpoint/gallery/3.webp",
      alt: "Image 1",
      width: 800,
      height: 520,
    },
    {
      src: "/img/ellington/oneriverpoint/gallery/1.webp",
      alt: "Image 2",
      width: 800,
      height: 520,
    },
    {
      src: "/img/ellington/oneriverpoint/gallery/4.webp",
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
        project={"One Riverpoint"}
        text={
          "Ellington Properties and Dutco are bringing           together a wealth of experience and expertise in           the development of One River Point."
        }
        price={"2.8M"}
      />
      <Title
        title={"ECLECTIC LIFESTYLE"}
        subtitle={"BUSINESS BAY'S MOST INSPIRING LOCATION"}
        paragraph={
          "The atmosphere inside is soft, contemporary, and     welcoming, with low lighting that emulates a calm           return from the itality that keeps Business Bay one           of Dubai’s most eclectic and inspiring locations"
        }
      />
      {/* <Icons /> */}
      <Image
        src={second}
        width={2000}
        className="w-full h-[25rem] md:h-auto object-cover"
      />
      <Title
        title={"THE        RHYTHM       OF THE CITY"}
        // subtitle={"INFINITE POSSIBILITIES"}
        paragraph={
          " Business Bay has long held a reputation for   being home to a vibrant cowmmunity of          innovation and aspiration. It has since attracted           a wealth of exciting venues for dining, art           culture, and socialising."
        }
      />
      <Gallery photos={photos} />
      <div className="relative ">
        <div className="absolute top-32 2xl:top-[35%] right-0 z-10 text-white text-right font-light mr-[5%] 2xl:mr-48">
          <h1 className=" text-4xl lg:text-6xl lg:leading-[4rem] ">
          WHERE STYLE <br/> MEETS CHARACTER
          </h1>
          <p className="w-10/12 md:w-2/4 2xl:w-2/5  lg:text-xl mt-6 ml-auto ">
          Contemporary aesthetics, cutting-edge technology, and a prime location 
connect residents to a lifestyle that crosses paths, creates opportunities, 
and revitalises wellbeing. The entire building, inside and out is created to 
help its residents flourish in their new home.  
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
      <ProjectInfo price={"2.8M"} handover={"2027 Q3"} payment={"70/30"} qr={oneqr} />
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
