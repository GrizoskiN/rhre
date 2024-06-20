import header from "@/../public/img/meraas/header.webp";
import meraaslogo from "@/../public/img/meraas/meraaslogo.png";
import ContactForm from "@/components/contact/ContactForm";
import Title from "@/components/Projects/Title";
import Header from "@/components/developersSections/Header";
import AllProjects from "@/components/developersSections/allProjects";

export default function index() {
  const projects = [
    {
      id: 0,
      image: "/img/meraas/projects/arces.webp",
      title: "The Acres",
      subtitle: "By Meraas Realty",
      price: "AED 5.01M",
      address: "Business Bay",
      text: "Welcome to The Acres, a brand-new community of standalone villas featuring impeccable surroundings enveloped by nature. ",
      link: "/meraas/acres",
    },
    {
      id: 1,
      image: "/img/meraas/projects/design.webp",
      title: "Design Quarter",
      subtitle: "By Meraas Realty",
      price: "AED 2.5M",
      address: "Dubai Sports City",
      text: "A come-as-you-are creative space where industry experts and local      entrepreneurs connect, create and collaborate.",
      link: "/meraas/design",
    },
  ];

  return (
    <div>
      <Header header={header} logo={meraaslogo} />
      <Title
        title={"Meraas Realty"}
        subtitle={"We think globally"}
        paragraph={
          "Meraas is committed to creating and consistently delivering world-class real estate projects and master developments that strengthen Dubai's position as the global real estate investment destination of choice. Our cutting-edge portfolio comprises of leading developments such as City Walk Residences, Bluewaters Residences, Nikki Beach Residences, Bvlgari Residences, Port de La Mer, La Mer Maisons, Jumeirah Bay, Cherrywoods and many more."
        }
      />
      <div className="h-[1px] w-full bg-royal max-w-[1400px] m-auto"></div>
      <AllProjects project={projects} />
      <div className="w-full max-w-[1200px] m-auto">
        <ContactForm />
      </div>
    </div>
  );
}
