const other = [
  { src: "ghmily.jpg", title: "Guess How Much I Love You", width: 1122, height: 1452},
];

const giantIsland = [
  { src: "giant_1.jpg", title: "Giant", width: 1122, height: 1452},
  { src: "giant_2.jpg", title: "Giant 2", width: 2244, height: 1452},
];

function toPhoto(photo) {
  return {
    src: require(`${"./images/" + photo.src}`),
    title: photo.title,
    width: photo.width,
    height: photo.height,
  };
} 

const otherPhotos = other.map(toPhoto);
const giantIslandPhotos = giantIsland.map(toPhoto);

export {otherPhotos, giantIslandPhotos};
