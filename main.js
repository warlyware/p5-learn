var r = 0;
var b = 255;

var circle = {
    y: 200,
    diameter: 50
}

function setup() {
    createCanvas(640, 360);
}

function draw() {
    r = map(mouseX, 0, 600, 0, 255);
    b = map(mouseX, 0, 600, 255, 0);
    background(r, 0, b);
    fill(250, 200, 200);
    ellipse(mouseX, circle.y, circle.diameter, circle.diameter);

    circle.x = circle.x + 1;
}
