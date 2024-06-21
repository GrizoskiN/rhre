import Menu from "@/components/pageSections/Menu";
import { useState } from "react";
import "@/styles/globals.css";
import Footer from "@/components/pageSections/Footer";
import ScrollToTopButton from "@/components/scrollToTop";
import { useRouter } from "next/router";
import Script from "next/script";


export default function App({ Component, pageProps }) {
  const [active, setActive] = useState(false);
  const handleActive = (e) => {
    setActive(!active);
  };
  const router = useRouter();
  const contact = router.pathname === "/contact";
  return (
    <>
     <Script id='google-analytics' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-ERVDTQX7LF');
        `}
      </Script> 
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-ERVDTQX7LF"></Script>
   
   <Script
            dangerouslySetInnerHTML={{
              __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1098510228076437');
              fbq('track', 'PageView');
              `,
            }}
          ></Script>
   <Script
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PL663SLC');
              `,
            }}
          ></Script>

      <Menu handleMenus={handleActive} />
      {!contact && <ScrollToTopButton/>}
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
