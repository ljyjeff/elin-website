const photoLocalLinks = [
  { src: "sheeleepy.jpg", title: "Sheeleepy", width: 4050, height: 6000 },
  { src: "spring_rain.jpg", title: "Spring Rain", width: 2800, height: 4000 },
  { src: "listen_to_summer.jpg", title: "Listening to Summer", width: 1800, height: 1800 },
  { src: "red_and_ak_grandma.jpg", title: "Little Red Riding Hood and Her AK47 Grandma", width: 2244, height: 1452 },
  { src: "afterschool.jpg", title: "After School", width: 1392, height: 1051 },
  { src: "rabbit_in_rabbit.jpg", title: "Rabbit In Rabbit", width: 1452, height: 2244 },
  { src: "drunk_rat.jpg", title: "Drunk Rat and Frozen Snake", width: 1024, height: 768 },
  { src: "greenward_catnata.jpg", title: "Greenward Catnata", width: 858, height: 1254 },
  { src: "self_portrait.jpg", title: "Self Portrait 2022", width: 1452, height: 2244 },
  { src: "sound_of_autumn.jpg", title: "Sound of Autumn", width: 2048, height: 2048 },
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
