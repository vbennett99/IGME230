// We will use `strict mode`, which helps us by having the browser catch many common JS mistakes
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
"use strict";
const app = new PIXI.Application({width: 1000, height: 600});
document.body.appendChild(app.view);

// constants
const sceneWidth = app.view.width;
const sceneHeight = app.view.height;

// pre-load the main body image images
PIXI.loader.
add(["images/mothman.png"]).on("progress",e=>{console.log(`progress=${e.progress}`)}).
load(setup);

//variables
let main; //main stage

let body = new PIXI.Container(); //main container with the body of mothman
let sidebar = new PIXI.Container(); //sidebar that contains clothes changing buttons
let menu = new PIXI.Container(); //contains music mute button and screenshot button

app.stage.addChild(body);
app.stage.addChild(sidebar);
app.stage.addChild(menu);

let hatsButton, accessoriesButton, topsButton, bottomsButton, shoesButton, cameraButton; // buttons

//lists
let hats = [];
let accessories = [];
let tops = [];
let bottoms = [];
let shoes = [];

//other variables
let musicOn = false;

//filling the lists with their respective
    //hats
    var hat0 = PIXI.Texture.fromImage('images/hats/hat1.png');
    hats.push(hat0);
    
    //accessories
    var accessory0 = PIXI.Texture.fromImage('images/accessories/accessory1.png');
    accessories.push(accessory0);

    //tops
    var top0 = PIXI.Texture.fromImage('images/tops/top1.png');
    tops.push(top0);

    //bottoms
    var bottom0 = PIXI.Texture.fromImage('images/bottoms/bottom1.png');
    bottoms.push(buttom0);

    //shoes
    var shoe0 = PIXI.Texture.fromImage('images/shoes/shoes1.png');
    shoes.push(shoe0);

// ------------------------------------------------------------------------------

function setup() {
	main = app.stage;
	// #1 - Create the `start` scene
	startScene = new PIXI.Container();
    stage.addChild(main);
}

function AddButtons(){
    var leftArrow = PIXI.texture.fromImage('images/assets/leftArrow.png');
    var rightArrow = PIXI.texture.fromImage('images/assets/rightArrow.png');
    var muteButton = PIXI.texture.fromImage('images/assets/muteicon.png');
    var musicButton = PIXI.texture.fromImage('images/assets/musicicon.png');
    var cameraButton = PIXI.texture.fromImage('images/assets/cameraicon.png')
    
    //Back Buttons
    var backButton = new PIXI.Sprite(PIXI.texture.fromImage('images/assets/leftArrow.png'));
    backButton.buttonMode = true;
    backButton.anchor.set(0.5);
    backButton.x = 200;
    backButton.y = 200;
    backButton.interactive = true;
    backButton.buttonMode = true;
    
    //Next Buttons
    var nextButton = new PIXI.Sprite(rightArrow);
    nextButton.buttonMode = true;
    nextButton.anchor.set(0.5);
    nextButton.x = 200;
    nextButton.y = 400;
    nextButton.interactive = true;
    nextButton.buttonMode = true;
    
    //Music ON and OFF Button
    var musicButton = new PIXI.Sprite(musicButton);
    musicButton.buttonMode = true;
    musicButton.anchor.set(0.5);
    musicButton.x = 200;
    musicButton.y = 600;
    musicButton.interactive = true;
    musicButton.buttonMode = true;
    
    //Screenshot Button
    var screenshotButton = new PIXI.Sprite(cameraButton);
    screenshotButton.buttonMode = true;
    screenshotButton.anchor.set(0.5);
    screenshotButton.x = 400;
    screenshotButton.y = 200;
    screenshotButton.interactive = true;
    screenshotButton.buttonMode = true;
    
    app.stage.addChild(backButton);
    app.stage.addChild(nextButton);
}