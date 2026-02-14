
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import xml2js from "xml2js";

export async function getStaticProps() {
  try {
    const response = await fetch(
      "https://expert.propertyfinder.ae/feed/rise-high-real-estate-l-l-c/privatesite/c859a1c2a0092d1c046313eb0fe1b2c0"
    );

    // 1. Check if the connection was successful
    if (!response.ok) {
      console.error(`Fetch failed: ${response.status} ${response.statusText}`);
      return { props: { data: {} } };
    }

    const textData = await response.text();
    
    // 2. Check if we got XML or an HTML error page
    if (textData.trim().startsWith("<!DOCTYPE html>") || textData.includes("<html")) {
      console.error("Error: Received HTML instead of XML. The feed URL might be incorrect or require a login.");
      return { props: { data: {} } };
    }

  const parser = new xml2js.Parser({
  strict: false, // FIX: Allows attributes without values
  trim: true,
  normalize: true,
});
    const parsedData = await parser.parseStringPromise(textData);

    // 3. LOG THE STRUCTURE to your terminal
    console.log("Parsed Data Keys:", Object.keys(parsedData)); 
    
    // If 'root' exists, log how many properties are in it
    if (parsedData.root && parsedData.root.property) {
       console.log("Found properties count:", parsedData.root.property.length);
    }

    return { props: { data: parsedData } };

  } catch (error) {
    console.error("Error in getStaticProps:", error);
    return { props: { data: {} } };
  }
}

export default function Listings({ data }) {
  // FIX: Safely access property. If data or list is missing, default to empty array []
  const properties = data?.root?.property || data?.list?.property || [];

  const mappedProjects = properties.map((project, index) => {
    // Assuming the title property is called "title" (adjust if different)
    const projectTitle = project.title_en?.[0] || ""; // Added safety check for title too
    const reference_number = project.reference_number?.[0] || "";
    const photos = project.photo?.[0]?.url?.[0]?._ || "/placeholder.jpg";

    const agent = project.agent?.[0]?.name?.[0] || "";
    const description = project.description_en;
    const city = project.city?.[0] || "";
    const price = project.price?.[0] || "";
    const size = project.size?.[0] || "";
    const bathroom = project.bathroom?.[0] || "";
    const bedroom = project.bedroom?.[0] || "";
    const amenities = project.amenities;
    const email = "info@risehighrealestate.ae";
    const phone = "+971529992763";
    const whatsapp = "https://wa.me/971529992763";
    
    // Return an object with the title, index, and photos
    return {
      reference_number,
      title: projectTitle,
      index,
      photos,
      agent,
      description,
      city,
      price,
      size,
      bathroom,
      bedroom,
      email,
      phone,
      whatsapp,
      amenities,
    };
  });

  // Optional: Display a message if no properties are found
  if (mappedProjects.length === 0) {
    return (
      <div className="mt-48 text-center min-h-[50vh] flex items-center justify-center">
        <h2 className="text-2xl h-full">No properties found at the moment.</h2>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Off Plan Properties| RHRE | Dubai, UAE</title>
        <meta name="description" content="Rise High Real Estate - Your trusted partner for buying, selling, and leasing properties in Dubai, UAE. Explore luxury apartments, townhouses, and villas with us." />
      </Head>
  
      <div className="mt-48 w-11/12 m-auto max-w-[1400px]">
        <h2 className="text-center font-bold uppercase mb-32 text-5xl">
          Properties
        </h2>
        <div className="grid lg:grid-cols-3 gap-7">
          {mappedProjects.map((property) => (
            <div
              key={property.reference_number}
              className="mb-11 flex flex-col justify-between">
              <Link href={`/properties/${property.reference_number}`}>
                <Image
                  src={property.photos}
                  width={500}
                  height={300}
                  className="rounded-lg object-cover h-[300px] w-full" // Added object-cover to prevent distortion
                  alt={property.title}
                />
              </Link>
              <div>
                <h3 className="text-orange-600 text-xl my-3 font-semibold">
                  AED{" "}
                  {parseFloat(property.price).toLocaleString("en-US", {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 1,
                  })}
                </h3>
                <Link href={`/properties/${property.reference_number}`}>
                  <h1 className="font-semibold leading-5 text-lg text-royal mb-2 cursor-pointer">
                    {property.title}
                  </h1>
                </Link>
                <p className="font-light leading-5 mt-3">
                  {/* Safely handle description array */}
                  {property.description && property.description[0] && property.description[0].length > 100
                    ? property.description[0].slice(0, 100) + "..."
                    : property.description?.[0] || ""}
                </p>
              </div>

              <div className="flex items-end mt-4">
                <p className="mr-5">
                  <span>🛏️ </span>
                  {property.bedroom}
                </p>
                <p className="mr-5">🛁 {property.bathroom}</p>
                <p className="flex items-end">
                  <span className="text-3xl mr-1">⌂</span> {property.size} sq ft
                </p>
              </div>
              <div className="flex mt-5 pt-3 border-t-[1px] border-royal/30">
                <a className="text-gray-400 hover:text-royal mr-7" href={`tel:${property.phone}`}>
                  Phone
                </a>
                <a className="text-gray-400 hover:text-royal mr-7" href={`mailto:${property.email}`}>
                  Email
                </a>
                <a className="text-gray-400 hover:text-royal" href={property.whatsapp}>
                  Whatsapp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
