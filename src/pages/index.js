import { Inter } from "next/font/google";
import HeaderSection from "@/components/pageSections/HeaderSection";
import SecondSection from "@/components/pageSections/SecondSection";
import ThirdSection from "@/components/pageSections/ThirdSection";
import FourthSection from "@/components/pageSections/FourthSection";
import FifthSection from "@/components/pageSections/FifthSection";
import SixthSection from "@/components/pageSections/SixthSection";
import SeventhSection from "@/components/pageSections/SeventhSection";
import EightSection from "@/components/pageSections/EightSection";
import Testimonials from "@/components/pageSections/Testimonials";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
  <Head>
    <title>Rise High Real Estate | Rise Above Expectations - Dubai, UAE</title>
    <meta name="description" content="Rise High Real Estate - Your trusted partner for buying, selling, and leasing properties in Dubai, UAE. Explore luxury apartments, townhouses, and villas with us." />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta charSet="UTF-8" />
    <link rel="canonical" href="https://www.risehighrealestate.ae/" />

   
    <meta property="og:title" content="Rise High Real Estate | Dubai, UAE" />
    <meta property="og:description" content="Your trusted partner for buying, selling, and leasing properties in Dubai." />
    <meta property="og:image" content="https://www.risehighrealestate.ae/public/img/logo.png" />
    <meta property="og:url" content="https://www.risehighrealestate.ae/" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Rise High Real Estate" />


    
    <meta property="og:image" content="https://www.risehighrealestate.ae/public/img/logo.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="628" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="Rise High Real Estate | Dubai, UAE" />
    <meta property="og:description" content="Your trusted partner for buying, selling, and leasing properties in Dubai." />
    <meta property="og:url" content="https://www.risehighrealestate.ae/" />

    <link rel="icon" href="/img/favicon.png" />
    <meta name="robots" content="index, follow" />
</Head>


    <main className="">
      <HeaderSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <EightSection />
      <Testimonials/>
    </main>
   </>
    
  );
}
