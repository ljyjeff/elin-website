const photoLocalLinks = [
  { src: "sheeleepy.jpg", title: "Sheeleepy", width: 4050, height: 6000 },
  { src: "spring_rain.jpg", title: "Spring Rain", width: 2800, height: 4000 },
  { src: "red_and_ak_grandma.jpg", title: "Little Red Riding Hood and Her AK47 Grandma", width: 2244, height: 1452 },
  { src: "listen_to_summer.jpg", title: "Listening to Summer", width: 1800, height: 1800 },
  { src: "self_portrait.jpg", title: "Self Portrait 2022", width: 1452, height: 2244 },
];

const photos = photoLocalLinks.map((photo) => {

  return {
    src: require(`${"./images/" + photo.src}`),
    title: photo.title,
    width: photo.width,
    height: photo.height,
  };
});

export default photos;
