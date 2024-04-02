import Image from "next/image";
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

  return { props: { data: parsedData } };
}

export default function Listings({ data }) {
  const properties = data.list.property;

  const allAgentNames = data.list.property.flatMap((property) =>
    property.agent.map((agent) => agent.name),
  );
  // const allPhotoUrls = data.list.property.flatMap(property =>
  //   property.photo.map(photo => photo)
  // );
  const allPhotoUrls = data.list.property.flatMap((property) =>
    property.photo.flatMap((photo) => photo.url.flatMap((url) => url["_"])),
  );

  
  const mappedProjects = properties.map((project, index) => {
    // Assuming the title property is called "title" (adjust if different)
    const projectTitle = project.title_en;
    const photos = project.photo[0].url[0]['_']; // Assuming the photo array is called "photo"
    const agent = project.agent[0].name;
    const description = project.description_en;
    const city = project.city;
    const price = project.price;
    const size = project.size;
   
    // Return an object with the title, index, and photos
    return {
      title: projectTitle,
      index,
      photos,
      agent,
      description,
      city,
      price,
      size,
    };
  });
  console.log(properties);
  return (
    <div className=" text-black mt-96">
      <h2>Properties</h2>
      <div className="w-11/12 max-w-[1400px] m-auto grid grid-cols-3 gap-7">
        {mappedProjects.map((property) => (
          <div key={property.reference_number} className="">
      
            <Image src={property.photos} width={500} height={300} className="rounded-lg" />
            <h3 className="text-orange-600 text-xl my-4 font-semibold">AED {property.price}</h3>
            <h1 className="font-semibold leading-5 text-lg text-royal mb-2">{property.title}</h1>

            <h2>{property.title_en}</h2>
            <p className="font-light leading-5 mt-3">
              {property.description[0].length > 200
                ? property.description[0].slice(0, 200) + "..."
                : property.description[0]}
            </p>
            <p>⌂ {property.size} sq ft </p>
          </div>
        ))}
      </div>
    </div>
  );
}
