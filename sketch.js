var player, playerImg;
var chicken, chickenImg;
var cow, cowImg;
var rabbit, rabbitImg;
var duck, duckImg;
var owl, owlImg;
var background, backgroundImg
var fence1,fence2,fence3,fence4,fence5,fence6,fence7,fence8;
var fenceGroup,wallGroup 
var wall1, wall2, wall3, wall4, wall5;
var cattlePen
var chickenCoop
var pigPen
var quackShack
var animalShelter
var owlHangout
var rabbitHutch 

function preload(){
  playerImg = loadImage("./assets/player.jpg")
  backgroundImg = loadImage("./assets/background.jpeg")
}

function setup() {
  createCanvas(800,330);
  
  background = createSprite(400, 152, 50, 50);
  background.addImage("background", backgroundImg)
  background.scale = 0.26
  
  fenceGroup = createGroup()
  wallGroup = createGroup()

  fence1 = createSprite(530,195, 15, 120 )
  fence1.shapeColor = "black"
  fenceGroup.add(fence1)
  fence2 = createSprite(530, 65, 15, 75)
  fence2.shapeColor = "black"
  fenceGroup.add(fence2)
  fence3 = createSprite(625,65, 150, 15)
  fence3.shapeColor = "black"
  fenceGroup.add(fence3)
  fence4 = createSprite(692.5, 100, 15,80)
  fence4.shapeColor = "black"
  fenceGroup.add(fence4)
  fence5 = createSprite(692.5, 235, 15,100)
  fence5.shapeColor = "black"
  fenceGroup.add(fence5)
  fence6 = createSprite(405,303, 260,15)
  fence6.shapeColor = "black"
  fenceGroup.add(fence6)
  fence7 = createSprite(125, 303, 125,15)
  fence7.shapeColor = "black"
  fenceGroup.add(fence7)

  wall1 = createSprite(629, 170, 5, 100)
  wall1.shapeColor = "black";
  wallGroup.add(wall1)
  wall2 = createSprite(600, 125, 60, 5)
  wall2.shapeColor = "black"
  wallGroup.add(wall2)
  wall3 = createSprite(575,137,5,30)
  wall3.shapeColor = "black"
  wallGroup.add(wall3)
  wall4 = createSprite(600, 220, 60,5)
  wall4.shapeColor = "black"
  wallGroup.add(wall4)
  wall5 = createSprite(575, 205,5,35)
  wall5.shapeColor = "black"
  wallGroup.add(wall5)

  cattlePen = createSprite(75,145, 180,295)
  cattlePen.shapeColor = "blue"

  chickenCoop = createSprite(422, 50,24,40)
  chickenCoop.shapeColor = "red"

  pigPen = createSprite(505, 67, 43,65)
  pigPen.shapeColor = "pink"

  quackShack = createSprite(629,52,20,10)
  quackShack.shapeColor = "purple"

  rabbitHutch = createSprite(637,140,10,30)
  rabbitHutch.shapeColor = "#3AFF0AFF"

  player = createSprite(600, 166)
  player.addImage("player", playerImg)
  player.scale = 0.2

  owlHangout = createSprite(497,265, 55,70)
  owlHangout.shapeColor = "#94A9FFA8"


  
}

function draw() {
  
  if(keyIsDown(UP_ARROW)){
    player.y = player.y - 2
  }
  if(keyIsDown(DOWN_ARROW)){
    player.y = player.y + 2
  }
  if(keyIsDown(LEFT_ARROW)){
    player.x = player.x - 2
  }
  if(keyIsDown(RIGHT_ARROW)){
    player.x = player.x + 2
  }

  if(player.isTouching(wallGroup)){
    player.x = player.x - 0
    console.log("you have hit a wall") 
  }

  


  drawSprites();
}

// function spawn