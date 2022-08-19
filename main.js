var cancion1="";
var cancion2="";

var mix="";
var miy="";
var mdx="";
var mdy="";

function preload(){
    cancion1=loadSound("music.mp3");
    cancion1=loadSound("music2.mp3");
}
function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    modelo=ml5.poseNet(video,modelLoaded);
    modelo.on("pose",gotPoses);
}

function draw(){
    image(video,0,0,400,400);
}
function modelLoaded(){
    console.log("modelo caragado");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
		mix=results[0].pose.leftWrist.x;
        miy=results[0].pose.leftWrist.y;
        mdx=results[0].pose.rightWrist.x;
        mdy=results[0].pose.rightWrist.y;

        console.log(mix+" , "+ miy +" , "+ mdx +" , "+mdy);
    }
}