import Menu from "@/components/pageSections/Menu";
import { useState } from "react";
import "@/styles/globals.css";
import Footer from "@/components/pageSections/Footer";
import ScrollToTopButton from "@/components/scrollToTop";

export default function App({ Component, pageProps }) {
  const [active, setActive] = useState(false);
  const handleActive = (e) => {
    setActive(!active);
  };
  return (
    <>
      <Menu handleMenus={handleActive} />
      <ScrollToTopButton/>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
