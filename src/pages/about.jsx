import Image from "next/image";
import About from "@/../public/img/about1.webp";
import About1 from "@/../public/img/about2.webp";
import ContactForm from "@/components/contact/ContactForm";
import Zaid from "@/../public/img/zaid.png";
import  Head  from 'next/head';
const about = () => {
  const downArrow = (
    <svg
      className="w-6 h-6 lg:w-11  lg:h-11"
      width="60"
      height="60"
      viewBox="0 0 91 91"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M79.3481 82.2595C78.6019 82.2595 77.8557 81.9774 77.287 81.4086L9.5875 13.7092C8.45 12.5717 8.45 10.7289 9.5875 9.59141C10.725 8.45391 12.5678 8.45391 13.7053 9.59141L81.4047 77.2909C82.5422 78.4284 82.5422 80.2711 81.4047 81.4086C80.8405 81.9774 80.0943 82.2595 79.3481 82.2595Z"
        fill="black"
      />
      <path
        d="M79.3525 82.2645H18.2323C16.6262 82.2645 15.3203 80.9586 15.3203 79.3525C15.3203 77.7463 16.6262 76.4405 18.2323 76.4405H76.4405V18.2323C76.4405 16.6262 77.7463 15.3203 79.3525 15.3203C80.9586 15.3203 82.2645 16.6262 82.2645 18.2323V79.3525C82.2645 80.9586 80.9586 82.2645 79.3525 82.2645Z"
        fill="black"
      />
    </svg>
  );
  return (
    <>
      <Head>
    <title>About Us | RHRE | Dubai, UAE</title>
    <meta name="description" content="Rise High Real Estate - Your trusted partner for buying, selling, and leasing properties in Dubai, UAE. Explore luxury apartments, townhouses, and villas with us." />
    </Head>
      <div className="pt-32 pb-16 lg:py-48  w-full m-auto ">
        <div className="w-11/12 m-auto max-w-[1200px] text-royal md:text-center">
          <div className="">
            <h4 className="text-red-300 text-2xl">WHO WE ARE</h4>
            <h1 className="text-4xl md:text-6xl xl:text-4xl ">
              Your journey to a new <br />
              <span className=" xl:text-6xl uppercase font-bold">
                home starts here
              </span>
            </h1>
          </div>
        </div>
      </div>

      <div className="flex max-w-[1400px] m-auto flex-col lg:flex-row  justify-between gap-6  ">
        <Image src={About} width={1300} className="object-cover  md:h-auto" />
        <Image
          src={About1}
          width={700}
          className="hidden lg:block object-cover h-full"
        />
      </div>

      <div className="w-11/12 max-w-[1200px] m-auto flex flex-col lg:flex-row gap-7 my-11 lg:my-32 items-start">
        <div className="lg:w-1/2 flex justify-evenly items-end mb-7 ">
          <h1 className="text-5xl text-royal xl:text-8xl font-bold mr-6">Our Story</h1>
          {downArrow}
        </div>

        <div className=" lg:w-2/4 ml-auto text-xl">
          <h3 className="font-semibold">Our Founder, started this company because he wanted to make it easier for clients to find their perfect match!</h3>
          <p className="mt-11 text-justify">
            With 15 rich years of sales experience, including 7 years in
            Telecommunication and 8 years in Real Estate in Dubai, I bring a
            wealth of knowledge and expertise to the table. Hailing from
            Allahabad, a city nestled within the vibrant state of Uttar Pradesh,
            India, I proudly hold a Masters (MBA) Degree in operations and
            marketing from ISME, Maharashtra India. My journey has been driven
            by a vision rooted in values - Growth, Value, and Service. These
            principles are the bedrock of my newly founded company, where our
            mission is clear: to aid home buyers while upholding integrity and
            transparency.
          </p>
          <p className="mt-6">
            Under my leadership, our company stands as a beacon of trust and
            reliability in the realm of real estate investments. We envision a
            future where every client experiences exponential growth in their
            portfolios, nurtured by our dedicated team. Our commitment to value
            goes beyond mere transactions; we cherish the trust placed in us and
            strive to enhance every investment with transparency and integrity.
            Moreover, our service ethos ensures that every step of the buying
            journey, from initial consultation to after-sales support, is met
            with unwavering dedication.
          </p>
          <p className="mt-6">
           
At our organization, we don't just promise success; we embody it. Rise high with us, where your investment is not just a transaction but a partnership built on trust and mutual growth.
          </p>

          <div className="mt-11 flex flex-col  items-start">
            <Image src={Zaid} width={100} className="" />
            <div className="">
              <h1 className="font-semibold text-2xl">Mohammad Zaid</h1>
              <h5 className="font-light text-[#777777] text-sm">
                Founder & CEO
              </h5>
            </div>
          </div>
        </div>
      </div>
    
      <div className="w-full max-w-[1300px] m-auto">
        <ContactForm />
      </div>
    </>
  );
};

export default about;
