import Gallery from "@/components/Projects/Gallery";
import HeaderImage from "@/components/Projects/HeaderImage";
import Title from "@/components/Projects/Title";
import Image from "next/image";
import header from "@/../public/img/danube/sportz/header.webp";
import second from "@/../public/img/danube/sportz/second.webp";
import third from "@/../public/img/danube/sportz/third.webp";
import fourth from "@/../public/img/danube/sportz/fourth.webp";
import sportzqr from "@/../public/img/danube/qr/sportzqr.jpg";
import Squares from "@/components/contact/Squares";
import Faq from "@/components/Projects/Faq";
import ContactForm from "@/components/contact/ContactForm";
import ProjectInfo from "@/components/Projects/ProjectInfo";
import DownloadBrochureBtn from "@/components/Projects/DonwloadBrochureBtn";

export default function Index() {
  const photos = [
    {
      src: "/img/danube/sportz/gallery/5.webp",
      alt: "Image 1",
      width: 600,
      height: 800,
    },
    {
      src: "/img/danube/sportz/gallery/2.webp",
      alt: "Image 2",
      width: 800,
      height: 520,
    },
    {
      src: "/img/danube/sportz/gallery/3.webp",
      alt: "Image 1",
      width: 800,
      height: 520,
    },
    {
      src: "/img/danube/sportz/gallery/1.webp",
      alt: "Image 2",
      width: 800,
      height: 520,
    },
    {
      src: "/img/danube/sportz/gallery/4.webp",
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
        project={"Sportz "}
        text={
          "Sportz by Danube is a revolutionary new real estate project that redefines urban living through sports"
        }
        price={"1M"}
      />
      <Title
        title={"Sportz"}
        subtitle={"Sports City, DUBAI"}
        paragraph={`Located in a vibrant and dynamic community, Sportz by Danube offers an unparalleled residential experience enriched with a diverse array of sporting amenities, including state-of-the-art fitness centers, Olympic-size swimming pools, athletic concourses, and jogging tracks. It also features more unique offerings such as tennis courts, badminton, paddle, squash courts, and indoor basketball facilities.`}
      />
      {/* <Icons /> */}
      <Image
        src={second}
        width={2000}
        className="w-full h-[25rem] md:h-auto object-cover"
      />
      <Title
        title={`COME HOME TO PLAY`}
        // subtitle={"INFINITE POSSIBILITIES"}
        paragraph={`Sportz by Danube is perfect for those who want to live an active and healthy lifestyle. With its convenient location and excellent amenities, its the perfect place to call home.`}
      />
      <Gallery photos={photos} />
      <div className="relative ">
        <div className="absolute top-32 2xl:top-[35%] right-0 z-10 text-white text-right font-light mr-[5%] 2xl:mr-48">
          <h1 className=" text-4xl lg:text-6xl lg:leading-[4rem] ">
            WHERE AESTHETICS MEETS ATHLETICS
          </h1>

         <DownloadBrochureBtn/>
        </div>

        <Image
          src={third}
          width={1000}
          quality={100}
          className="w-full h-[45rem] md:h-auto object-cover"
        />
      </div>
      <ProjectInfo
        price={"1M"}
        handover={"2027"}
        payment={"65/35"}
        qr={sportzqr}
      />
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
