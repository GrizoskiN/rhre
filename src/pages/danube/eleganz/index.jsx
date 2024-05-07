import Gallery from "@/components/Projects/Gallery";
import HeaderImage from "@/components/Projects/HeaderImage";
import Title from "@/components/Projects/Title";
import Image from "next/image";
import header from "@/../public/img/danube/eleganz/header.webp";
import second from "@/../public/img/danube/eleganz/second.webp";
import third from "@/../public/img/danube/eleganz/third.webp";
import fourth from "@/../public/img/danube/eleganz/fourth.webp";
import Squares from "@/components/contact/Squares";
import Faq from "@/components/Projects/Faq";
import ContactForm from "@/components/contact/ContactForm";
import ProjectInfo from "@/components/Projects/ProjectInfo";

export default function Index() {
  const photos = [
    {
      src: "/img/danube/eleganz/gallery/5.webp",
      alt: "Image 1",
      width: 600,
      height: 800,
    },
    {
      src: "/img/danube/eleganz/gallery/2.webp",
      alt: "Image 2",
      width: 800,
      height: 520,
    },
    {
      src: "/img/danube/eleganz/gallery/3.webp",
      alt: "Image 1",
      width: 800,
      height: 520,
    },
    {
      src: "/img/danube/eleganz/gallery/1.webp",
      alt: "Image 2",
      width: 800,
      height: 520,
    },
    {
      src: "/img/danube/eleganz/gallery/4.webp",
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
        company={"Danube"}
        project={"Eleganz "}
        text={
          "In the heart of Dubai Maritime City, Oceanz by Danube offers unrivalled luxury."
        }
        price={"1.4M"}
      />
      <Title
        title={"ELEGANZ AT JVC"}
        subtitle={"Seaside living"}
        paragraph={`Ready to move in elegantly designed and fully-furnished 1 &
          2 bedroom Apartments, 2-bedroom Duplex Apartments
          and 4 - bedroom Townhouses.
          With a wide array of world-class amenities meticulously
          crafted to cater to luxurious living in the heart of Dubai,
          Eleganz by Danube is designed for those who seek a balanced
          lifestyle. Indulge in an unparalleled lifestyle, surrounded by
          breathtaking views, and a sense of prestige that sets this
          project apart.`}
      />
      {/* <Icons /> */}
      <Image
        src={second}
        width={2000}
        className="w-full h-[25rem] md:h-auto object-cover"
      />
      <Title
        title={`WHY        JUMEIRAH        VILLAGE CIRCLE?`}
        // subtitle={"INFINITE POSSIBILITIES"}
        paragraph={`Jumeirah Village Circle is one of Dubai’s most popular communities,
        offering a vibrant living experience and an elite lifestyle. This family-oriented
        community presents numerous advantages to its residents, including a
        convenient location, access to a variety of entertainment options, and a
        plethora of sports facilities, among other amenities.`}
      />
      <Gallery photos={photos} />
      <div className="relative ">
        <div className="absolute top-32 2xl:top-[35%] right-0 z-10 text-white text-right font-light mr-[5%] 2xl:mr-48">
          <h1 className=" text-4xl lg:text-6xl lg:leading-[4rem] ">
            ELEGANZ AT JVC
          </h1>
          <p className="w-10/12 md:w-2/4 2xl:w-2/5  lg:text-xl mt-6 ml-auto ">
            Experience the true essence of elegant living, where every moment is
            adorned with elegance and sophistication.
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
      <ProjectInfo price={"1.4M"} handover={"2027 3Q"} payment={"65/35"} />
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
