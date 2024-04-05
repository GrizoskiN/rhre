// CustomImageRenderer.js
import Image from "next/image";


export default function CustomImageRenderer({ photo }) {
  
  return (
    <div className="p-1">
     
        <Image className="hover:cursor-pointer "
          src={photo.src}
          width={photo.width}
          height={photo.height}
          alt={photo.alt}
          sizes={photo.sizes}
        />
    
     
    </div>
  );
}
