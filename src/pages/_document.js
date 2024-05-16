import { Html, Head, Main, NextScript } from "next/document";
import { GoogleTagManager } from '@next/third-parties/google'
export default function Document() {
  return (
    <Html lang="en">
      <Head ><meta name="google-site-verification" content="RJjITg1RdbGIKZg38XJzdctv7HzYKYCiXbodV2pj1X0" />
     
      <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-PL663SLC');
              `,
            }}
          />


      </Head>
      
      <body >
      <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-PL663SLC"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
