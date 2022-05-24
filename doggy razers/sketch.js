var database; 
var gameState=0
var playerCount=0
var distance=0
var form1
var player1
var game1
var carSpritev1
var  carSpritev2
var  carSpritev3
var  carSpritev4
var cars= []
var allplayers
var perritoEsperaImg

function preload(){
  perritoEsperaImg = loadImage("fotos/perritoEspera.png")
}

function setup(){
    createCanvas(windowWidth,windowHeight)
    database=firebase.database()
 
    game1=new Game();
    game1.getState()
    game1.start()

}

function draw(){
  background("white");
  
  if(playerCount === 4){
    game1.update(1); 
  }//Fin if

if(gameState === 1){

    game1.play(); 
}
  
}


