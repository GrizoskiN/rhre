// Mapping object for amenities shortcuts to full text
export const amenitiesMapping = {
  BA: "Balcony",
  BP: "Built-in Wardrobes",
  BB: "BBQ area",
  BW: "Broadband ready",
  AC: "Central air conditioning",
  MR: "Maids room",
  GA: "Gazebo and outdoor entertaining area",
  PG: "Pets allowed",
  PP: "Private garage",
  SP: "Shared swimming pool",
  SE: "Study",
  BT: "Built-in Kitchen Appliances",
  CV: "Covered parking",
  SM: "Security",
  ML: "Maintenance",
  PK: "Public parking",
  RT: "Retail in building",
  AP: "Available Networked",
  SY: "Shared Gym",
  MS: "Mosque",
  // Add more as needed
};


// Function to convert shortcuts to full text
 export function convertAmenitiesShortcutsToFullText(amenitiesArray) {
   if (
     !amenitiesArray ||
     !Array.isArray(amenitiesArray) ||
     amenitiesArray.length === 0
   ) {
     console.log("Amenities are not in the expected format:", amenitiesArray);
     return amenitiesArray; // Return the original data if amenities are not in the expected format
   }
   // Split the single string into an array of shortcuts
   const amenitiesString = amenitiesArray[0];
   const amenitiesShortcuts = amenitiesString.split(",");
   // Map each shortcut to its full text equivalent
   const amenitiesFullText = amenitiesShortcuts.map((shortcut) => {
     const fullText = amenitiesMapping[shortcut.trim()];
     if (!fullText) {
       console.log("No mapping found for shortcut:", shortcut.trim());
     }
     return fullText || shortcut.trim(); // Use the shortcut if no mapping is found
   });
   // Join the full text amenities back into a string
   const fullTextAmenities = amenitiesFullText.join(", ");
   return fullTextAmenities;
 }
// export function convertAmenitiesShortcutsToFullText(project) {
//   if (!project.amenities || typeof project.amenities !== 'string') {
//     return project; // Return the original data if amenities are not in the expected format
//   }

//   // Split the amenities string into an array of shortcuts
//   const amenitiesShortcuts = project.amenities.split(',');

//   // Map each shortcut to its full text equivalent, or 'Unknown amenity' if not found
//   const amenitiesFullText = amenitiesShortcuts.map(shortcut => amenitiesMapping[shortcut.trim()] || 'Unknown amenity');

//   // Join the full text amenities back into a string
//   const fullTextAmenities = amenitiesFullText.join(', ');

//   // Replace the original shortcuts with the full text in the JSON data
//   return { ...project, amenities: fullTextAmenities };
// }

