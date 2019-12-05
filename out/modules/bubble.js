export class Bubble {
    constructor(x, y, size, color, borderColor) {
        this.xSpeed = random(-10, 10);
        this.ySpeed = random(1, 3);
        this.stopped = false;
        this.color = "blue";
        this.borderColor = "purple";
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.borderColor = borderColor;
    }
    stop() {
        this.stopped = true;
    }
    go() {
        this.stopped = false;
    }
    draw() {
        fill(this.color);
        stroke(this.borderColor);
        ellipse(this.x, this.y, this.size);
    }
    move() {
        if (this.stopped == false) {
            this.y = this.y - this.ySpeed;
            this.doBorderBehavior();
        }
    }
    isStopped() {
        return this.stopped;
    }
    distFromMouse() {
        return dist(this.x, this.y, mouseX, mouseY);
    }
    touchingMouse() {
        return this.distFromMouse() < this.size / 2;
    }
    doBorderBehavior() {
        if (this.x < -this.size / 2) {
            this.x = width + this.size / 2;
        }
        else if (this.x > width + this.size / 2) {
            this.x = -this.size / 2;
        }
        if (this.y < -this.size / 2) {
            this.y = height + this.size / 2;
        }
        else if (this.y > height + this.size / 2) {
            this.y = -this.size / 2;
        }
    }
}
//# sourceMappingURL=bubble.js.map