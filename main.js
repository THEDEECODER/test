video = "";
function preload(){
video = createVideo('video.mp4');

}
function setup(){
canvas = createCanvas(500, 400);
canvas.center();
video.hide(); 
}
function draw(){
image(video, 0, 0, 500, 400);
}
function start(){
    ml5 = ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("stats").innerHTML = "Status : Detecting Objects";
}
function modelloaded(){
    console.log("modelloaded");
    video.loop();
    video.speed(1);
    video.volume(0);
}