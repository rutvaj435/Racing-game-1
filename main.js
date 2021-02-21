
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


var car1_width = 120;
var car1_height = 70;
var car1_image = "car1.png";
var car_x = 10;
var car_y = 10;
var car1Tag;

var car2_width = 120;
var car2_height = 70;
var car2_image = "download.png";
var car2_x = 10;
var car2_y = 100;
var car2Tag;


var background_image = "racing.jpg";
var background_imageTag;

function add() {
    background_imageTag = new Image();
    background_imageTag.onload = uploadBackground;
    background_imageTag.src = background_image;

    car1Tag = new Image();
    car1Tag.onload = uploadCar1;
    car1Tag.src = car1_image;

    car2Tag = new Image();
    car2Tag.onload = uploadCar2;
    car2Tag.src = car2_image;


}

function uploadBackground(){
    ctx.drawImage(background_imageTag, 0, 0, canvas.width, canvas.height);
}
function uploadCar1() {
    ctx.drawImage(car1Tag, car_x, car_y, car1_width, car1_height);

}
function uploadCar2() {
    ctx.drawImage(car2Tag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", keyDownFn);

function keyDownFn(e) {
    var keyPressed = e.keyCode;
    if (keyPressed == "38") {
        console.log("up");
        car1_up();
        
    }
    if (keyPressed == "37") {
        console.log("left");
        car1_left();
        

    }
    if (keyPressed == "40") {
        console.log("down");
        car1_down();
        
    }
    if (keyPressed == "39") {
        console.log("right");
        car1_right();
        

    }
    if (keyPressed == "87") {
        console.log("w");
        car2_up();
        
    }
    if (keyPressed == "65") {
        console.log("a");
        car2_left();

    }
    if (keyPressed == "83") {
        console.log("s");
        car2_down();

    }
    if (keyPressed == "68") {
        console.log("d")
        car2_right();
    }
}