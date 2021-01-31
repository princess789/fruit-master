var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["76bf470b-616a-4df4-8fb4-9d00069e57a0","92c768d4-9535-4707-a326-a3858792301f","ee2cdfad-a20d-4b4e-8a28-ec16e1f7c45f","10a445b9-17d4-408a-9b28-d8d33b943d12","079bbdcb-c7b0-4319-8b50-95e65c031020","f53f9343-31d6-4539-bc3d-ac6f3005879f","7f894736-d3e5-4f2d-8370-ef6d31f9debf"],"propsByKey":{"76bf470b-616a-4df4-8fb4-9d00069e57a0":{"name":"fruit2","sourceUrl":null,"frameSize":{"x":382,"y":310},"frameCount":1,"looping":true,"frameDelay":15,"version":"becTGdA_devjRZz1v6uMlKIsi59fa7Ok","loadedFromSource":true,"saved":true,"sourceSize":{"x":382,"y":310},"rootRelativePath":"assets/76bf470b-616a-4df4-8fb4-9d00069e57a0.png"},"92c768d4-9535-4707-a326-a3858792301f":{"name":"fruit3","sourceUrl":"assets/api/v1/animation-library/gamelab/oVyTBD.xMENrs0k4sc4dH9NHJSYtTBeL/category_food/pear.png","frameSize":{"x":206,"y":300},"frameCount":1,"looping":true,"frameDelay":5,"version":"oVyTBD.xMENrs0k4sc4dH9NHJSYtTBeL","loadedFromSource":true,"saved":true,"sourceSize":{"x":206,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/oVyTBD.xMENrs0k4sc4dH9NHJSYtTBeL/category_food/pear.png"},"ee2cdfad-a20d-4b4e-8a28-ec16e1f7c45f":{"name":"alienGreen_badge_1","sourceUrl":"assets/api/v1/animation-library/gamelab/oJA_StLAuFjArBvI70IttdAWhnlMl8Wo/category_characters/alienGreen_badge.png","frameSize":{"x":49,"y":49},"frameCount":2,"looping":true,"frameDelay":2,"version":"oJA_StLAuFjArBvI70IttdAWhnlMl8Wo","loadedFromSource":true,"saved":true,"sourceSize":{"x":98,"y":49},"rootRelativePath":"assets/api/v1/animation-library/gamelab/oJA_StLAuFjArBvI70IttdAWhnlMl8Wo/category_characters/alienGreen_badge.png"},"10a445b9-17d4-408a-9b28-d8d33b943d12":{"name":"sword_silver_1","sourceUrl":null,"frameSize":{"x":100,"y":109},"frameCount":1,"looping":true,"frameDelay":12,"version":"zYvYXffCzj8R8fU1uokEgekwlGzVkqNB","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":109},"rootRelativePath":"assets/10a445b9-17d4-408a-9b28-d8d33b943d12.png"},"079bbdcb-c7b0-4319-8b50-95e65c031020":{"name":"fruit1","sourceUrl":null,"frameSize":{"x":270,"y":300},"frameCount":1,"looping":true,"frameDelay":12,"version":"qimoHSGW8Qu4Neans.ei5rhzQ17GN6V2","loadedFromSource":true,"saved":true,"sourceSize":{"x":270,"y":300},"rootRelativePath":"assets/079bbdcb-c7b0-4319-8b50-95e65c031020.png"},"f53f9343-31d6-4539-bc3d-ac6f3005879f":{"name":"fruit4","sourceUrl":null,"frameSize":{"x":300,"y":295},"frameCount":1,"looping":true,"frameDelay":12,"version":"iJiPj2JKhIJvQxRRyLTTYwTV.MhxrLRY","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":295},"rootRelativePath":"assets/f53f9343-31d6-4539-bc3d-ac6f3005879f.png"},"7f894736-d3e5-4f2d-8370-ef6d31f9debf":{"name":"textGameOver_1","sourceUrl":"assets/api/v1/animation-library/gamelab/jlwUdmDfQ.Fl8uZni7e_c3sVaNJCXBYL/category_gameplay/textGameOver.png","frameSize":{"x":412,"y":78},"frameCount":1,"looping":true,"frameDelay":2,"version":"jlwUdmDfQ.Fl8uZni7e_c3sVaNJCXBYL","loadedFromSource":true,"saved":true,"sourceSize":{"x":412,"y":78},"rootRelativePath":"assets/api/v1/animation-library/gamelab/jlwUdmDfQ.Fl8uZni7e_c3sVaNJCXBYL/category_gameplay/textGameOver.png"}}};
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

var sword = createSprite(200, 200);
sword.setAnimation("sword_silver_1");
  var play =1;
  var end = 0;
  var gamestate = 1;
  var score = 0
  var fruitGroup=createGroup();;
  var enemyGroup=createGroup();;
  
  
 function draw(){
     
    background(" lightblue");
    if (gamestate ===1){
     sword.x = World.mouseX;
    sword.y = World.mouseY;
    if(fruitGroup.isTouching (sword)) {
        fruitGroup.destroyEach () ;
          score=score+2;
          //add sound like you are cutting fruit
          playSound("assets/category_whoosh/heavy_sword_whoosh.mp3")
    }
    fruits ();
    enemies ();
    if (enemyGroup.isTouching(sword)){
      gamestate=0;
      //play soundwhen game ends
      playSound("assets/category_female_voiceover/you_lose_female.mp3")
    }
    }
    else
     {
      sword.setAnimation("textGameOver_1");
      fruitGroup.setVelocityEach(0, 0);
      enemyGroup.setVelocityEach(0, 0);
    }
    text("Score: "+ score, 250, 50);
    
    
   
    drawSprites();
  

}

function enemies(){
  
  if(World.frameCount%80===0){
    var enemy=createSprite(0,200,20,20);
    enemy.y = randomNumber(50,350)
    enemy.setAnimation("alienGreen_badge_1")
    enemy.scale=1
    //enemy.debug=true;
    enemy.velocityX=2+(score/10);
    enemyGroup.add(enemy)
  } 
}
function fruits (){
  
  if(World.frameCount%80===0){
    var fruit=createSprite(400,200,20,20);
    var pos=randomNumber(1,2);
    if(pos ===1){
      fruit.x=400;
     fruit.velocityX=-(2+(score/4));
    
    }
    else
    if (pos ===2){
      fruit.x=0;
      fruit.velocityX=(2+(score/4));
    }
    fruit.y = randomNumber(50,350)
    fruit.setAnimation("fruit"+randomNumber(1,4))
    fruit.scale=0.2
    //fruit.debug=true;
    
    fruitGroup.add(fruit)
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
