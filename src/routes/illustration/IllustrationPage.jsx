import {React, useState} from 'react';
import PhotoAlbum from "react-photo-album";
import photos from "./photos";
import ElinLightbox from "components/lightbox/ElinLightbox";


function IllustrationPage() {
  const [index, setIndex] = useState(-1);

  return (
    <div>
      <PhotoAlbum 
        layout="masonry" 
        photos={photos} 
        columns={3}
        onClick={({ index }) => setIndex(index)}
        />

      <ElinLightbox 
        photos={photos}
        index={index}
        onClose={() => setIndex(-1)}/>
    </div>
    );
}

export default IllustrationPage;
