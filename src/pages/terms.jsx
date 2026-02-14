import Head from 'next/head';
import Image from "next/image";
import ContactForm from "@/components/contact/ContactForm";

const TermsAndConditions = () => {
  const downArrow = (
    <svg
      className="w-6 h-6 lg:w-11 lg:h-11"
      width="60"
      height="60"
      viewBox="0 0 91 91"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M79.3481 82.2595C78.6019 82.2595 77.8557 81.9774 77.287 81.4086L9.5875 13.7092C8.45 12.5717 8.45 10.7289 9.5875 9.59141C10.725 8.45391 12.5678 8.45391 13.7053 9.59141L81.4047 77.2909C82.5422 78.4284 82.5422 80.2711 81.4047 81.4086C80.8405 81.9774 80.0943 82.2595 79.3481 82.2595Z"
        fill="black"
      />
      <path
        d="M79.3525 82.2645H18.2323C16.6262 82.2645 15.3203 80.9586 15.3203 79.3525C15.3203 77.7463 16.6262 76.4405 18.2323 76.4405H76.4405V18.2323C76.4405 16.6262 77.7463 15.3203 79.3525 15.3203C80.9586 15.3203 82.2645 16.6262 82.2645 18.2323V79.3525C82.2645 80.9586 80.9586 82.2645 79.3525 82.2645Z"
        fill="black"
      />
    </svg>
  );

  return (
    <>
      <Head>
        <title>Terms and Conditions | Rise High Real Estate</title>
        <meta name="description" content="Official Terms and Conditions for Rise High Real Estate L.L.C., a RERA-licensed brokerage in Dubai." />
      </Head>

      {/* Hero Section */}
      <div className="pt-48  lg:pt-48 w-full m-auto">
        <div className="w-11/12 m-auto max-w-[1200px] text-royal md:text-center">
          <h1 className="text-4xl md:text-6xl xl:text-4xl">
            Terms & <br />
            <span className="xl:text-6xl uppercase font-bold">Conditions</span>
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-11/12 max-w-[800px] m-auto my-11  items-center">
        

        <div className=" text-lg  ">
          <p className="mb-10 text-md font-light">
            Welcome to this website, operated by Rise High Real Estate L.L.C., a RERA-licensed real estate brokerage based in Dubai, United Arab Emirates. By accessing or using this website, you agree to the following terms and conditions.
          </p>

          <section className="mb-10">
            <h3 className="font-bold text-2xl mb-4 text-royal">1. Company Information</h3>
            <p className="">
              This website is operated by:<br />
              <strong>Rise High Real Estate L.L.C.</strong><br />
              RERA License No: 10320325<br />
              Office #305-457, Khalid Shaban Building,<br />
              Al Garhoud, Dubai – UAE<br />
              Phone: +971 52 999 2763<br />
              Email: admin@risehighrealestate.ae
            </p>
          </section>

          <section className="mb-10">
            <h3 className="font-bold text-2xl mb-4 text-royal">2. Nature of Services</h3>
            <p>Rise High Real Estate L.L.C. is a licensed real estate brokerage company in the UAE.
We provide marketing and brokerage services for residential and commercial properties in Dubai. Property purchases are completed directly between the buyer and the developer or seller in accordance with applicable UAE real estate regulations.
We do not guarantee financial returns, rental yields, capital appreciation, or investment outcomes.
All property information is provided for informational and marketing purposes only.</p>
          </section>

          <section className="mb-10">
            <h3 className="font-bold text-2xl mb-4 text-royal">3. Property Information Disclaimer</h3>
            <p>Property descriptions, prices, payment plans, availability, and specifications are based on information provided by developers and may change without notice.
While we aim to provide accurate and up-to-date information, we do not warrant that all content on this website is complete, current, or error-free.
Interested parties should conduct their own due diligence before making any purchase decisions.</p>
          </section>

          <section className="mb-10">
            <h3 className="font-bold text-2xl mb-4 text-royal">4. No Financial Advice</h3>
            <p>The information provided on this website does not constitute financial, legal, or investment advice.
Users are encouraged to consult independent advisors before making property purchase decisions.</p>
          </section>

          <section className="mb-10">
            <h3 className="font-bold text-2xl mb-4 text-royal">5. Use of Website</h3>
            <p>By using this website, you agree:</p>
            <ul className="list-disc ml-5 mt-4 space-y-2">
              <li>Not to misuse the website for unlawful purposes.</li>
              <li>Not to attempt to gain unauthorized access to systems.</li>
              <li>Not to copy, reproduce, or distribute content without permission.</li>
            </ul>
            <p className="mt-4">All content, logos, and materials remain the property of Rise High Real Estate L.L.C.</p>
          </section>

          <section className="mb-10">
            <h3 className="font-bold text-2xl mb-4 text-royal">6. User Submissions</h3>
            <p>By submitting your contact details through forms on this website, you agree that:</p>
            <ul className="list-disc ml-5 mt-4 space-y-2">
              <li>We may contact you regarding property inquiries.</li>
              <li>Your information may be shared with RERA-registered developers or authorized representatives solely for the purpose of responding to your inquiry.</li>
              <li>Your data will be handled in accordance with our Privacy Policy.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h3 className="font-bold text-2xl mb-4 text-royal">7. Limitation of Liability</h3>
            <p>Rise High Real Estate L.L.C. shall not be liable for:</p>
            <ul className="list-disc ml-5 mt-4 space-y-2">
              <li>Any financial loss arising from property purchases</li>
              <li>Market fluctuations</li>
              <li>Developer delays or changes</li>
              <li>Decisions made based on website information</li>
            </ul>
            <p className="mt-4 italic">All transactions are conducted under legally binding agreements between buyer and developer or seller.</p>
          </section>

          <section className="mb-10">
            <h3 className="font-bold text-2xl mb-4 text-royal">8. Third-Party Links</h3>
            <p>This website may contain links to third-party websites. We are not responsible for the content or practices of those websites.</p>
          </section>

          <section className="mb-10">
            <h3 className="font-bold text-2xl mb-4 text-royal">9. Governing Law</h3>
            <p>These Terms & Conditions are governed by the laws of the United Arab Emirates. Any disputes shall be subject to the jurisdiction of the courts of Dubai, UAE.</p>
          </section>

          <section className="mb-10">
            <h3 className="font-bold text-2xl mb-4 text-royal">10. Changes to Terms</h3>
            <p>We reserve the right to update these Terms & Conditions at any time without prior notice. Updated versions will be published on this page.</p>
          </section>

          <div className="mt-12 p-6 bg-gray-50 border-l-4 border-red-300">
            <p className="italic text-gray-600">
              Last Updated: February 2026. For further inquiries regarding our terms, please use the contact form below.
            </p>
          </div>
        </div>
      </div>

     
    </>
  );
};

export default TermsAndConditions;