
var r = 218;
var g = 160;
var b = 221;

var circle = {
    x: 0,
    y: 200,
    diameter: 50
}

function setup() {
    createCanvas(640, 360);
}

function draw() {
    background(r, g, b);
    fill(250, 200, 200);
    ellipse(circle.x, circle.y, circle.diameter, circle.diameter);

    circle.x = circle.x + 1;
}
