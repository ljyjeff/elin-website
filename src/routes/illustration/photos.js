

const photoLocalLinks = [
  { src: "sheeleepy.jpg", width: 4050, height: 6000 },
  { src: "spring_rain.jpg", width: 2800, height: 4000 },
  { src: "red_and_ak_grandma.jpg", width: 2244, height: 1452 },
  { src: "listen_to_summer.jpg", width: 1800, height: 1800 },
  { src: "self_portrait.jpg", width: 1452, height: 2244 },
];

const photos = photoLocalLinks.map((photo) => {

  return {
    src: require(`${"./images/" + photo.src}`),
    width: photo.width,
    height: photo.height,
  };
});

export default photos;
