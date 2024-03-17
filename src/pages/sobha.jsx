import { useEffect, useState, useRef } from "react";
import Gallery from "@/components/contact/Projects/Gallery";
import HeaderImage from "@/components/contact/Projects/HeaderImage";
import img from "@/../public/img/sobha/header.webp";
import bedroom from "@/../public/img/sobha/gallery/1bed.jpg";
import bedroom2 from "@/../public/img/sobha/gallery/1beds.jpg";
import bedrooms from "@/../public/img/sobha/gallery/2bed.jpg";
import Title from "@/components/contact/Projects/Title";
import Icons from "@/components/contact/Projects/Icons";
import Image from "next/image";
import sobha from "@/../public/img/sobha/sobha.jpg";
import comfort from "@/../public/img/sobha/comfort.jpg";
import home from "@/../public/img/sobha/home.jpg";
import Apartments from "@/components/contact/Projects/Apartments";
import HoverCarousel from "@/components/contact/HoverCarousel";
import Squares from "@/components/contact/Squares";
import luxury from "@/../public/img/sobha/gallery/luxury.jpg";
import amenities from "@/../public/img/sobha/gallery/amenities.jpg";
import lifestyle from "@/../public/img/sobha/gallery/lifestyle.jpg";
import prime from "@/../public/img/sobha/gallery/prime.jpg";
import views from "@/../public/img/sobha/gallery/views.jpg";
import living from "@/../public/img/sobha/gallery/living.jpg";
import Faq from "@/components/contact/Projects/Faq";

