import Image from "next/image";
import { Inter } from "next/font/google";
import HeaderSection from "@/pageSections/HeaderSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <main>
    <HeaderSection/>
   </main>
  );
}
