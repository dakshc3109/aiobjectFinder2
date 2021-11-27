var status = "";
var vlaue = "";
function peload(){
}

function setup(){
    canvas = createCanvas(350, 250);
    canvas.position(470, 280);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 350, 250)
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    value = document.getElementById("input").value;
    console.log(value)
    document.getElementById("status").innerHTML = " Status: Detecting Objects"
}

function modelLoaded(){
    console.log("model Loaded");
    status = true;
}