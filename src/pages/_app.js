import Menu from "@/components/pageSections/Menu";
import { useState } from "react";
import "@/styles/globals.css";
import Footer from "@/components/pageSections/Footer";
import ScrollToTopButton from "@/components/scrollToTop";
import { useRouter } from "next/router";


export default function App({ Component, pageProps }) {
  const [active, setActive] = useState(false);
  const handleActive = (e) => {
    setActive(!active);
  };
  const router = useRouter();
  const contact = router.pathname === "/contact";
  return (
    <>
      <Menu handleMenus={handleActive} />
      {!contact && <ScrollToTopButton/>}
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
