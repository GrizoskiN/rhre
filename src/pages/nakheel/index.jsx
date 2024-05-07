import header from "@/../public/img/nakheel/header.jpg";
import nakheellogo from "@/../public/img/nakheel/logo.png";
import ContactForm from "@/components/contact/ContactForm";
import Title from "@/components/Projects/Title";
import Header from "@/components/developersSections/Header";
import AllProjects from "@/components/developersSections/allProjects";

export default function index() {
  const projects = [
    {
      id: 0,
      image: "/img/nakheel/projects/naya.jpg",
      title: "Naya Residences",
      subtitle: "By Nakheel",
      price: "AED 1.55M",
      address: "District 1",
      text: "Naya District One is a truly remarkable residential development that redefines the concept of luxurious living in Dubai. ",
      link: "/nakheel/naya",
    },
    {
      id: 1,
      image: "/img/nakheel/projects/como.jpg",
      title: "Como Residences",
      subtitle: "By Nakheel",
      price: "AED 21M",
      address: "Palm Jumeirah",
      text: "Como Residences is a new exclusive residential development set to redefine the skyline of Palm Jumeirah...",
      link: "/nakheel/como",
    },
    {
      id: 2,
      image: "/img/nakheel/projects/palm.jpg",
      title: "Palm Jebel Ali",
      subtitle: "By Nakheel",
      price: "AED 18M",
      address: "Jebel Ali",
      text: "The new, futuristic Palm Jebel Ali will raise the global benchmark in waterfront living, featuring extensive green spaces and luxury lifestyle amenities.",
      link: "/nakheel/palm",
    },
    {
      id: 3,
      image: "/img/nakheel/projects/rixos.jpg",
      title: "Rixos Residences",
      subtitle: "By Nakheel",
      price: "AED 2.5M",
      address: "Dubai Islands",
      text: "New waterfront development offers a resort lifestyle in a curated and relaxed setting situated in a secluded cove on Dubai Islands...",
      link: "/nakheel/rixos",
    },
    {
      id: 4,
      image: "/img/nakheel/projects/palmbeach.jpg",
      title: "Palm Beach Towers",
      subtitle: "By Nakheel",
      price: "AED 3.7M ",
      address: "Palm Jumeirah",
      text: "Open doors to a vibrant way of living at the Palm Beach Towers, the amalgam of style and luxury that inspires a      fresh perspective on life.",
      link: "/nakheel/beachTowers",
    },
    {
      id: 5,
      image: "/img/nakheel/projects/bay.jpg",
      title: "Bay Villas",
      subtitle: "By Nakheel",
      price: "AED 7.5M ",
      address: "Dubai Sports City",
      text: "Experience the lifestyle in an exclusive management loaded with magnificent surroundings and premium features of entertainment from...",
      link: "/nakheel/bayVillas",
    },
  ];

  return (
    <div>
      <Header header={header} logo={nakheellogo} />
      <Title
        title={"We are Nakheel"}
        subtitle={"Dubai Holding"}
        paragraph={
          "Dubai-based Nakheel, a member of Dubai Holding, is a world-leading master developer whose innovative, landmark projects form an iconic portfolio of master communities and residential, retail, hospitality and leisure developments that are pivotal to realising Dubai’s vision. Nakheel’s waterfront projects, including the world-famous, award-winning Palm Jumeirah, have added more than 300 kilometres to Dubai’s original, 70km coastline, paving the way for the development of hundreds of seafront homes, resorts, hotels and attractions."
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
