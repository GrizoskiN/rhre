import { useState } from "react";
import { parseXMLToJson } from "@/components/xmlFeed/getProjectData";
import fetch from "node-fetch";
import { convertAmenitiesShortcutsToFullText } from "../../components/dynamicPages/xmlData/amenities";
import { splitXMLContent } from "../../components/dynamicPages/xmlData/description";
const check = (
  <svg
    className="w-4 h-4"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg">
    <g
      id="_45-Check"
      fill="none"
      stroke="#000"
      strokeLinejoin="round"
      strokeWidth="2"
      data-name="45-Check">
      <path d="m17 1h-10a6 6 0 0 0 -6 6v18a6 6 0 0 0 6 6h18a6 6 0 0 0 6-6v-10" />
      <path d="m7 14 7 7 16-16" />
    </g>
  </svg>
);
import CustomGoogleMap from "../../components/dynamicPages/xmlData/CustomGoogleMap";
import Description from "../../components/dynamicPages/segments/Description";
import ProjectDetails from "../../components/dynamicPages/segments/ProjectDetails";
import ProjectInfo from "../../components/dynamicPages/segments/ProjectInfo";
import AmenitiesList from "@/components/dynamicPages/segments/AmenitiesList";
import LocationAdvantages from "@/components/dynamicPages/segments/LocationAdvantages";

import PropertiesGallery from "@/components/dynamicPages/segments/PropertiesGallery";
import AgentCard from "@/components/dynamicPages/segments/AgentCard";
import QrCode from "@/components/dynamicPages/segments/QrCode";
import AdditionalInformation from "@/components/dynamicPages/segments/AdditionalInfromation";

export default function ProjectPage({ project }) {
  const [index, setIndex] = useState(-1);
  if (!project) {
    return <div>Project not found</div>;
  }

  const parts = splitXMLContent(project.description_en[0]);
  const fullTextAmenities = convertAmenitiesShortcutsToFullText(
    project.amenities,
  );
  const q = `${project.q}`;
 
  // Assuming project.photo[0].url contains the URL of the image
  const photos = project.photo[0].url.map((url) => ({
    src: url._, // Assuming the URL is stored in the '_' property
    width: 800, // Set the width and height as needed
    height: 800,
    // srcSet: [     // You can adjust the srcSet as needed
    //   { src: url._, width: 400, height: 400 },
    //   { src: url._, width: 200, height: 200 },
    // ],
  }));
  
  return (
    <div className="bg-gradient-to-b from-white from-30% to-[#f2f2f2] mt-32 lg:mt-[10rem]">
      <div className="w-11/12 max-w-[1400px] m-auto h-[1px] bg-royal  lg:mt-32 "></div>
      <div className="w-11/12 max-w-[1400px] m-auto flex gap-1 lg:gap-3 my-4 text-[12px]">
        <h3 className="bg-royal text-white rounded-sm lg:rounded-md py-1 px-4">
          {project.city}
        </h3>
        <h3 className="bg-royal text-white rounded-sm lg:rounded-md py-1 px-4">
          {project.community}
        </h3>
        <h3 className="bg-royal text-white rounded-sm lg:rounded-md py-1 px-4">
          {project.sub_community}
        </h3>
      </div>
      <h1 className="w-11/12 m-auto max-w-[1400px] text-2xl font-semibold lg:text-4xl">
        {project.title_en}{" "}
      </h1>
      <div className="w-full overflow-x-hidden">
        <PropertiesGallery photos={photos} />
      </div>

      <div className="w-11/12 max-w-[1400px] m-auto">
        <div className="flex gap-5 flex-col lg:flex-row">
          <div className="lg:w-2/3">
            <Description parts={parts} />

            <ProjectInfo fullTextAmenities={fullTextAmenities} check={check} />

            <ProjectDetails parts={parts} check={check} />

            <AmenitiesList parts={parts} check={check} />

            <LocationAdvantages parts={parts} check={check} />
            {/* <AdditionalInformation parts={parts} /> */}
            <CustomGoogleMap key={q} q={q} />
          </div>
          <div className=" lg:w-1/3 ">
            <AgentCard project={project} />
          </div>
        </div>
        <QrCode permit={project.permit_number} parts={parts}/>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  // URL of your XML data
  const url = `https://expert.propertyfinder.ae/feed/rise-high-real-estate-l-l-c/privatesite/c859a1c2a0092d1c046313eb0fe1b2c0`;

  // Fetch the XML data
  const response = await fetch(url);
  const xmlData = await response.text();

  // Convert XML to JSON
  const jsonData = await parseXMLToJson(xmlData);
  console.log(JSON.stringify(jsonData, null, 2));

  // Assuming your JSON structure has a list of projects or items
  // Make sure the structure matches your actual JSON after conversion
  const paths = jsonData.list.property.map((project) => ({
    params: { id: project.reference_number.toString() }, // Ensure the id is a string
  }));
  
  return { paths, fallback: false };
}

  export async function getStaticProps({ params }) {
   const url = `https://expert.propertyfinder.ae/feed/rise-high-real-estate-l-l-c/privatesite/c859a1c2a0092d1c046313eb0fe1b2c0`;
   const response = await fetch(url);
   const xmlData = await response.text();

   let jsonData;
   try {
     jsonData = await parseXMLToJson(xmlData);
   } catch (error) {
     console.error("Error parsing XML:", error);
     return { props: { project: null } };
   }
   // Ensure that jsonData.list and jsonData.list.property are not undefined
   const properties = jsonData.list?.property || [];
   // Find the project that matches the `id` from the URL
   const project = properties.find(
     (p) => p.reference_number.toString() === params.id,
   );
   return {
     props: {
       project: project || null, // Ensure project is an object or null
     },
    
   };
  }


