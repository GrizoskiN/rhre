import header from "@/../public/img/emaar/projects/header.jpg";
import emaarlogo from "@/../public/img/emaar/logo.svg";
import ContactForm from "@/components/contact/ContactForm";
import Title from "@/components/Projects/Title";
import Header from "@/components/developersSections/Header";
import AllProjects from "@/components/developersSections/allProjects";

export default function index() {
  const projects = [
    {
      id: 0,
      image: "/img/emaar/projects/seapoint.jpg",
      title: "Seapoint",
      subtitle: "By Emaar Properties",
      price: "AED 2.95M",
      address: "Dubai Harbour",
      text: "Come home to Dubai’s most exclusive island, located within the new maritime centre of the UAE, Dubai Harbour",
      link: "/emaar/seapoint",
    },
    {
      id: 1,
      image: "/img/emaar/projects/club.jpg",
      title: "Club Dive",
      subtitle: "By Emaar Properties",
      price: "AED 1.5M",
      address: "Northern Boulevard",
      text: "Discover a sanctuary where nature’s elegance meets the grandeur of a sprawling golf landscape.",
      link: "/emaar/clubDrive",
    },
    {
      id: 2,
      image: "/img/emaar/projects/bayview.jpg",
      title: "Bayview",
      subtitle: "By Emaar Properties",
      price: "AED 2.9M",
      address: "Dubai Harbour",
      text: "A come-as-you-are creative space where industry experts and local      entrepreneurs connect, create and collaborate.",
      link: "/emaar/bayview",
    },
    {
      id: 3,
      image: "/img/emaar/projects/mangrove.jpg",
      title: "Mangrove",
      subtitle: "By Emaar Properties",
      price: "AED 1.48M  ",
      address: "Dubai Harbour",
      text: "Mangrove is a collection of 1-, 2- and 3-bedroom apartments adjacent to a lush park, with unmatching views of the Creek.",
      link: "/emaar/mangrove",
    },
    {
      id: 4,
      image: "/img/emaar/projects/valo.jpg",
      title: "Valo",
      subtitle: "By Emaar Properties",
      price: "AED 1.79M",
      address: "Dubai Harbour",
      text: "Valo embodies contemporary sophistication, providing an exclusive blend of luxury, convenience, and distinctive urban charm.",
      link: "/emaar/valo",
    },
    {
      id: 5,
      image: "/img/emaar/projects/oria.jpg",
      title: "Oria",
      subtitle: "By Emaar Properties",
      price: "AED 1.6M",
      address: "Dubai Harbour",
      text: "Oria Emaar Dubai offers a selection of 1 to 3 Bedroom Apartments with timeless elegance and modern designs...",
      link: "/emaar/oria",
    },
    {
      id: 6,
      image: "/img/emaar/projects/marjan.jpg",
      title: "Address Residences Al Marjan Island",
      subtitle: "By Emaar Properties",
      price: "AED 1.73M",
      address: "Al Marjan Island",
      text: "Experience the epitome of luxury living at Emaar Address Residences Al Marjan Island...",
      link: "/emaar/marjan",
    },
    {
      id: 7,
      image: "/img/emaar/projects/greenside.jpg",
      title: "Greenside Residence",
      subtitle: "By Emaar Properties",
      price: "AED 1.4M",
      address: "Dubai Hills",
      text: "Greenside Residence embodies luxury and comfort in the picturesque Dubai Hills Estate",
      link: "/emaar/greenside",
    },
  ];

  return (
    <div>
      <Header header={header} logo={emaarlogo} />
      <Title
        title={"Emaar Properties"}
        subtitle={"PREMIUM PROPERTIES"}
        paragraph={
          "Our properties, located in prime areas, boast unique designs and aspirational lifestyles within vibrant Emaar communities, all seamlessly managed by Emaar Community Management's dedicated team."
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
