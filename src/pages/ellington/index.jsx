import header from "@/../public/img/ellington/header.webp";
import ellingtonlogo from "@/../public/img/ellington/ellingtonlogo.png";
import ContactForm from "@/components/contact/ContactForm";
import Title from "@/components/Projects/Title";
import Header from "@/components/developersSections/Header";
import AllProjects from "@/components/developersSections/allProjects";
import Head from "next/head";

export default function index() {
  const projects = [
    // {
    //   id: 0,
    //   image: "/img/ellington/projects/clayton.webp",
    //   title: "Claydon House",
    //   subtitle: "By Ellington Realty",
    //   price: "AED 1.7M ",
    //   address: "Uptown Dubai",
    //   text: "Waterside decadence meets the rhythm of nature at  Claydon House, Ellington Properties’ latest residential  offering in Mohammed Bin Rashid City",
    //   link: "/ellington/clayton",
    // },
    // {
    //   id: 1,
    //   image: "/img/ellington/projects/mercer.webp",
    //   title: "Mercer House",
    //   subtitle: "By Ellington Realty",
    //   price: "AED 2.5M",
    //   address: "JLT North",
    //   text: "Set in a newly revitalised Uptown Dubai,  Mercer House celebrates a refreshed energy  whereby lives and lifestyles are enhanced  through creativity, design, wellness, and  entertainment",
    //   link: "/ellington/mercer",
    // },
    {
      id: 2,
      image: "/img/ellington/projects/oneriver.webp",
      title: "One Riverpoint",
      subtitle: "By Ellington Realty",
      price: "AED 2.8M",
      address: "Business bay",
      text: "Ellington Properties and Dutco are bringing     together a wealth of experience and expertise in       the development of One River Point.",
      link: "/ellington/oneriver",
    },
  ];

  return (
    <>
      <Head>
    <title>Ellington Properties | RHRE | Dubai, UAE</title>
    <meta name="description" content="Rise High Real Estate - Your trusted partner for buying, selling, and leasing properties in Dubai, UAE. Explore luxury apartments, townhouses, and villas with us." />
    </Head>
    <div>
      <Header header={header} logo={ellingtonlogo} />
      <Title
        title={"Ellington Realty"}
        subtitle={"prime real estate companies in Dubai"}
        paragraph={
          "Delivery quality projects to clients since 2014, Ellington Properties is one of the most prominent property developers in Dubai. It is known for creating luxury residential and commercial residences emphasizing modern design, quality craftsmanship and a commitment to sustainable practices. Joseph Thomas and Nitin Bhatnagar are the owners of Ellington Dubai, the name behind several award-winning developments in the emirate, including Ellington Beach House and Ocean House in Palm Jumeirah, DT1 in Downtown Dubai, Ellington House in Dubai Hills Estate and  Belgravia, Belgravia II, Belgravia Square and more in JVC."
        }
      />
      <div className="h-[1px] w-full bg-royal max-w-[1400px] m-auto"></div>
      <AllProjects project={projects} />
      <div className="w-full xl:w-2/3 m-auto">
        <ContactForm />
      </div>
    </div>
    </>
  );
}
