import Head from 'next/head';
import Image from "next/image";
import ContactForm from "@/components/contact/ContactForm";

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Rise High Real Estate</title>
        <meta name="description" content="Privacy Policy for Rise High Real Estate L.L.C. - Learn how we collect, use, and protect your personal information." />
      </Head>

      {/* Hero Section */}
      <div className="pt-48 lg:pt-48 w-full m-auto">
        <div className="w-11/12 m-auto max-w-[1200px] text-royal md:text-center">
          <h1 className="text-4xl md:text-6xl xl:text-4xl">
             
            <span className="xl:text-6xl uppercase font-bold">Privacy Policy</span>
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-11/12 max-w-[800px] m-auto my-11 items-center">
        
        <div className="text-lg">
          <p className="mb-10 text-md font-light">
            Thank you for visiting Rise High Real Estate L.L.C. Your privacy matters to us. This Privacy Policy explains how we collect, use, store, and safeguard your personal information when you interact with our website and digital channels.
          </p>

          <section className="mb-10">
            <h3 className="font-bold text-2xl mb-4 text-royal">1. Introduction</h3>
            <p>
              By continuing to use our Website, you acknowledge and accept the practices described below.
            </p>
          </section>

          <section className="mb-10">
            <h3 className="font-bold text-2xl mb-4 text-royal">2. What This Policy Covers</h3>
            <p>
              This Policy applies to all online platforms, landing pages, and digital forms owned and operated by Rise High Real Estate L.L.C. where this Privacy Policy is displayed. It outlines the types of information we collect, how we handle it, and the choices available to you.
            </p>
          </section>

          <section className="mb-10">
            <h3 className="font-bold text-2xl mb-4 text-royal">3. Information We Collect</h3>
            <p>We collect information in ways that help us communicate with you effectively and provide you with accurate real estate guidance.</p>
            
            <p className="font-bold mt-6 mb-2">A. Information You Provide Directly</p>
            <p>This includes details you share with us when you submit an inquiry, request project information, register interest in a property, or communicate with us through email, phone, WhatsApp, or forms. This information may include:</p>
            <ul className="list-disc ml-5 mt-4 space-y-2">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Location</li>
              <li>Inquiry preferences</li>
            </ul>

            <p className="font-bold mt-6 mb-2">B. Information Collected Automatically</p>
            <p>When you browse our Website, we may automatically collect:</p>
            <ul className="list-disc ml-5 mt-4 space-y-2">
              <li>Device and browser details</li>
              <li>IP address</li>
              <li>Pages viewed and time spent</li>
              <li>Navigation patterns and clicks</li>
              <li>General usage analytics</li>
            </ul>

            <p className="font-bold mt-6 mb-2">C. Cookies & Tracking</p>
            <p>We use cookies, pixels, and similar technologies to enhance site performance, understand visitor behavior, improve customer experience, and measure advertising effectiveness. (See Section 6 for more on cookies.)</p>
          </section>

          <section className="mb-10">
            <h3 className="font-bold text-2xl mb-4 text-royal">4. How We Use Your Information</h3>
            <p>We use your information solely to support your real estate journey and improve our services. We may use your information to:</p>
            <ul className="list-disc ml-5 mt-4 space-y-2">
              <li>Respond to your inquiries promptly</li>
              <li>Provide accurate project information and updates</li>
              <li>Share details about related properties you may be interested in</li>
              <li>Coordinate availability checks with developers</li>
              <li>Improve how our Website functions and performs</li>
              <li>Maintain communication through phone, WhatsApp, SMS, or email</li>
              <li>Enhance our marketing and customer experience based on insights</li>
            </ul>
            <p className="mt-4">We do not use your information for any unrelated or unauthorized purposes.</p>
          </section>

          <section className="mb-10">
            <h3 className="font-bold text-2xl mb-4 text-royal">5. When We Share Your Information</h3>
            <p>Your information is treated with care. We may share it only in the following situations:</p>

            <p className="font-bold mt-6 mb-2">A. With Developers</p>
            <p>We may share your contact details with RERA-registered developers when needed to confirm unit availability, arrange presentations or appointments, or process your request with the developer.</p>

            <p className="font-bold mt-6 mb-2">B. With Service Providers</p>
            <p>We work with trusted partners who support website hosting, analytics, CRM and communication systems, advertising delivery, and technical maintenance. These providers are required to protect your information.</p>

            <p className="font-bold mt-6 mb-2">C. When Required by Law</p>
            <p>We may disclose information if legally obligated, for example to comply with court orders, regulatory authorities, or government agencies.</p>

            <p className="font-bold mt-6 mb-2">D. Business Continuity</p>
            <p>If the company undergoes restructuring or a business transaction, information may be transferred under secure conditions. We do not sell or trade personal information.</p>
          </section>

          <section className="mb-10">
            <h3 className="font-bold text-2xl mb-4 text-royal">6. Cookies & Tracking Technologies</h3>
            <p>Cookies help us understand how visitors use our Website and allow us to improve your experience. We use cookies for:</p>
            <ul className="list-disc ml-5 mt-4 space-y-2">
              <li>Essential website functions</li>
              <li>Performance and analytics</li>
              <li>Advertising relevance and measurement</li>
              <li>Detecting return visits</li>
              <li>Understanding user preferences</li>
            </ul>
            <p className="mt-4">You may manage or disable cookies via your browser settings. Note: Some features of the Website may not function properly if cookies are disabled.</p>
          </section>

          <section className="mb-10">
            <h3 className="font-bold text-2xl mb-4 text-royal">7. Data Protection & Security</h3>
            <p>We apply reasonable technical and administrative safeguards to protect your personal information from:</p>
            <ul className="list-disc ml-5 mt-4 space-y-2">
              <li>Unauthorized access</li>
              <li>Misuse</li>
              <li>Accidental loss</li>
              <li>Alteration</li>
            </ul>
            <p className="mt-4">While we strive to maintain high levels of security, no online system can guarantee absolute safety.</p>
          </section>

          <section className="mb-10">
            <h3 className="font-bold text-2xl mb-4 text-royal">8. Data Retention</h3>
            <p>We retain your information only for as long as it is needed to:</p>
            <ul className="list-disc ml-5 mt-4 space-y-2">
              <li>Respond to your inquiry</li>
              <li>Maintain communication</li>
              <li>Comply with UAE regulations</li>
              <li>Support ongoing project interest</li>
            </ul>
            <p className="mt-4">Once no longer required, the data is securely removed.</p>
          </section>

          <section className="mb-10">
            <h3 className="font-bold text-2xl mb-4 text-royal">9. Your Rights & Choices</h3>
            <p>Depending on applicable laws, you may have the right to:</p>
            <ul className="list-disc ml-5 mt-4 space-y-2">
              <li>Request access to your personal information</li>
              <li>Update or correct your details</li>
              <li>Request deletion when appropriate</li>
              <li>Withdraw consent for future communication</li>
            </ul>
            <p className="mt-4">To exercise these rights, please contact us using the details below.</p>
          </section>

          <section className="mb-10">
            <h3 className="font-bold text-2xl mb-4 text-royal">10. Links to External Websites</h3>
            <p>Our Website may contain links to third-party websites for convenience. We are not responsible for their privacy practices, their content, or how they manage user data. We encourage you to review their policies independently.</p>
          </section>

          <section className="mb-10">
            <h3 className="font-bold text-2xl mb-4 text-royal">11. Children’s Privacy</h3>
            <p>Our Website is intended for adults and individuals aged 18 and above. We do not knowingly collect information from minors.</p>
          </section>

          <section className="mb-10">
            <h3 className="font-bold text-2xl mb-4 text-royal">12. Updates to This Policy</h3>
            <p>We may revise this Privacy Policy from time to time. Any changes will be reflected on this page with an updated effective date.</p>
          </section>

          <div className="mt-12 p-6 bg-gray-50 border-l-4 border-red-300">
            <p className="italic text-gray-600">
              Last Updated: February 2026. For further inquiries regarding our policies, please use the contact form below.
            </p>
          </div>
        </div>
      </div>

     
    </>
  );
};

export default PrivacyPolicy;