import Image from 'next/image';
import xml2js from 'xml2js';
export async function getStaticProps() {
  const response = await fetch('https://expert.propertyfinder.ae/feed/rise-high-real-estate-l-l-c/genericportal/7f3c22fab8da721cd1dad02157156c63');
  const data = await response.text(); // Get the raw XML data

  const parser = new xml2js.Parser();
  let parsedData;
  try {
    parsedData = await parser.parseStringPromise(data);
  } catch (error) {
    console.error('Error parsing XML:', error);
    return { props: { data: {} } }; // Example of handling error
  }

  return { props: { data: parsedData } };
}

export default function Listings ({ data }) {
 

  const properties = data.list.property

  const allAgentNames = data.list.property.flatMap(property =>
    property.agent.map(agent => agent.name)
  );
  // const allPhotoUrls = data.list.property.flatMap(property =>
  //   property.photo.map(photo => photo)
  // );
  const allPhotoUrls = data.list.property.flatMap(property =>
    property.photo.flatMap(photo => 
      photo.url.flatMap(url => url['_'])
    )
  );
  const photos = data.list.property.flatMap(property=>property.photo.map(photo=>photo.url[0]))
    console.log(allPhotoUrls)

  return (
    <div className=' text-black'>
      <h2>Properties</h2>
      <div  className="grid grid-cols-3">
      {properties.map((property)=>(
          <div key={property.reference_number} className=''>
           {allPhotoUrls && allPhotoUrls.map((photoUrl, index) => (
          <img src={photoUrl} alt={`Property ${property.reference_number} - Image ${index}`} key={index} width={500} />
        ))}
          <h1>{property.city}</h1>
          {property.agent.map((agent, index) => (
          <h1 key={index}>{agent.name}</h1>
        ))}
          <h3>{property.price}</h3>
          <h2>{property.title_en}</h2>
          <p>{property.description_en}</p>
         
        
        </div>
      ))}
      </div>
    </div>
  );
}

