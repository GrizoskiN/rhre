import React from 'react';

const CustomGoogleMap = ({ q }) => {
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY;
  const height = 500;
  const width = "100%";
  const mode = "place";


  return (
    <iframe className='shadow-xl rounded-lg my-5'
      loading="lazy"
      src={`https://www.google.com/maps/embed/v1/${mode}?key=${googleMapsApiKey}&q=${encodeURIComponent(q)}`}
      referrerPolicy="no-referrer-when-downgrade"
      style={{ border:0 }}
      allowFullScreen
      width={width}
      height={height}
    ></iframe>
  );
};

export default CustomGoogleMap;
