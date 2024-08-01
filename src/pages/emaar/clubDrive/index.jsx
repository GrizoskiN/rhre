import Gallery from "@/components/Projects/Gallery";
import HeaderImage from "@/components/Projects/HeaderImage";
import Title from "@/components/Projects/Title";
import Image from "next/image";
import header from "@/../public/img/emaar/clubdrive/header.jpg";
import second from "@/../public/img/emaar/clubdrive/second.jpg";
import third from "@/../public/img/emaar/clubdrive/third.jpg";
import fourth from "@/../public/img/emaar/clubdrive/fourth.jpg";
import oneqr from "@/../public/img/emaar/qr/clubdriveqr.jpg";
import Squares from "@/components/contact/Squares";
import Faq from "@/components/Projects/Faq";
import ContactForm from "@/components/contact/ContactForm";
import ProjectInfo from "@/components/Projects/ProjectInfo";
import DownloadBrochureBtn from "@/components/Projects/DownloadBrochureBtn";
import Head from "next/head";

export default function Index() {
  const photos = [
    {
      src: "/img/emaar/clubdrive/gallery/5.jpg",
      alt: "Image 1",
      width: 600,
      height: 800,
    },
    {
      src: "/img/emaar/clubdrive/gallery/2.jpg",
      alt: "Image 2",
      width: 800,
      height: 520,
    },
    {
      src: "/img/emaar/clubdrive/gallery/3.jpg",
      alt: "Image 1",
      width: 800,
      height: 520,
    },
    {
      src: "/img/emaar/clubdrive/gallery/1.jpg",
      alt: "Image 2",
      width: 800,
      height: 520,
    },
    {
      src: "/img/emaar/clubdrive/gallery/4.jpg",
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
    <Head>
    <title>Emaar Properties - Club Drive | RHRE | Dubai, UAE</title>
    <meta name="description" content="Rise High Real Estate - Your trusted partner for buying, selling, and leasing properties in Dubai, UAE. Explore luxury apartments, townhouses, and villas with us." />
    </Head>
      <HeaderImage
        header={header}
        company={"Emaar"}
        project={"Club Drive"}
        text={
          "Come home to Dubai’s most exclusive island, located within the new maritime centre of the UAE, Dubai Harbour"
        }
        price={"1.5M"}
      />
      <Title
        title={"CLUB DRIVE"}
        subtitle={"AT DUBAI HILLS ESTATE"}
        paragraph={
          "This green, family-centric area, rich in simplicity and elegance, effortlessly connects residents to conveniences. Situated along the Northern Boulevard, Club Drive is a tranquil urban pocket of Dubai, yet city centre attractions are moments away. Here, you're near premium healthcare, educational centres, a central park, a leading golf course, and the expansive Dubai Hills Mall."
        }
      />
      {/* <Icons /> */}
      <Image
        src={second}
        width={2000}
        className="w-full h-[25rem] md:h-auto object-cover"
      />
      <Title
        title={"Experience luxury"}
        // subtitle={"INFINITE POSSIBILITIES"}
        paragraph={
          " Strategically positioned, yet distant from the city's hustle. Thanks to Al Khail Road, Downtown Dubai and major hubs are minutes away and soon, Etihad Rail and Dubai Metro will offer swift airport and emirate connections."
        }
      />
      <Gallery photos={photos} />
      <div className="relative ">
        <div className="absolute top-32 2xl:top-[35%] right-0 z-10 text-white text-right font-light mr-[5%] 2xl:mr-48">
          <h1 className=" text-2xl font-bold  w-10/12 md:w-2/3 ml-auto">
          Experience the serene ambiance of Dubai Hills Estate's verdant landscapes and expansive open areas when you return to Club Drive
          </h1>
       
          <DownloadBrochureBtn />
        </div>

        <Image
          src={third}
          width={1000}
          quality={100}
          className="w-full h-[45rem] md:h-auto object-cover"
        />
      </div>
      <ProjectInfo
        price={"1.5M"}
        handover={"2028"}
        payment={"90/10"}
        qr={oneqr}
      />
      <Image
        src={fourth}
        width={2000}
        className="w-full h-[25rem] md:h-auto object-cover"
      />

      <Squares  />
      <Faq />

      <div className="w-full xl:w-2/3 m-auto">
        <ContactForm />
      </div>
    </>
  );
}
