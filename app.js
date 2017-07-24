'use strict';

var randomIndex_1_Previous;
var randomIndex_2_Previous;
var randomIndex_3_Previous;
var rounds = 1;

function Image(name) {
  this.name = name;
  this.source = 'img/' + this.name;
  this.timesShown = 0;
  this.timesClicked = 0;
  Image.all.push(this);
}

// Store my objects, need to call by parameter name
Image.all = [];
//Store my initial file names
Image.allNames = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];

// Create new objects from the file name
for (var i = 0; i < Image.allNames.length; i++) {
  new Image(Image.allNames[i]);
}
// Get each of my HTML elements
Image.imgEl_1 = document.getElementById('image_1');
Image.imgEl_2 = document.getElementById('image_2');
Image.imgEl_3 = document.getElementById('image_3');

// Function to take a random number and assign an image
function randomImageGenerator() {
  var randomIndex_1 = Math.floor(Math.random() * Image.all.length);
  var randomIndex_2 = Math.floor(Math.random() * Image.all.length);
  var randomIndex_3 = Math.floor(Math.random() * Image.all.length);

  // Make sure this round is different from last round
  while(randomIndex_1 === randomIndex_1_Previous || randomIndex_1 === randomIndex_2_Previous || randomIndex_1 === randomIndex_3_Previous){
    randomIndex_1 = Math.floor(Math.random() * Image.all.length);
  }
  while(randomIndex_2 === randomIndex_1_Previous || randomIndex_2 === randomIndex_2_Previous || randomIndex_2 === randomIndex_3_Previous){
    randomIndex_2 = Math.floor(Math.random() * Image.all.length);
  }
  while(randomIndex_3 === randomIndex_1_Previous || randomIndex_3 === randomIndex_2_Previous || randomIndex_3 === randomIndex_3_Previous){
    randomIndex_3 = Math.floor(Math.random() * Image.all.length);
  }
  // Makes sure random #2 is unique
  while(randomIndex_2 === randomIndex_1){
    randomIndex_2 = Math.floor(Math.random() * Image.all.length);
  }
  // Makes sure random #3 is unique
  while(randomIndex_3 === randomIndex_1 || randomIndex_3 === randomIndex_2){
    randomIndex_3 = Math.floor(Math.random() * Image.all.length);
  }

  Image.imgEl_1.src = Image.all[randomIndex_1].source;
  Image.imgEl_2.src = Image.all[randomIndex_2].source;
  Image.imgEl_3.src = Image.all[randomIndex_3].source;

  Image.all[randomIndex_1].timesShown += 1;
  Image.all[randomIndex_2].timesShown += 1;
  Image.all[randomIndex_3].timesShown += 1;

  rounds += 1;

  randomIndex_1_Previous = (randomIndex_1);
  randomIndex_2_Previous = (randomIndex_2);
  randomIndex_3_Previous = (randomIndex_3);

}


function checkForClicks() {
  if (document.getElementById('image_1').addEventListener('click', randomImageGenerator)) {
    alert('you clicked image1!!');
  }

document.getElementById('image_2').addEventListener('click', randomImageGenerator);
document.getElementById('image_3').addEventListener('click', randomImageGenerator);
}

document.getElementById('section').addEventListener('click',checkForClicks);
randomImageGenerator();
