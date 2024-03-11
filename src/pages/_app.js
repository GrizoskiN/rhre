import Menu from "@/pageSections/Menu";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (

  <>
  <Menu/>
  <Component {...pageProps} />;
  
  </>


  )
  
}
