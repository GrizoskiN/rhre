import Gallery from "@/components/Projects/Gallery";
import HeaderImage from "@/components/Projects/HeaderImage";
import Title from "@/components/Projects/Title";
import Image from "next/image";
import header from "@/../public/img/meraas/acres-estates/header.jpg";
import second from "@/../public/img/meraas/acres-estates/second.jpg";
import third from "@/../public/img/meraas/acres-estates/third.jpg";
import fourth from "@/../public/img/meraas/acres-estates/fourth.jpg";
import Squares from "@/components/contact/Squares";
import Faq from "@/components/Projects/Faq";
import ContactForm from "@/components/contact/ContactForm";
import ProjectInfo from "@/components/Projects/ProjectInfo";
import acresqr from "@/../public/img/meraas/qr/acresqr.jpg";
import DownloadBrochureBtn from "@/components/Projects/DownloadBrochureBtn";
export default function Index() {
  const photos = [
    {
      src: "/img/meraas/acres-estates/gallery/5.jpg",
      alt: "Image 1",
      width: 600,
      height: 800,
    },
    {
      src: "/img/meraas/acres-estates/gallery/2.jpg",
      alt: "Image 2",
      width: 800,
      height: 520,
    },
    {
      src: "/img/meraas/acres-estates/gallery/3.jpg",
      alt: "Image 1",
      width: 800,
      height: 520,
    },
    {
      src: "/img/meraas/acres-estates/gallery/1.jpg",
      alt: "Image 2",
      width: 800,
      height: 520,
    },
    {
      src: "/img/meraas/acres-estates/gallery/4.jpg",
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
        project={"The Acres Estates"}
        text={
          "Exclusive standalone villas in Dubai developed by Meraas. An exclusive neighborhood, thoughtfully designed with nature in mind, where every step inside brings you closer to the outdoors."
        }
        price={"13.3M"}
      />
      <Title
        title={"Luxury Villas"}
        subtitle={" In Dubai's Green Oasis"}
        paragraph={
          "The Acres is perfectly positioned near some of Dubai’s most prestigious landmarks. Just a short 10-minute drive brings you to the bustling Global Village, where cultural experiences and entertainment await. The esteemed Dubai Polo and Equestrian Club, as well as the state-of-the-art Hamdan Sports Complex, are mere minutes away, offering residents world-class leisure and sporting opportunities right at their doorstep. This exceptional proximity to prominent areas ensures that life at The Acres is both luxurious and conveniently connected to the pulse of Dubai."
        }
      />
      {/* <Icons /> */}
      <Image
        src={second}
        width={2000}
        className="w-full h-[25rem] md:h-auto object-cover"
      />
      <Title
        title={"Where Homo Meets Nature"}
        // subtitle={"INFINITE POSSIBILITIES"}
        paragraph={
          "The Acres Estates is a luxury addition to The Acres by Meraas in Dubailand. Choose from a bespoke collection of 5-7 bedroom villas overlooking the green oasis."
        }
      />
      <Gallery photos={photos} />
      <div className="relative ">
        <div className="absolute top-32 2xl:top-[35%] right-0 z-10 text-white text-right font-light mr-[5%] 2xl:mr-48">
          <h1 className=" text-4xl lg:text-6xl lg:leading-[4rem] uppercase ">
          EVERYTHING
          YOU NEED<br /> TO keep creative.
          </h1>
          <p className="w-10/12 md:w-2/4 2xl:w-2/5  lg:text-xl mt-6 ml-auto ">
          The Acres Estates by Meraas includes a limited range of deluxe 5-7 villas in The Acres by Meraas, which is a nature-first sustainable villa community in Dubailand. The residences are divided into the Ivory Collection and Amber Collection.
          </p>
          <DownloadBrochureBtn />
        </div>

        <Image
          src={third}
          width={1000}
          quality={100}
          className="w-full h-[45rem] md:h-auto object-cover"
        />
      </div>
      <ProjectInfo price={"13.3M"} handover={2028} payment={"65/35"} qr={acresqr}/>
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
