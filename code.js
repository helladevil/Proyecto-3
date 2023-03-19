var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
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

var sofia = createSprite(20,25,15,15);
sofia.shapeColor = ("blue");



var wall1 = createSprite(10,70,100,20);
wall1.shapeColor = ("orange");

var wall2 = createSprite(100,50,20,100);
wall2.shapeColor = ("orange");

var wall3 = createSprite(160,20,100,20);
wall3.shapeColor = ("orange");

var wall4 = createSprite(170,155,20,100);
wall4.shapeColor = ("orange");
 
var wall5 = createSprite(70,150,100,20);
wall5.shapeColor = ("orange");
 
var wall6 = createSprite(250,70,20,100); 
wall6.shapeColor = ("orange");
 
var wall7 = createSprite(290,20,100,20);
wall7.shapeColor = ("orange");
 
var wall8 = createSprite(310,105,20,100);
wall8.shapeColor = ("orange");
 
var wall9 = createSprite(30,250,100,20); 
wall9.shapeColor = ("orange");

var wall10 = createSprite(90,250,20,100); 
wall10.shapeColor = ("orange");

var wall11 = createSprite(175,250,100,20);
wall11.shapeColor = ("orange");

var wall12 = createSprite(25,350,20,100);
wall12.shapeColor = ("orange");

var wall13 = createSprite(150,350,20,100);
wall13.shapeColor = ("orange");

var wall14 = createSprite(250,300,100,20);
wall14.shapeColor = ("orange");

var wall15 = createSprite(250,350,20,100);
wall15.shapeColor = ("orange");

var wall16 = createSprite(350,200,100,20); 
wall16.shapeColor = ("orange");

var wall17 = createSprite(350,300,20,100);
wall17.shapeColor = ("orange");

var wall18 = createSprite(300,400,100,20);
wall18.shapeColor = ("orange");

var wall19 = createSprite(350,100,100,20);
wall19.shapeColor = ("orange");

var wall20 = createSprite(65,350,100,20);
wall20.shapeColor = ("orange");

var wall21 = createSprite(350,250,100,20);
wall21.shapeColor = ("orange");

var wall22 = createSprite(190,200,100,20);
wall22.shapeColor = ("orange");







function draw() {

  background("lightblue");
  

drawSprites();




if (keyDown("up")) { sofia.y=sofia.y-10; }

if (keyDown("down")) { sofia.y=sofia.y+10; }

if (keyDown("right")) { sofia.x=sofia.x+10; }

if (keyDown("left")) { sofia.x=sofia.x-10; }

createEdgeSprites();
{


sofia.bounceOff(topEdge);
sofia.bounceOff(bottomEdge);
sofia.bounceOff(rightEdge);
sofia.bounceOff(leftEdge);


sofia.bounceOff(wall1);
sofia.bounceOff(wall2);
sofia.bounceOff(wall3);
sofia.bounceOff(wall4);
sofia.bounceOff(wall5);
sofia.bounceOff(wall6);
sofia.bounceOff(wall7);
sofia.bounceOff(wall8);
sofia.bounceOff(wall9);
sofia.bounceOff(wall10);
sofia.bounceOff(wall11);
sofia.bounceOff(wall12);
sofia.bounceOff(wall13);
sofia.bounceOff(wall14);
sofia.bounceOff(wall15);
sofia.bounceOff(wall16);
sofia.bounceOff(wall17);
sofia.bounceOff(wall18);
sofia.bounceOff(wall19);
sofia.bounceOff(wall20);
sofia.bounceOff(wall21);
sofia.bounceOff(wall22);
}





var cup = createSprite(400,380,20,50);
cup.shapeColor = ("gold");



  if ( sofia.collide(cup))  
  {background("white");
   textSize(40);
  stroke("red");
  text("You Win", 200,200);
 }

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