import NewsCarousel from "@/components/contact/Projects/NewsCarousel";
const Sobha = () => {
  const photos = [
    {
      src: "/img/sobha/gallery/5.jpg",
      alt: "Image 1",
      width: 600,
      height: 800,
    },
    {
      src: "/img/sobha/gallery/2.jpg",
      alt: "Image 2",
      width: 800,
      height: 520,
    },
    {
      src: "/img/sobha/gallery/3.jpg",
      alt: "Image 1",
      width: 800,
      height: 520,
    },
    {
      src: "/img/sobha/gallery/1.jpg",
      alt: "Image 2",
      width: 800,
      height: 520,
    },
    {
      src: "/img/sobha/gallery/4.jpg",
      alt: "Image 2",
      width: 800,
      height: 517,
    },
  ];
  const image = img;
  const clients = [
    { id: 0, name: "1 Bedroom", area: "496 – 848 SQ FT", image: bedroom },
    { id: 1, name: "1.5 Bedroom", area: "639 – 737 SQ FT", image: bedroom2 },
    { id: 2, name: "2 Bedroom", area: "944 – 1135 SQ FT", image: bedrooms },
  ];
  const services = [
    {
      id: 0,
      text1: `Waterfront Luxury`,
      address2:
        "Experience waterfront living at its finest with 1 to 3-bedroom apartments offering stunning views and elegant design.",
      img: luxury,
    },
    {
      id: 1,
      text1: `Prime Dubai Location`,
      address2:
        "Situated in Sobha Hartland 2, enjoy easy access to Downtown Dubai, schools, shopping and more.",
      img: prime,
    },
    {
      id: 2,
      text1: `Breathtaking Views`,
      address2:
        "Every floor offers clear vistas of the community, Dubai Al Ain Road, and shimmering city lights.",
      img: views,
    },
    {
      id: 3,
      text1: `Tranquil Waterside Living`,
      address2:
        "Embrace a serene coexistence with water elements, offering waterfront views and peaceful surroundings.",
      img: living,
    },
    {
      id: 4,
      text1: `World-Class Amenities`,
      address2:
        "Access a range of exceptional amenities including a pool, fitness center, and beautifully landscaped gardens.",
      img: amenities,
    },
    {
      id: 5,
      text1: `Elevated Lifestyle`,
      address2:
        "Embody elegance and sophistication in this high-rise tower, where luxury living meets unparalleled convenience.",
      img: lifestyle,
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

  const items = [
    {
      id: 0,
      title: "What taxes do I have to pay?",
      text: "When you purchase a property, you pay a one-time fee of 4% of its price to the Dubai Land Department (DLD). You do not pay any taxes on profits when you decide to sell the property. The entire return on the property’s appreciation is yours!",
    },
   
    {
      id: 1,
      title: "How can I pay for the property?",
      text: "Several payment options are available for purchasing a property in the Riverside Crescent project. You can pay in cash, use cryptocurrencies, credit cards, or make a bank transfer. In Dubai, there is no limit on the amount of cash, and there is no need to declare the source of the funds. Important: the payment goes directly to the construction company and not through the real estate agent!"
    },
    {
      id: 2,
      title: "If I invest in the project, will I be the owner of the property?",
      text: "Yes, definitely. When you purchase the property, you become the owner of the property and the land forever until you decide to sell it. In 2006, the government approved full ownership for all foreigners in 33 free trade zones in Dubai. After completing the registration of the property at the Dubai Land Department (DLD), you will receive a deed of ownership of the property directly to your email address.",
    },
    {
      id: 3,
      title: "Is my money in a safe place?",
      text: "The funds you transfer to the construction company are held in an escrow account with bank support, ensuring the safety of investors’ funds until the property is delivered. In Dubai, there are strict government oversight, control, and enforcement mechanisms in place to fully protect investors’ funds. You do not need to open a bank account or get involved in the matter as everything is handled by the construction company.",
    },
    {
      id: 4,
      title: "Should I take a lawyer to review the contract?",
      text: "No, there is no need. In Dubai, there is a uniform property purchase contract for all construction companies, which cannot be changed.",
    },
  ];
  const amenity = [
    {id:0, text1:"Fitness", img:luxury},
    {id:1, text1:"Jogging and walking", img:luxury},
    {id:2, text1:"Parks and gardens", img:luxury},
    {id:3, text1:"Parks and gardens", img:luxury},
    {id:4, text1:"Parks and gardens", img:luxury},
  ]
  const [width, setWidth] = useState(null);

  const menuRef = useRef();

  useEffect(() => {
    setWidth(menuRef.current.scrollWidth - menuRef.current.offsetWidth);
  }, []);

  return (
    <div>
      <HeaderImage
        header={image}
        company={"Sobha"}
        project={"Hartland II"}
        text={
          "Sobha Realty redefines the concept of luxury residential living with a repertoire of real estate projects across Dubai."
        }
      />
      <Title
        title={"The Enduring"}
        subtitle={"LEGACY OF SUCCESS"}
        paragraph={
          "Sobha Hartland was conceived with an aspiration for a life less ordinary with lush fairways and an iconic resort style living located in the heart of the city"
        }
      />
      <Icons />
      <Image
        src={sobha}
        width={2000}
        className="w-full h-[25rem] md:h-auto object-cover"
      />
      <Title
        title={"The Window To"}
        subtitle={"INFINITE POSSIBILITIES"}
        paragraph={
          "Step into your private sanctuary and be swept away by the  panoramic views of the sparkling blue waters and verdant greenery that will transport your senses to an unparalleled world of serenity."
        }
      />
      <Gallery photos={photos} />
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
          <button className="text-xl bg-red-500 px-11 py-4 mt-6 lg:mt-11 rounded-lg hover:bg-royal transition-all duration-300">
            Download Brochure
          </button>
        </div>
        <Image
          src={comfort}
          width={1000}
          quality={100}
          className="w-full h-[45rem] md:h-auto object-cover"
        />
      </div>
      <Apartments clients={clients} />
      <div className="relative ">
        <div className="absolute top-32 2xl:top-[35%] right-0 z-10 text-white text-right font-light mr-[5%] 2xl:mr-48">
          <h1 className=" text-3xl lg:text-6xl lg:leading-[4rem] ">
            WHERE NATURE AND HOME
            <br /> BLOOM IN RADIANCE
          </h1>

          <button className="text-xl bg-white text-royal px-11 py-4 mt-6 lg:mt-11 rounded-lg hover:bg-royal hover:text-white transition-all duration-300">
            Download Brochure
          </button>
        </div>
        <Image
          src={home}
          width={1000}
          quality={100}
          className="w-full h-[45rem] md:h-auto object-cover"
        />
      </div>
      <div className="w-11/12 max-w-[1400px] mt-32 m-auto">
        <h3 className="text-2xl uppercase">Modern lifestyle</h3>
        <h1 className="text-4xl lg:text-6xl lg:leading-[4rem] lg:w-2/3 font-bold">
          What does the 360 Riverside Crescent project offer?
        </h1>
      </div>
      <HoverCarousel menuRef={menuRef} width={width} services={services} />
      <Squares benefits={benefits} />
      <Faq items={items} />
      {/* <div className="w-full m-auto my-32 flex items-center pl-48 pt-16 pb-32 bg-gray-200">
        <div><h1 className="text-4xl font-bold">AMMENITIES</h1><p className="">At Sobha Hartland II, amenities become necessities.</p></div>
      <NewsCarousel services={amenity} menuRef={menuRef} width={width} />
      </div> */}
    </div>
  );
};

export default Sobha;
