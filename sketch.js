var pinkBox
var limeBox
var blueBox
var purpleBox

var box

var o1,o2

var edge1
var edge2
var edge3
var edge4

var muisc

function preload(){
  music = loadSound("music.mp3");


}


function setup() {
    createCanvas(800,600);

    edge1 = createSprite(0,0,10,2000);
    edge1.shapeColor = "Lime"
    edge2 = createSprite(0,0,2000,10);
    edge2.shapeColor = "lightcoral"
    edge3 = createSprite(800,0,10,2000);
    edge3.shapeColor = "plum"
    edge4 = createSprite(0,600,2000,10);
    edge4.shapeColor = "darkcyan"

  pinkBox = createSprite(100,580,200,30);
  pinkBox.shapeColor = "LightCoral"

  limeBox = createSprite(300,580,200,30);
  limeBox.shapeColor = "Lime"

  purpleBox = createSprite(700,580,200,30);
  purpleBox.shapeColor = "Plum"

  blueBox = createSprite(500,580,200,30);
  blueBox.shapeColor = "DarkCyan"

  box = createSprite(random(20,750))
  box.velocityX = 5
  box.velocityY = 5
  box.shapeColor="white"
  box.scale = 0.3
  
}

function draw() {
    background("DimGray");
    createEdgeSprites()

box.bounceOff(edge1)
box.bounceOff(edge2)
box.bounceOff(edge3)
box.bounceOff(edge4)

if (box.bounceOff(limeBox) || box.isTouching(limeBox)){
  box.velocityX = 0
  box.velocityY = 0 
  box.shapeColor = "lime"
  music.stop()
}
 
if (box.bounceOff(purpleBox)){
  box.shapeColor = "plum"
  music.play()
}

if (box.bounceOff(blueBox)){
  box.shapeColor = "darkcyan"
  music.play()
}

if (box.bounceOff(pinkBox)){
  box.shapeColor = "lightcoral"
  music.play()
}


  drawSprite(pinkBox)
  drawSprite(limeBox)
  drawSprite(blueBox)
  drawSprite(purpleBox)
  drawSprite(box)
  drawSprite(edge1)
  drawSprite(edge2)
  drawSprite(edge3)
  drawSprite(edge4)
}

