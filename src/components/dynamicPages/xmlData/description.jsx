export function splitXMLContent(xmlContent) {
  const markers = ['Property Details:', 'Amenities:', 'Location Advantage:', 'https:'];

  // If xmlContent is an array, use the first element
  if (Array.isArray(xmlContent)) {
    xmlContent = xmlContent[0];
  }

  // Initialize the start index for each part
  let startIndex = 0;
  const parts = [];

  // Find the start index for each marker and split the content accordingly
  markers.forEach(marker => {
    const markerIndex = xmlContent.indexOf(marker, startIndex);
    if (markerIndex !== -1) {
      // Add the part between markers, or an empty string if no content
      const partContent = xmlContent.substring(startIndex, markerIndex).trim();
      parts.push(partContent);
      startIndex = markerIndex;
    } else {
      // Marker not found, add an empty string
      parts.push("");
    }
  });

  // Add the last part (from the last marker to the end)
  const lastPart = xmlContent.substring(startIndex).trim();
  parts.push(lastPart);

  return parts;
}
