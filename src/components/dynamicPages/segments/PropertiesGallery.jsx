// PropertiesGallery.jsx
import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import CustomImageRenderer from "./CustomImageRenderer";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function PropertiesGallery({ photos }) {

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = () => {
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };
  const slicedPhotos = photos.slice(0, 3)

  return (
    <div onClick={openLightbox} className="w-11/12 max-w-[1400px] m-auto gap-[1px] mt-6 mb-16 ">
    <PhotoAlbum className="w-full"
      layout="columns"
      columns={(containerWidth) => {
        if (containerWidth < 400) return 2;
        if (containerWidth < 800) return 2;
        return 3;
      }}
      padding={1}
      spacing={0}
      photosCount={3}
      photos={slicedPhotos}
      renderPhoto={CustomImageRenderer}
     
    //   sizes={{ size: "calc(100vw - 240px)" }}
    />
       <Lightbox
        slides={photos}
        open={lightboxOpen}
        index={lightboxIndex}
        close={closeLightbox}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </div>
  );
}
