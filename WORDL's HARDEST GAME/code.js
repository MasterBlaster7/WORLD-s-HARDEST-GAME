var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["9ee56d3d-ccea-4a66-9f86-2e2c0cbcefbe","0b6046cc-39e5-4d8b-8842-da2daa12ee73","40a13e6d-5feb-45c1-91f2-9f1a169d2de8"],"propsByKey":{"9ee56d3d-ccea-4a66-9f86-2e2c0cbcefbe":{"name":"birdside_08_1","sourceUrl":"assets/api/v1/animation-library/gamelab/j7hjzyYwiTTxwKTvJCQQqgV1IL7m5oZn/category_animals/birdside_08.png","frameSize":{"x":400,"y":216},"frameCount":1,"looping":true,"frameDelay":2,"version":"j7hjzyYwiTTxwKTvJCQQqgV1IL7m5oZn","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":216},"rootRelativePath":"assets/api/v1/animation-library/gamelab/j7hjzyYwiTTxwKTvJCQQqgV1IL7m5oZn/category_animals/birdside_08.png"},"0b6046cc-39e5-4d8b-8842-da2daa12ee73":{"name":"city_1","sourceUrl":"assets/api/v1/animation-library/gamelab/OGMmhuYDozWZhjtNHQkjhdvs2Ge_Q0UF/category_backgrounds/city.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"OGMmhuYDozWZhjtNHQkjhdvs2Ge_Q0UF","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/OGMmhuYDozWZhjtNHQkjhdvs2Ge_Q0UF/category_backgrounds/city.png"},"40a13e6d-5feb-45c1-91f2-9f1a169d2de8":{"name":"start_button_1","sourceUrl":"assets/api/v1/animation-library/gamelab/J9BTQrhVZ423u2LL0.f5j1tn.Mhq9sml/category_video_games/start_button.png","frameSize":{"x":108,"y":48},"frameCount":1,"looping":true,"frameDelay":2,"version":"J9BTQrhVZ423u2LL0.f5j1tn.Mhq9sml","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":108,"y":48},"rootRelativePath":"assets/api/v1/animation-library/gamelab/J9BTQrhVZ423u2LL0.f5j1tn.Mhq9sml/category_video_games/start_button.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var wall3=createSprite(50,-55,10,410)
wall3.shapeColor="blue"
var wall4=createSprite(50,415,10,410)
wall4.shapeColor="blue"
var wall5=createSprite(110,-55,10,410)
wall5.shapeColor="blue"
var wall6=createSprite(110,415,10,410)
wall6.shapeColor="blue"
var wall7=createSprite(170,-55,10,410)
wall7.shapeColor="blue"
var wall8=createSprite(170,415,10,410)
wall8.shapeColor="blue"
var wall9=createSprite(230,-55,10,410)
wall9.shapeColor="blue"
var wall10=createSprite(230,415,10,410)
wall10.shapeColor="blue"
var wall11=createSprite(290,-55,10,410)
wall11.shapeColor="blue"
var wall12=createSprite(290,415,10,410)
wall12.shapeColor="blue"
var wall13=createSprite(350,-55,10,410)
wall13.shapeColor="blue"
var wall14=createSprite(350,415,10,410)
wall14.shapeColor="blue"
var gamestate="serve"
  var Score=0

var bird=createSprite(10,200,20,20)
bird.setAnimation("birdside_08_1")
bird.scale=0.1
var line1=createSprite(250,-430,400,10)
var line2=createSprite(200,410,410,10)

  
 
  
function draw() {
createEdgeSprites()
  background("brown")
  fill("white")
   text("LIVES:"+Score,294,17) 
if (gamestate==="serve"){
  fill("red")
  textSize(30)
  text("PRESS SPACE TO START",30,200)
if (keyDown("space")) {
  gamestate="play"
}
 }

    
    if (keyDown("space")) {
   
      wall3.velocityY=-4
  wall4.velocityY=-4
  wall5.velocityY=4
  wall6.velocityY=4
  wall7.velocityY=-4
  wall8.velocityY=-4
  wall9.velocityY=4
  wall10.velocityY=4
   wall11.velocityY=-4
  wall12.velocityY=-4
   wall13.velocityY=4
  wall14.velocityY=4
    
  
    }
 

if (wall3.isTouching(line1)) {
  wall3.velocityY=4
  wall4.velocityY=4
}
if (wall3.isTouching(line2)) {
  wall3.velocityY=-4
  wall4.velocityY=-4
}
if (wall5.isTouching(line1)) {
  wall5.velocityY=4
  wall6.velocityY=4
}
if (wall5.isTouching(line2)) {
  wall5.velocityY=-4
  wall6.velocityY=-4
}
if (wall7.isTouching(line1)) {
  wall7.velocityY=4
  wall8.velocityY=4
}
if (wall7.isTouching(line2)) {
  wall7.velocityY=-4
  wall8.velocityY=-4
}
  if (wall9.isTouching(line1)) {
  wall9.velocityY=4
  wall10.velocityY=4
}
if (wall9.isTouching(line2)) {
  wall9.velocityY=-4
  wall10.velocityY=-4
}
if (wall11.isTouching(line1)) {
  wall11.velocityY=4
  wall12.velocityY=4
}
if (wall11.isTouching(line2)) {
  wall11.velocityY=-4
  wall12.velocityY=-4
}
if (wall13.isTouching(line1)) {
  wall13.velocityY=4
  wall14.velocityY=4
}
if (wall13.isTouching(line2)) {
  wall13.velocityY=-4
  wall14.velocityY=-4
}
 


  if(keyDown("right")){
    bird.x=bird.x +5;
  }
  if(keyDown("left")){
    bird.x=bird.x -5;
  }
  if(keyDown("down")){
    bird.y=bird.y+ 5;
  }
   if(keyDown("up")){
    bird.y=bird.y- 5;
  }
if (bird.isTouching(wall3)) {
  Score=Score+1
  bird.x=10
  bird.y=200
}
if (bird.isTouching(wall4)) {
  Score=Score+1
  bird.x=10
  bird.y=200
}
if (bird.isTouching(wall5)) {
  Score=Score+1
  bird.x=10
  bird.y=200
}
if (bird.isTouching(wall6)) {
  Score=Score+1
  bird.x=10
  bird.y=200
}
if (bird.isTouching(wall7)) {
  Score=Score+1
  bird.x=10
  bird.y=200
}
if (bird.isTouching(wall8)) {
  Score=Score+1
  bird.x=10
  bird.y=200
}
if (bird.isTouching(wall9)) {
  Score=Score+1
  bird.x=10
  bird.y=200
}
if (bird.isTouching(wall10)) {
  Score=Score+1
  bird.x=10
  bird.y=200
}
if (bird.isTouching(wall11)) {
  Score=Score+1
  bird.x=10
  bird.y=200
}
if (bird.isTouching(wall12)) {
  Score=Score+1
  bird.x=10
  bird.y=200
}
if (bird.isTouching(wall13)) {
  Score=Score+1
  bird.x=10
  bird.y=200
}
if (bird.isTouching(wall14)) {
  Score=Score+1
  bird.x=10
  bird.y=200
}

if (bird.isTouching(rightEdge)) {
  wall3.destroy()
   wall4.destroy()
    wall5.destroy()
     wall6.destroy()
      wall7.destroy() 
       wall8.destroy()
        wall9.destroy()
         wall10.destroy()
          wall11.destroy()
           wall12.destroy()
            wall13.destroy()
            wall14.destroy()
     
     
  textSize(30)
  fill("red")
  text("YOU ARE THE CHAMP",50,200)
}
drawSprites()

}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
