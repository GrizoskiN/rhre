import Image from "next/image";
import { Inter } from "next/font/google";
import HeaderSection from "@/components/pageSections/HeaderSection";
import SecondSection from "@/components/pageSections/SecondSection";
import ThirdSection from "@/components/pageSections/ThirdSection";
import FourthSection from "@/components/pageSections/FourthSection";
import FifthSection from "@/components/pageSections/FifthSection";
import SixthSection from "@/components/pageSections/SixthSection";
import SeventhSection from "@/components/pageSections/SeventhSection";
import EightSection from "@/components/pageSections/EightSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <HeaderSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <EightSection />
    </main>
  );
}
