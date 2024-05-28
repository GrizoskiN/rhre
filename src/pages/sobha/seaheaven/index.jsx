import Gallery from "@/components/Projects/Gallery";
import HeaderImage from "@/components/Projects/HeaderImage";
import img from "@/../public/img/sobha/seaheaven/header.jpg";
import Title from "@/components/Projects/Title";
import Icons from "@/components/Projects/Icons";
import Image from "next/image";
import one from "@/../public/img/sobha/seaheaven/second.webp";
import comfort from "@/../public/img/sobha/seaheaven/third.webp";
import seaheavenqr from "@/../public/img/sobha/qr/seahevenqr.jpg";
import Squares from "@/components/contact/Squares";
import Faq from "@/components/Projects/Faq";
import ContactForm from "@/components/contact/ContactForm";
import ProjectInfo from "@/components/Projects/ProjectInfo";
import DownloadBrochureBtn from "@/components/Projects/DownloadBrochureBtn";
import Head from "next/head";

export default function Index() {
  const photos = [
    {
      src: "/img/sobha/seaheaven/gallery/5.jpg",
      alt: "Image 1",
      width: 600,
      height: 800,
    },
    {
      src: "/img/sobha/seaheaven/gallery/2.jpg",
      alt: "Image 2",
      width: 800,
      height: 520,
    },
    {
      src: "/img/sobha/seaheaven/gallery/3.jpg",
      alt: "Image 1",
      width: 800,
      height: 520,
    },
    {
      src: "/img/sobha/seaheaven/gallery/1.jpg",
      alt: "Image 2",
      width: 800,
      height: 520,
    },
    {
      src: "/img/sobha/seaheaven/gallery/4.jpg",
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
      text: "Reselling a property in Dubai after key delivery can be highly profitable. With property values appreciating by 15% annually on average, it's a smart move for investors looking to capitalize on market growth. A newly handed-over property is often more attractive to buyers, ensuring you get the best possible price. Utilizing a real estate agency to handle the sale can streamline the process, ensuring a hassle-free transaction while you enjoy the returns on your investment.",
    },
    {
      id: 2,
      title: "Flip deal",
      text: "A flip deal involves buying a property, renovating it, and selling it for a profit. In Dubai, this strategy can yield substantial returns due to the city's booming real estate market. The key to a successful flip deal is choosing the right property and making cost-effective improvements that significantly boost its market value. By partnering with experienced contractors and real estate agents, you can maximize your profits while minimizing the time your investment is tied up.",
    },
    {
      id: 3,
      title: "Investment for living in Dubai",
      text: "Investing in property to live in Dubai offers both a luxurious lifestyle and potential financial gains. With world-class amenities, vibrant communities, and a cosmopolitan environment, Dubai is an attractive destination for expatriates and locals alike. Owning a home in Dubai not only provides a stable living environment but also positions you to benefit from the city's growing property market. Enjoy the benefits of a high-quality lifestyle while your property's value appreciates over time.",
    },
  ];

  return (
    <>
    <Head>
    <title>Sobha Realty - Sea Heaven | RHRE | Dubai, UAE</title>
    <meta name="description" content="Rise High Real Estate - Your trusted partner for buying, selling, and leasing properties in Dubai, UAE. Explore luxury apartments, townhouses, and villas with us." />
    </Head>
      <HeaderImage
        header={img}
        company={"Sobha"}
        project={"Seahaven"}
        text={
          "Sobha Realty redefines the concept of luxury residential living with a repertoire of real estate projects across Dubai."
        }
        price={"3.18M"}
      />
      <Title
        title={"The Enduring"}
        subtitle={"LEGACY OF SUCCESS"}
        paragraph={
          "With razor-sharp focus on quality and innovation, it has created a plethora of iconic spaces such as extravagant palaces, ornate  mosques, cutting edge campuses and ultra-luxurious communities with grand villas and apartments."
        }
      />
      <Icons />
      <Image
        src={one}
        width={2000}
        className="w-full h-[25rem] md:h-auto object-cover"
      />
      <Title
        title={"The Window To"}
        subtitle={"INFINITE POSSIBILITIES"}
        paragraph={
          "With an open canvas of 3.47 million square feet, the villas create a disruptive optic of a non-linear streetscape.          Framed in a curvilinear design, the residences are further enhanced with          tree-lined sidewalks and foliaged lanes"
        }
      />
      <Gallery photos={photos} />
      <ProjectInfo
        price={"3.18M"}
        handover={2027}
        payment={"60/40 "}
        qr={seaheavenqr}
      />
      <div className="relative ">
        <div className="absolute top-32 2xl:top-[35%] right-0 z-10 text-white text-right font-light mr-[5%] 2xl:mr-48">
          <h1 className=" text-4xl lg:text-6xl lg:leading-[4rem] ">
            WHERE COMFORT AND <br /> EXTRAVAGANCE MEET
          </h1>
          <p className="w-10/12 md:w-2/4 2xl:w-2/5  lg:text-xl mt-6 ml-auto ">
            Life at Sobha Hartland II embodies an exultant sense of connection
            in a close-knit community and superior quality homes crafted for the
            discerning eye.
          </p>
          <DownloadBrochureBtn />
        </div>

        <Image
          src={comfort}
          width={1000}
          quality={100}
          className="w-full h-[45rem] md:h-auto object-cover"
        />
      </div>

      <Squares  />
      <Faq />

      <div className="w-full lg:w-2/3 m-auto">
        <ContactForm />
      </div>
    </>
  );
}
