const other = [
  { src: "ghmily.jpg", title: "Guess How Much I Love You", width: 1122, height: 1452},
];

const giantIsland = [
  { src: "giant_1.jpg", title: "Giant Island", width: 1122, height: 1452},
  { src: "giant_2.jpg", title: "Giant Island", width: 2244, height: 1452},
];

const angel = [
    { src: "angel_1.jpg", title: "The True Angel", width: 4500, height: 2250},
    { src: "angel_2.jpg", title: "The True Angel", width: 4500, height: 2250},
    { src: "angel_3.jpg", title: "The True Angel", width: 4500, height: 2250},
    { src: "angel_4.jpg", title: "The True Angel", width: 4500, height: 2250},
    { src: "angel_5.jpg", title: "The True Angel", width: 4500, height: 2250},
    { src: "angel_6.jpg", title: "The True Angel", width: 4500, height: 2250},
    { src: "angel_7.jpg", title: "The True Angel", width: 4500, height: 2250},
    { src: "angel_8.jpg", title: "The True Angel", width: 4500, height: 2250},
    { src: "angel_9.jpg", title: "The True Angel", width: 4500, height: 2250},
    { src: "angel_10.jpg", title: "The True Angel", width: 4500, height: 2250},
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
const angelPhotos = angel.map(toPhoto);

export {otherPhotos, giantIslandPhotos, angelPhotos};
