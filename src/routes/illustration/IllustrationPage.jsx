import { React, useState } from 'react';
import photos from "./photos";
import ElinLightbox from "components/lightbox/ElinLightbox";
import {MasonryAlbum} from "components/PhotoAlbums";


function IllustrationPage() {
  const [index, setIndex] = useState(-1);

  return (
    <div>
      <MasonryAlbum 
        photos={photos}
        onClick={({index}) => setIndex(index)}
      />
      <ElinLightbox
        photos={photos}
        index={index}
        onClose={() => setIndex(-1)} />
    </div>
  );
}

export default IllustrationPage;
