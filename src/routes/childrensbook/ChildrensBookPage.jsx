import { React, useState } from 'react';
import { otherPhotos, giantIslandPhotos } from "./photos";
import { useParams } from 'react-router-dom';
import ElinLightbox from "components/lightbox/ElinLightbox";
import { RowAlbum } from "components/PhotoAlbums";

const books = {
  'giantisland': { photos: giantIslandPhotos, album: RowAlbum },
  'other': { photos: otherPhotos, album: RowAlbum }
}

function ChildrensBookPage() {
  const [index, setIndex] = useState(-1);
  const { book } = useParams();
  const photos = books[book].photos;

  return (
    <div>
      {books[book].album({
        photos: photos,
        onClick: ({ index }) => setIndex(index)
      })}

      <ElinLightbox
        photos={photos}
        index={index}
        onClose={() => setIndex(-1)} />
    </div>
  );
}

export default ChildrensBookPage;
