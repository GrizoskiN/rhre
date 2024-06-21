import { Html, Head, Main, NextScript } from "next/document";
import { GoogleTagManager } from '@next/third-parties/google'
export default function Document() {
  return (
    <Html lang="en">
      <Head ><meta name="google-site-verification" content="RJjITg1RdbGIKZg38XJzdctv7HzYKYCiXbodV2pj1X0" />
  

      </Head>
      
      <body >
      <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src="https://www.facebook.com/tr?id=1098510228076437&ev=PageView&noscript=1"
            />
          </noscript>
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
