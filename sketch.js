//Create variables here
var dog, happydog, database, foods, foodStock;
var dog1img,dog2img;

function preload()
{//load images here
	dog1img=loadImage("images/dogImg.png");
  dog2img=loadImage("images/happyDog.png");

}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();

  dog=createSprite(250,350,50,50);
  dog.addImage(dog1img);
  dog.scale=0.2;

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {  
 background("skyblue")

if(keyWentDown(UP_ARROW)){
  writeStock(foods);
  dog.addImage(dog2img);
}


  drawSprites();
  //add styles here
  textSize(16);
  fill("black");
  text("Food Remaining:"+foods,200,180);
  text("Use UP_ARROW to feed Dog",100,20);
  

}
function readStock(data){
  foods = data.val();
}

function writeStock(count){

  if(count<=0){
    count = 0;
  }
  else{
    count = count-1;
  }
database.ref('/').update({
  Food: count
})

}




