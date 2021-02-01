var canvas;
var music;
var ob1, ob2, ob3, ob4, box;
var gameState = 1;

function preload() {
    music = loadSound("music.mp3");
}


function setup() {
    canvas = createCanvas(800, 600);

    //create 4 different surfaces
    ob1 = createSprite(100, 550, 200, 10);
    ob1.shapeColor = "red";
    ob2 = createSprite(300, 550, 200, 10);
    ob2.shapeColor = "blue";
    ob3 = createSprite(500, 550, 200, 10);
    ob3.shapeColor = "green";
    ob4 = createSprite(700, 550, 200, 10);
    ob4.shapeColor = "yellow";


    //create box sprite and give velocity
    box = createSprite(random(20, 750), 500, 30, 30);
    box.shapeColor = "white";
}

function draw() {
    background(rgb(169, 169, 169));
    //create edgeSprite
    createEdgeSprites();
    if (box.x > width - 20 || box.x < 0) {
        box.velocityY = box.velocityY * -1;
        box.velocityX = random(-2, -5);
    }
    if (box.x < 0) {
        box.velocityY = box.velocityY * -1;
        box.velocityX = random(2, 5);
    }

    if (box.y > height) {
        box.velocityY = box.velocityY * -1;
        box.velocityX = random(2, 5);
    }
    if (box.y < 0) {
        box.velocityY = box.velocityY * -1;
        box.velocityX = random(-2, -5);
    }

    if (gameState == 1) {
        box.velocityY = 2;
        if (box.isTouching(ob1) || box.isTouching(ob2) || box.isTouching(ob3) || box.isTouching(ob4)) {
            gameState = 2;
        }
    }
    if (gameState == 2) {
        if (box.isTouching(ob1) && box.bounceOff(ob1)) {
            box.shapeColor = "red";


        }
        if (box.isTouching(ob2) && box.bounceOff(ob2)) {
            box.shapeColor = "blue";
            box.velocityY = 0;
            box.velocityX = 0;


        }
        if (box.isTouching(ob3) && box.bounceOff(ob3)) {
            box.shapeColor = "green";


        }
        if (box.isTouching(ob4) && box.bounceOff(ob4)) {
            box.shapeColor = "yellow";

        }
        if (box.isTouching(ob1) || box.isTouching(ob4) || box.isTouching(ob3)) {
            music.play();
        }
        if (box.isTouching(ob2)) {
            music.stop();
        }
    }

    drawSprites();

    //add condition to check if box touching surface and make it box
}