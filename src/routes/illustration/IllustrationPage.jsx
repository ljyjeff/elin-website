import {React, useState} from 'react';
import PhotoAlbum from "react-photo-album";
import photos from "./photos";
import styles from "./IllustrationPage.module.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";


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

      <Lightbox
        className={styles.lightbox}
        thumbnails={{vignette: false}}
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Thumbnails]}
      />
    </div>
    );
}

export default IllustrationPage;
