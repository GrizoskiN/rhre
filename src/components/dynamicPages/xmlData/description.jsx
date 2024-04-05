// components/xmlFeed/splitXMLContent.js
export function splitXMLContent(xmlContent) {
    const markers = ['Property Details:', 'Amenities:', 'Location Advantage:'];
    
    // If xmlContent is an array, use the first element
    if (Array.isArray(xmlContent)) {
      xmlContent = xmlContent[0];
    }
  
    // Initialize the start index for each part
    let startIndex = 0;
    const parts = [];
  
    // Find the start index for each marker and split the content accordingly
    markers.forEach(marker => {
      const markerIndex = xmlContent.indexOf(marker);
      if (markerIndex !== -1) {
        parts.push(xmlContent.substring(startIndex, markerIndex).trim());
        startIndex = markerIndex;
      }
    });
  
    // Add the last part (from the last marker to the end)
    parts.push(xmlContent.substring(startIndex).trim());
  
    return parts;
  }
  