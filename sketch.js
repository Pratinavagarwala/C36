var allPlayers;
var canvas,bgIMG;
var database,playerCount;
var gameState=0;
var form,player,game;


function setup(){
    createCanvas(400,400);
    database=firebase.database();
    game=new Game();
    game.getState();
    game.start();

   
}

function draw(){
  if(playerCount===4){
      game.update(1);
  }
  if(gameState===1){
      clear();
      game.play();
  }
}

