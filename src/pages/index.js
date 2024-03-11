import Image from "next/image";
import { Inter } from "next/font/google";
import HeaderSection from "@/pageSections/HeaderSection";
import SecondSection from "@/pageSections/SecondSection";
import ThirdSection from "@/pageSections/ThirdSection";
import FourthSection from "@/pageSections/FourthSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <HeaderSection />
      <SecondSection />
      <ThirdSection/>
      <FourthSection/>
    </main>
  )
}
