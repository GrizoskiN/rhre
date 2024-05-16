import { Html, Head, Main, NextScript } from "next/document";
import { GoogleTagManager } from '@next/third-parties/google'
export default function Document() {
  return (
    <Html lang="en">
      <Head ><meta name="google-site-verification" content="RJjITg1RdbGIKZg38XJzdctv7HzYKYCiXbodV2pj1X0" />
     
     


      </Head>
      <GoogleTagManager gtmId="GTM-PL663SLC" />
      <body >

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
