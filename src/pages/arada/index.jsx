import header from "@/../public/img/arada/mainheader.jpg";
import ellingtonlogo from "@/../public/img/arada/logo.png";
import ContactForm from "@/components/contact/ContactForm";
import Title from "@/components/Projects/Title";
import Header from "@/components/developersSections/Header";
import AllProjects from "@/components/developersSections/allProjects";
import Head from "next/head";

export default function index() {
  const projects = [

    {
      id: 2,
      image: "/img/arada/armani.jpg",
      title: "Armani Beach",
      subtitle: "By Arada",
      price: "AED 23M",
      address: "Palm Jumeirah Dubai",
      text: "Setting a new standard for ultra-luxury living, Armani Beach Residences at Palm Jumeirah is located on the shores of Dubai’s famous manmade islands, one of the world’s most exclusive residential neighborhoods.",
      link: "/arada/armani",
    },
  ];

  return (
    <>
      <Head>
    <title>Arada | RHRE | Dubai, UAE</title>
    <meta name="description" content="Rise High Real Estate - Your trusted partner for buying, selling, and leasing properties in Dubai, UAE. Explore luxury apartments, townhouses, and villas with us." />
    </Head>
    <div>
      <Header header={header} logo={ellingtonlogo} />
      <Title
        title={"Armani Beach Residences"}
        subtitle={"Discover a world of timeless elegance."}
        paragraph={
          "The magnificent elevated entry experience sets the tone, providing residents with extravagant ocean views from a range of angles. Throughout the building, the interplay of light and shadow amplifies a series of stylish design elements, including the overhanging arch and the many water features and pools."
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
