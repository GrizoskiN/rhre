import header from "@/../public/img/arada/mainheader.jpg";
import ellingtonlogo from "@/../public/img/damac/damaclogo.png";
import ContactForm from "@/components/contact/ContactForm";
import Title from "@/components/Projects/Title";
import Header from "@/components/developersSections/Header";
import AllProjects from "@/components/developersSections/allProjects";
import Head from "next/head";

export default function index() {
  const projects = [

    {
      id: 1,
      image: "/img/damac/projects/violet.jpg",
      title: "Violet",
      subtitle: "By DAMAC PROPERTIES",
      price: "AED 1.87M",
      address: "Damac Hills 2",
      text: "Discover the pinnacle of modern living with Violet at DAMAC Hills 2, the latest residential masterpiece by renowned DAMAC Properties.",
      link: "/damac/violet",
    },
    {
      id: 2,
      image: "/img/damac/projects/lagoons.jpg",
      title: "Lagoons",
      subtitle: "By DAMAC PROPERTIES",
      price: "AED 3M",
      address: "Lagoons",
      text: "DAMAC Lagoons is a residential complex that spans 45 million sq.ft. It is divided into eight Mediterranean-inspired ...",
      link: "/damac/lagoons",
    },
    {
      id: 3,
      image: "/img/damac/projects/autograph.jpg",
      title: "Autograph Collection",
      subtitle: "By DAMAC PROPERTIES",
      price: "AED 5.1M",
      address: "Damac Hills",
      text: "Autograph Collection is a new and highly-curated selection of exquisite villas in DAMAC Hills",
      link: "/damac/autograph",
    },
    {
      id: 4,
      image: "/img/damac/projects/heights.jpg",
      title: "Canal Heights",
      subtitle: "By DAMAC PROPERTIES",
      price: "AED 1.25M",
      address: "Business Bay",
      text: "A multiple award-winning giant in an incredible Business Bay location...",
      link: "/damac/heights",
    },
    {
      id: 5,
      image: "/img/damac/projects/heights2.jpg",
      title: "Canal Heights 2 ",
      subtitle: "By DAMAC PROPERTIES",
      price: "AED 1.25M",
      address: "Business Bay",
      text: "This development offers a range of living spaces, including studios, 1 & 2 bedroom apartments...",
      link: "/damac/heights-2",
    },
    {
      id: 6,
      image: "/img/damac/projects/crown.jpg",
      title: "Canal Crown",
      subtitle: "By DAMAC PROPERTIES",
      price: "AED 1.12M",
      address: "Business Bay",
      text: "Escape to the ultimate waterfront living experience at Canal Crown by Damac, a tranquil residence... ",
      link: "/damac/crown",
    },
    {
      id: 7,
      image: "/img/damac/projects/altitude.jpg",
      title: "Altitude",
      subtitle: "By DAMAC PROPERTIES",
      price: "AED 1.18M",
      address: "Business Bay",
      text: "Elevate your living standards at Damac Altitude de Grisogono, a symbol of Dubai's architectural innovation",
      link: "/damac/altitude",
    },
    
  ];

  return (
    <>
      <Head>
    <title>Damac Properties | RHRE | Dubai, UAE</title>
    <meta name="description" content="Rise High Real Estate - Your trusted partner for buying, selling, and leasing properties in Dubai, UAE. Explore luxury apartments, townhouses, and villas with us." />
    </Head>
    <div>
      <Header header={header} logo={ellingtonlogo} />
      <Title
        title={"DAMAC Properties"}
        subtitle={"You inspire us to do even better."}
        paragraph={
          "DAMAC Properties is part of DAMAC Group that has been shaping the Middle East's luxury real estate market since 1982, delivering iconic residential, commercial and leisure properties across the region and beyond. DAMAC adds vibrancy to the cities in which its projects are located, with a huge and diverse portfolio that includes skyscrapers, communities and branded residences. To date DAMAC has delivered c. 47,000 quality homes, with c. 33,000 more under way."
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
