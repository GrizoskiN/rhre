import header from "@/../public/img/danube/header.webp";
import danubelogo from "@/../public/img/danube/danubelogo.png";
import ContactForm from "@/components/contact/ContactForm";
import Title from "@/components/contact/Projects/Title";
import Header from "@/components/developersSections/Header";
import AllProjects from "@/components/developersSections/allProjects";

export default function index() {
  const projects = [
    {
      id: 0,
      image: "/img/danube/projects/bayz.webp",
      title: "Bayz 101",
      subtitle: "by Danube Properties",
      price: "AED 1.7M ",
      address: "Business Bay",
      text: "Immerse yourself in a world where every moment is a       celebration and every detail is designed to enhance your       living experience... ",
      link: "/danube/bayz",
    },
    {
      id: 1,
      image: "/img/danube/projects/sportz.webp",
      title: "Sportz",
      subtitle: "by Danube Properties",
      price: "AED 2.5M",
      address: "Dubai Sports City",
      text: "Located in a vibrant and dynamic community, Sportz by Danube offers an unparalleled residential experience enriched with a diverse array of sporting amenities,...",
      link: "/danube/sportz",
    },
    {
      id: 2,
      image: "/img/danube/projects/oceanz.webp",
      title: "Oceanz",
      subtitle: "by Danube Properties",
      price: "AED 2.8M",
      address: "Dubai Maritime City",
      text: "Danube Oceanz offers a variety of studios and one- to three-bedroom apartments with private pools and elegant office spaces to suit your refined preferences...",
      link: "/danube/oceanz",
    },
    {
      id: 3,
      image: "/img/danube/projects/eleganz.webp",
      title: "Eleganz",
      subtitle: "by Danube Properties",
      price: "AED 2.5M",
      sign: "Ready!!!",
      address: "Jumeirah Village Circle",
      text: "In the heart of Dubai Maritime City, Oceanz by Danube offers unrivalled luxury...",
      link: "/danube/eleganz",
    },
  ];

  return (
    <div>
      <Header header={header} logo={danubelogo} />
      <Title
        title={"Danube Realty"}
        subtitle={"THE PLACE TO BE"}
        paragraph={
          "Established in the year 1993, Danube Group was founded          and cultivated under the leadership of Rizwan Sajan, who          is the known to be the Founder and Chairman of the          Group. Starting off as a small trading firm, the company is          moving from strength-to-strength, expanding its foothold          in the region, and has established itself as the No. 1          building Materials Company along with other branches          under its vast umbrella. In 2019, the company recorded a          turnover of USD 1.3 billion and has been growing ever          since. Moreover, Rizwan Sajan was ranked 12th among the          ‘Top 100 Indian leaders in the UAE’ List by Forbes Middle          East."
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
