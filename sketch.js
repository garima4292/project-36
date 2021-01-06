var dog, happyDog, database, p;
var foodStock;
var FeedButton;
var AddFeedButton;
var b=[];

function preload()
{
  dog1i = loadImage("images/dogImg.png");
  dog2i = loadImage("images/dogImg1.png");
}
function setup() {
  database=firebase.database();
  var canvas = createCanvas(500,500);

  dog=createSprite(250,400,150,150);
  dog.addImage(dog1i);
  dog.scale=0.15;

  FeedButton = createButton('Feed Pet');
  FeedButton.position(350,50);
  AddFeedButton = createButton('Add Feed');
  AddFeedButton.position(780,50);


  p = new PetFood();

}


function draw() {  
  background("yellow");

  textSize(20);
  fill("red");
  text("Dog food left: "+foodStock,160,300);
  p.display();
  p.getCount();
  console.log(foodStock)

  p.feedHim();
  p.addFood();
  

  



  drawSprites();
}

