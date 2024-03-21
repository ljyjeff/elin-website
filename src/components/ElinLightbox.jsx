
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import styles from "./ElinLightbox.module.css";

export default function ElinLightbox({photos, index, onClose}) {
  return <Lightbox
        className={styles.lightbox}
        carousel={{padding: "55px"}}
        thumbnails={{vignette: false}}
        slides={photos}
        open={index >= 0}
        index={index}
        close={onClose}
        plugins={[Thumbnails]}
      />;
}
