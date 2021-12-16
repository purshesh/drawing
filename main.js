noseX = 0 ;
noseY = 0; 
difference = 0 ; 
rightWristX = 0 ; 
leftWristX = 0 ; 


function setup() {

    video = createCapture(VIDEO) ;
    video.size(550 , 500) ;

    canvas = createCanvas(550 , 500) ; 
    canvas.position(560 , 150) ;  

    poseNet = ml5.poseNet(video , modelLoaded) ; 
    poseNet.on('pose' , gotPoses);
} 

function modelLoaded() {

    console.log('model is Initialized') ; 
} 
 
function gotPoses(results) {
 

    if(results.lenght > 0) {

    
     console.log(results) ;  

     noseX = results[0].pose.nose.x ;
     noseY = results[0].pose.nose.y ; 
     console.log('NoseX' + noseX + 'NoseY' + noseY) ; 
  
      
     leftWristX = result[0].pose.leftWrist.x  ; 
     rightWristX = result[0].pose.rightWrist.x  ; 
      difference = leftWristX - rightWristX ; 

     console.log('Left Wrist' + leftWristX + 'Right Wrist' + rightWristX + 'difference' + difference) ;   
}
}
function draw() {

    background('#ADD8E6') ;  

    document.getElementById("square_side").innerHTML = 'Height and Width of the square will be ' + difference +'px' ; 
    stroke("#F90093") ;  
    fill("#F90093") ;  

    square(noseX , noseY , difference) ; 
}
