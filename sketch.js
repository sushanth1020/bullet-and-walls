var car, wall
var speed,weight
var wall, thickness


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  speed=random(223,321);
  weight=random(3052);
  thickness=random(22,83);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  car=createSprite(50,200,50,50);
  car.velocityX=sped;
  wall= createSprite(1500,200,60,thickness,height/2);
  wall.shapeColor(80,80,80);
  if(wall.x-car.x < (car.width+wall.width)/2){

  car.velocityX=0;
  var deformation=0.5 * weight * speed* sped/22509;

  if(deformation>180){
    car.shapeColor=color(255,0,0);
  }

  if(deformation<180 && deformation>100){
    car.shapeColor= color(230,230,0);
  }

  if(deformation<100){
    car.shapeColor=color(0,255,0);
  }
  }
  display();
  hasCollided();
  
if(hasCollided(bullet,wall))
{

bullet.velocity=0;
var damage=0.5 = weight*speed*speed/(thickness *thickness *thickness)
}

set(damage=10)
{

  wall.shapeColor=color(255,0,0);
}
set(damage=10)
{
  wall.shapeColor=color(0,255,o);
}



}








}
function hasCollided(bullet,wall){
   bulletRightEdge.Ibullet.x,Ibullet.width;
   wallLeftEdge.Iwall.x;
   if(bulletRightEdge && wallLeftEdge ){
     return true
   }
     return false;
}


}











