import { Ball } from "./modules/ball.js";
import { Bubble } from "./modules/bubble.js";
import { Snowflake } from "./modules/snowflakes.js";
let balls = [];
let snowflakes = [];
let bubbles = [];
let clickedIndex = -1;
function setup() {
    let numBubbles = 10;
    let numBalls = 10;
    let numFlakes = 10;
    createCanvas(500, 500);
    for (let i = 0; i < numBalls; i++) {
        balls.push(new Ball(random(25, width - 25), random(25, height - 25), random(10, 50), random_color(), "black"));
    }
    for (let i = 0; i < numBubbles; i++) {
        bubbles.push(new Bubble(random(25, width - 25), random(25, height - 25), random(10, 50), "#ffffff80", "purple"));
    }
    for (let i = 0; i < numFlakes; i++) {
        snowflakes.push(new Snowflake(random(25, width - 25), random(25, height - 25), random(10, 50), "white"));
    }
}
function draw() {
    background("skyblue");
    for (let i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].move();
    }
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].draw();
        bubbles[i].move();
    }
    for (let i = 0; i < snowflakes.length; i++) {
        snowflakes[i].draw();
        snowflakes[i].move();
    }
}
window.draw = draw;
window.setup = setup;
window.mousePressed = mousePressed;
window.mouseReleased = mouseReleased;
window.onmousemove = onMouse;
function onMouse(evt) {
    mouseX = evt.clientX;
    mouseY = evt.clientY;
}
function mousePressed() {
    for (let i = 0; i < balls.length; i++) {
        if (balls[i].touchingMouse()) {
            if (balls[i].isStopped()) {
                balls[i].go();
            }
            else {
                balls[i].stop();
            }
        }
    }
    for (let i = 0; i < bubbles.length; i++) {
        if (bubbles[i].touchingMouse()) {
            if (bubbles[i].isStopped()) {
                bubbles[i].go();
            }
            else {
                bubbles[i].stop();
            }
        }
    }
    for (let i = 0; i < snowflakes.length; i++) {
        if (snowflakes[i].touchingMouse()) {
            if (snowflakes[i].isStopped()) {
                snowflakes[i].go();
            }
            else {
                snowflakes[i].stop();
            }
        }
    }
}
function mouseReleased() {
}
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function random_color() {
    let r = random(0, 255);
    let g = random(0, 255);
    let b = random(0, 255);
    let random_color = "rgb(" + r + "," + g + "," + b + ")";
    return random_color;
}
//# sourceMappingURL=index.js.map