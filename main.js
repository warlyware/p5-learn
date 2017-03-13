function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
    background(0);

    stroke(255);
    strokeWeight(4);
    noFill();

    if (mouseX > window.innerWidth / 2) {
        fill(255, 0, 200);
    }

    ellipse(window.innerWidth / 2, window.innerHeight / 2, 100, 100);
}

window.onresize = function() {
    createCanvas(window.innerWidth, window.innerHeight);
};
