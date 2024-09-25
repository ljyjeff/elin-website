import PhotoAlbum from "react-photo-album";

const MasonryAlbum = ({ columns = 3, photos, onClick }) =>
  <PhotoAlbum
    layout="masonry"
    photos={photos}
    columns={columns}
    onClick={onClick}
  />

const RowAlbum = ({ photos, onClick }) => <PhotoAlbum
  layout="rows"
  photos={photos}
  rowConstraints={{ maxPhotos: 1 }}
  onClick={onClick}
  renderPhoto={({ wrapperStyle, renderDefaultPhoto }) => (
    <div style={{ position: "relative", ...wrapperStyle, maxHeight: '45rem' }}>
      {renderDefaultPhoto({ wrapped: true })}
    </div>
  )}

/>
export { MasonryAlbum, RowAlbum};
