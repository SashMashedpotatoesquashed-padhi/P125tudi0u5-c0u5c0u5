difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    
    canvas = createCanvas(400, 400);
    canvas.position(550,100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + " rightWristX = "+ rightWristX + " difference = " + difference);
    }
}

function draw() {
    background('#969A97');

    document.getElementById("font_size").innerHTML = "Font Size Of The Text Will Be = " + difference +"px";
    textSize(difference);
    fill('rgb(29, 200, 29)');
    text('Sashwat Padhi',50,400);
}