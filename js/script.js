document.addEventListener("DOMContentLoaded", () => {
  const heading = document.getElementById("title");
  heading.innerText = "Waiting for Content";

  //here is an object with properties
  const animalCrossingOBJ = {
    title: "Animal Crossing",
    developer: "Nintendo",
    genre: "Simulation",
    releaseYear: 2001,
    mainCharacters: ["Tom Nook", "Isabelle", "K.K. Slider", "Blathers"],
    features: {
      customization: true,
      multiplayer: true,
      seasonsChange: true,
      realTimeClock: true,
    },
  };

  console.log(animalCrossingOBJ);
  

  //   // **************** Now lets talk about JSON
    console.log("**** JSON String Example");
    const animalCrossingJsonString = '{"title":"Animal Crossing","developer":"Nintendo","genre":"Simulation","releaseYear":2001,"mainCharacters":["Tom Nook","Isabelle","K.K. Slider","Blathers"],"features":{"customization":true,"multiplayer":true,"seasonsChange":true,"realTimeClock":true}}';

});
