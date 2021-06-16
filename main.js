noseX = 0;
noseY = 0;

function preload(){
    clown_nose = loadImage("https://i.postimg.cc/3RC4Zssm/closenose2.png");
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNetVar = ml5.poseNet(video,modelLoaded);
    poseNetVar.on("pose",gotPoses);
}

function modelLoaded(){
    console.log('PoseNet model is ready.');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX coord = "+noseX);
        console.log("noseY coord = "+noseY);
    }
}

function draw(){
    image(video,0,0,300,300);
    fill('red');
    stroke('black');
    circle(noseX,noseY,30);
    image(clown_nose,noseX-15,noseY-15,30,30);
}

function take_snapshot(){
    save("RealtimeFilter.png");
}

