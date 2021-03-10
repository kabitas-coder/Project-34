const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Rent = Matter.Rent;
const Constraint = Matter.Constraint;


var man;
var monster;
var background;

function preload() {
//preload the images here
man = loadImage ("image/superhero-01.png");
man = loadImage ("image/superhero-02.png");

background = loadImage ("image/GameingBackground.png");

}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
  man = createSprite (400,40,10,10);
  monster = createSprite ()

}

function draw() {
  background("white");

  man.display();
  monster.display();
  background.display();

}

function mouseDragged (){


}