
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import styles from "./ElinLightbox.module.css";

function RenderSlide({ slide, children}) {
  return (
    <div className={styles.slide_container}>
      <div className={styles.image_container}>
        {children}
      </div>
      <div className={styles.description_container}>
        <h2>{slide.title}</h2>
      </div>
    </div>
  );
}

export default function ElinLightbox({photos, index, onClose}) {
  return <Lightbox
        className={styles.lightbox}
        carousel={{padding: "55px"}}
        render={{
          slideContainer: ({ slide, children }) => <RenderSlide slide={slide} children={children} />,
        }}
        thumbnails={{vignette: false}}
        slides={photos}
        open={index >= 0}
        index={index}
        close={onClose}
        plugins={[Thumbnails, Zoom]}
      />;
}
