import Image from "next/image";
import { Inter } from "next/font/google";
import HeaderSection from "@/pageSections/HeaderSection";
import SecondSection from "@/pageSections/SecondSection";
import ThirdSection from "@/pageSections/ThirdSection";
import FourthSection from "@/pageSections/FourthSection";
import FifthSection from "@/pageSections/FifthSection";
import SixthSection from "@/pageSections/SixthSection";
import SeventhSection from "@/pageSections/SeventhSection";
import EightSection from "@/pageSections/EightSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <HeaderSection />
      <SecondSection />
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
      <SixthSection/>
      <SeventhSection/>
      <EightSection/>
    </main>
  )
}
