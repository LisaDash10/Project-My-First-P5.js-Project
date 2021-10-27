function preload() {

}

function setup() {
    canvas = createCanvas(640,480);
    canvas.center();
    video = createCapture(VIDEO);    
    video.hide();
}

function draw() {
    image(video,0,0,640,480);
    
    fill(0, 0, 153);
    stroke(0, 0, 153);
    ellipse(18, 80, 30, 800);

    fill(0, 0, 153);
    stroke(0, 0, 153);
    ellipse(30, 10, 1280, 30);

    fill(0, 0, 153);
    stroke(0, 0, 153);
    ellipse(630, 80, 30, 800);

    fill(0, 0, 153);
    stroke(0, 0, 153);
    ellipse(30, 465, 1280, 30);

    fill(255,182,193)
    stroke(255,182,193);
    circle(35,38,70);

    fill(255,182,193)
    stroke(255,182,193);
    circle(35,448,70);

    fill(255,182,193)
    stroke(255,182,193);
    circle(610,448,70);

    fill(255,182,193)
    stroke(255,182,193);
    circle(610,35,70);
    
}

function take_snapshot() {
    save("student_name.png");
}