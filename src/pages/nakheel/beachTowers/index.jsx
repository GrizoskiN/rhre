import Gallery from "@/components/Projects/Gallery";
import HeaderImage from "@/components/Projects/HeaderImage";
import Title from "@/components/Projects/Title";
import Image from "next/image";
import header from "@/../public/img/nakheel/beach/header.jpg";
import second from "@/../public/img/nakheel/beach/second.jpg";
import third from "@/../public/img/nakheel/beach/third.jpg";
import fourth from "@/../public/img/nakheel/beach/fourth.jpg";
import Squares from "@/components/contact/Squares";
import Faq from "@/components/Projects/Faq";
import ContactForm from "@/components/contact/ContactForm";
import ProjectInfo from "@/components/Projects/ProjectInfo";

export default function Index() {
  const photos = [
    {
      src: "/img/nakheel/beach/gallery/5.jpg",
      alt: "Image 1",
      width: 600,
      height: 800,
    },
    {
      src: "/img/nakheel/beach/gallery/2.jpg",
      alt: "Image 2",
      width: 800,
      height: 520,
    },
    {
      src: "/img/nakheel/beach/gallery/3.jpg",
      alt: "Image 1",
      width: 800,
      height: 520,
    },
    {
      src: "/img/nakheel/beach/gallery/1.jpg",
      alt: "Image 2",
      width: 800,
      height: 520,
    },
    {
      src: "/img/nakheel/beach/gallery/4.jpg",
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
        project={"Palm Beach"}
        text={
          "Open doors to a vibrant way of living at the Palm Beach    Towers, the amalgam of style and luxury that inspires a          fresh perspective on life"
        }
        price={"3.7M"}
      />
      <Title
        title={"Palm Beach Towers"}
        subtitle={"A vibrant way of living"}
        paragraph={
          "Open doors to a vibrant way of living at the Palm Beach          Towers, the amalgam of style and luxury that inspires a          fresh perspective on life. With the sound of the waves as          your backdrop, immerse yourself in the best the city has to          offer and e levate yo ur e very day."
        }
      />
      {/* <Icons /> */}
      <Image
        src={second}
        width={2000}
        className="w-full h-[25rem] md:h-auto object-cover"
      />
      <Title
        title={"Relax your        mind and body"}
        // subtitle={"INFINITE POSSIBILITIES"}
        paragraph={
          "Exceptional amenities centered around you allow you to break free from the          everyday and focus on what matters - nurturing our mind and body to be the best it          can be. Meditate in the serenity of our yoga area, work out in the state-of-the-art gym          or spoil yourself in our exceptional spa facilities; it’s all about you."
        }
      />
      <Gallery photos={photos} />
      <div className="relative ">
        <div className="absolute top-32 2xl:top-[35%] right-0 z-10 text-white text-right font-light mr-[5%] 2xl:mr-48">
          <h1 className=" text-4xl lg:text-6xl lg:leading-[4rem] ">
            Wake up to
            <br /> fresh perspective
          </h1>
          <p className="w-10/12 md:w-2/4 2xl:w-3/4  lg:text-xl mt-6 ml-auto ">
            Come home to the exceptional every day at the Palm Beach Towers,
            with a wide range of world-class amenities that are tailored to
            complement your life, the way you want to live it.
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
      <ProjectInfo price={"AED 3.7M"} handover={2026} payment={"60/40"} />
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
