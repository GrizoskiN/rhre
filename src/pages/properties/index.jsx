import Image from "next/image";
import Link from "next/link";
import xml2js from "xml2js";

export async function getStaticProps() {
  
  const response = await fetch(
    "https://expert.propertyfinder.ae/feed/rise-high-real-estate-l-l-c/privatesite/c859a1c2a0092d1c046313eb0fe1b2c0",
  );
  const data = await response.text(); // Get the raw XML data

  const parser = new xml2js.Parser();
  let parsedData;
  try {
    parsedData = await parser.parseStringPromise(data);
  } catch (error) {
    console.error("Error parsing XML:", error);
    return { props: { data: {} } }; // Example of handling error
  }

  // const paths = parsedData.list.property
  
  return { props: { data: parsedData } };
}

export default function Listings({ data }) {
  const properties = data.list.property;

  const mappedProjects = properties.map((project, index) => {
    // Assuming the title property is called "title" (adjust if different)
    const projectTitle = project.title_en;
    const reference_number = project.reference_number;
    const photos = project.photo[0].url[0]["_"]; // Assuming the photo array is called "photo"
    const agent = project.agent[0].name;
    const description = project.description_en;
    const city = project.city;
    const price = project.price;
    const size = project.size;
    const bathroom = project.bathroom;
    const bedroom = project.bedroom;
    const amenities = project.amenities;
    const email = 'info@risehighrealestate.ae';
    const phone = '+971529992763';
    const whatsapp = 'https://wa.me/971529992763';

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
      amenities
    };
  });
  console.log(properties);

  
  return (
    <div className="mt-48">
      <h2 className="text-center font-bold uppercase mb-32 text-5xl">
        Properties
      </h2>
      <div className="w-11/12 max-w-[1400px] m-auto grid lg:grid-cols-3 gap-7 ">
        {mappedProjects.map((property) => (
          <div
            key={property.reference_number}
            className=" mb-11 flex flex-col justify-between">
            <Link href={`/properties/${property.reference_number}`}><Image
              src={property.photos}
              width={500}
              height={300}
              className="rounded-lg"
              alt={property.title_en}
            /></Link>
            <div>
              <h3 className="text-orange-600 text-xl my-3 font-semibold">
                AED{" "}
                {parseFloat(property.price).toLocaleString("en-US", {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 1,
                })}
              </h3>
              <h1 className="font-semibold leading-5 text-lg text-royal mb-2">
                {property.title}
              </h1>

              <p className="font-light leading-5 mt-3">
                {property.description[0].length > 100
                  ? property.description[0].slice(0, 100) + "..."
                  : property.description[0]}
              </p>
            </div>

            <div className="flex  items-end ">
              <p className="mr-5 ">
                <span>🛏️ </span>
                {property.bedroom}
              </p>
              <p className="mr-5">🛁{property.bathroom}</p>
              <p className="flex items-end ">
                <span className="text-3xl">⌂</span> {property.size} sq ft{" "}
              </p>
            </div>
        <div className="flex mt-5 pt-3 border-t-[1px] border-royal/30">
          <a className="text-gray-400 hover:text-royal mr-7" href={`tel: ${property.phone}`}>Phone</a>
          <a className="text-gray-400 hover:text-royal mr-7" href={`mailto: ${property.email}`}>Email</a>
          <a className="text-gray-400 hover:text-royal " href={`tel: ${property.whatsapp}`}>Whatsapp</a>
        </div>
        {/* <Link href={`/properties/${property.reference_number}`}>Learn More</Link> */}
        <p>{property.amenities}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
