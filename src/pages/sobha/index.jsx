import header from "@/../public/img/sobha/header.webp";
import sobhalogo from "@/../public/img/sobha/sobhalogo.png";
import ContactForm from "@/components/contact/ContactForm";
import Title from "@/components/Projects/Title";
import Header from "@/components/developersSections/Header";
import AllProjects from "@/components/developersSections/allProjects";
import Head from "next/head";

export default function index() {
  const projects = [
    {
      id: 0,
      image: "/img/sobha/projects/riverside.webp",
      title: "Riverside Crescent",
      subtitle: "By Sobha Realty",
      price: "AED 1.57M",
      address: "Sobha Hartland 2",
      text: "Sobha Reserve is a holistic community with all essential amenities to enhance your quality of life, it is your one-stop destination to the best in wellness, comfort, and leisure.",
      link: "/sobha/hartland2",
    },
    {
      id: 1,
      image: "/img/sobha/projects/reserve.webp",
      title: "Reserve",
      subtitle: "By Sobha Realty",
      price: "AED 11.5M",
      address: "Wadi Al Safa 5",
      text: "Embark on a waterfront lifestyle of beauty and tranquility. The tower stands poised with unparalleled views of the  clear waters and captivating illuminations of the city.",
      link: "/sobha/reserve",
    },
    {
      id: 2,
      image: "/img/sobha/projects/seaheaven.webp",
      title: "Sea Heaven",
      subtitle: "By Sobha Realty",
      price: "AED 3.18M",
      address: "Dubai Harbour",
      text: "Bringing Sobha SeaHaven - the latest launch at At Dubai Marina by Sobha Group offering 1 to 4 bedroom waterfront apartments with iconic views of the Palm Jumeirah",
      link: "/sobha/seaheaven",
    },
    {
      id: 3,
      image: "/img/sobha/projects/verde.webp",
      title: "Verde at Jumeirah Lakes Towers",
      subtitle: "By Sobha Realty",
      price: "AED 1.59M",
      address: "Jumeirah Lake Towers",
      text: "One of Dubai’s most desirable communities, Jumeirah Lakes Towers, provides a new way to live. This region is bordered by tranquil lakes, thriving residential complexes...",
      link: "/sobha/verde",
    },
      {
        id:4,
        image:"/img/sobha/projects/orbis.webp",
        title:"Sobha Orbis",
        subtitle:"By Sobha Realty",
        price: "AED 1.17M",
        address: "Motor City",
        text: "Introducing Sobha Orbis: Luxury Living Redefined. Elevate your lifestyle with Sobha Orbis, a prestigious residential development nestled in a prime location in Motor City..",
        link: "/sobha/orbis",
    },
    {
      id: 5,
      image: "/img/sobha/projects/one.webp",
      title: "Sobha One",
      subtitle: "By Sobha Realty",
      price: "AED 1.17M",
      address: "Ras Al Khor",
      text: "Embark on a waterfront lifestyle of beauty and tranquility. The tower stands poised with unparalleled views of the  clear waters and captivating illuminations of the city.",
      link: "/sobha/one",
    },
  ];

  return (
    <>
    <Head>
    <title>Sobha Realty | RHRE | Dubai, UAE</title>
    <meta name="description" content="Rise High Real Estate - Your trusted partner for buying, selling, and leasing properties in Dubai, UAE. Explore luxury apartments, townhouses, and villas with us." />
    </Head>
    <div>
      <Header header={header} logo={sobhalogo} />
      <Title
        title={"Sobha Realty"}
        subtitle={"LEGACY OF SUCCESS"}
        paragraph={
          "Established in India in 1995, Sobha Properties Dubai is the name behind numerous residential and commercial projects in Dubai. The luxury property development company is renowned for its dedication to crafting meticulously designed apartments and villas that foster a lifestyle characterized by luxury and tranquility. Sobha Properties prioritizes upholding the highest quality standards throughout every development phase.  Creek Vistas Reserve, Gardenia Villas, Forest Villas, One Park Avenue and Hartland Greens Apartment are some of the most prominent developments in the city's top area."
        }
      />
      <div className="h-[1px] w-full bg-royal max-w-[1400px] m-auto"></div>
      <AllProjects project={projects} />
      <div className="w-full max-w-[1200px] m-auto">
        <ContactForm />
      </div>
    </div>
    </>
  );
}
