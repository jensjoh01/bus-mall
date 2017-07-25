'use strict';

Image.previousNumber = [];

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

Image.altNames = ['R2D2 Bags', 'Banana Slicer', 'Ipad/Toilet Paper Holder', 'Sweet Rain Boots', 'All-in-one breakfast', 'Meatball Bubblegum', 'Red Chair', 'Cthulhu', 'Duck Face Dogie', 'Dragon Meat', 'Pen-Utensil!', 'Pet Sweepers', 'Pizza Scissors', 'Shark Sleeping Bag', 'Sweeping Baby', 'Tauntaun', 'Unicorn Meat', 'USB creature', 'Water Can', 'Wine Glass'];

Image.clickCount = 0;

// Create new objects from the file name
for (var i = 0; i < Image.allNames.length; i++) {
  new Image(Image.allNames[i], Image.altNames[i]);
}
// Get each of my HTML elements
Image.imgEl_1 = document.getElementById('image_1');
Image.imgEl_2 = document.getElementById('image_2');
Image.imgEl_3 = document.getElementById('image_3');
Image.container = document.getElementById('container');
// function to make random number
function makeRandomNumber() {
  return Math.floor(Math.random() * Image.all.length);
}
// This function assigns the random image source to my Image Id element
function displayImages() {
  var number = [];

  number[0] = makeRandomNumber();
  while(number[0] === Image.previousNumber[0] || number[0] === Image.previousNumber[1] || number[0] === Image.previousNumber[2]) {
    number[0] = makeRandomNumber();
  }
  number[1] = makeRandomNumber();
  while (number[1] === number[0] || number[1] === Image.previousNumber[0] || number[1] === Image.previousNumber[1] || number[1] === Image.previousNumber[2]){
    number[1] = makeRandomNumber();
  }
  number[2] = makeRandomNumber();
  while (number[2] === number[0] || number[2] === number[1] || number[2] === Image.previousNumber[0] || number[2] === Image.previousNumber[1] || number[2] === Image.previousNumber[2]) {
    number[2] = makeRandomNumber();
  }
  Image.imgEl_1.src = Image.all[number[0]].source;
  Image.imgEl_2.src = Image.all[number[1]].source;
  Image.imgEl_3.src = Image.all[number[2]].source;

  Image.imgEl_1.alt = Image.altNames[number[0]];
  Image.imgEl_2.alt = Image.altNames[number[1]];
  Image.imgEl_3.alt = Image.altNames[number[2]];

  Image.all[number[0]].timesShown += 1;
  Image.all[number[1]].timesShown += 1;
  Image.all[number[2]].timesShown += 1;

  Image.previousNumber = number;
}

// ++++++++++++++++++++ Event Handler ++++++++++++++++++++++++++++++

function clickHandler(e) {
  if(e.target.id === 'container'){
    return alert('Please click on an image!');
  }
  Image.clickCount ++;

  for(var i = 0; i < Image.all.length; i++){
    if(e.target.alt === Image.altNames[i]){
      Image.all[i].timesClicked += 1;
    }
  }
  if(Image.clickCount < 3){
    displayImages();
  } else {
    for(var j = 0; j < Image.all.length; j++){
      var listEl = document.getElementById('list');
      var liEl = document.createElement('li');
      liEl.textContent = Image.all[j].timesClicked + ' for the ' + Image.altNames[j];
      listEl.appendChild(liEl);
    }
    document.getElementById('container').removeEventListener('click', clickHandler);
  }
}

document.getElementById('container').addEventListener('click', clickHandler);
displayImages();
