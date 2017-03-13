var pt = {
    x: 300,
    y: 50
}

var col = {
    r: 255,
    g: 0,
    b: 0
}

function setup() {
    createCanvas(640, 360);
    background(0);
}

function draw() {
    col.r = random(100, 255);
    col.g = 0;
    col.b = random(100, 200);

    pt.x = random(0, width);
    pt.y = random(0, width);
    fill(col.r, col.g, col.b, 100);
    noStroke();
    ellipse(pt.x, pt.y, 24, 24);
}
