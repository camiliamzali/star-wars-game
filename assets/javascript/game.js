// Character Set-Up
var character = {
  obiWan: {
    name: "Obi-Wan Kenobi",
    image: "assets/images/obi-wan.jpeg",
    health: 120,
    attack: 8,
    counterAttack: 15,

  },

  anakin: {
    name: "Anakin Skywalker",
    image: "assets/images/anakin-skywalker.jpeg",
    health: 100,
    attack: 10,
    counterAttack: 20
  },

  jarJar: {
    name: "Jar Jar Binks",
    image: "assets/images/jar-jar-binks.jpeg",
    health: 180,
    attack: 5
  },

  sidious: {
    name: "Darth Sidious",
    image: "assets/images/dark-sidious",
    health: 150,
    attack: 7,
    counterAttack: 25
  }
};

//Character blocks

var characterDiv = $("<div class='col-md-2'>");