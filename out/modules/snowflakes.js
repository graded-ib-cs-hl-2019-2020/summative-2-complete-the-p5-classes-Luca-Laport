export class Snowflake {
    constructor(x, y, size, color) {
        this.ySpeed = random(2, 5);
        this.stopped = false;
        this.color = "pink";
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
    }
    stop() {
        this.stopped = true;
    }
    go() {
        this.stopped = false;
    }
    isStopped() {
        return this.stopped;
    }
    draw() {
        stroke(this.color);
        line(this.x, this.y + this.size / 2, this.x, this.y - this.size / 2);
        line(this.x + this.size / 2, this.y, this.x - this.size / 2, this.y);
        line(this.x - this.size / 3, this.y - this.size / 3, this.x + this.size / 3, this.y + this.size / 3);
        line(this.x - this.size / 3, this.y + this.size / 3, this.x + this.size / 3, this.y - this.size / 3);
    }
    move() {
        if (this.stopped == false) {
            this.y = this.y + this.ySpeed;
            this.doBorderBehavior();
        }
    }
    distFromMouse() {
        return dist(this.x, this.y, mouseX, mouseY);
    }
    touchingMouse() {
        return this.distFromMouse() < this.size / 2;
    }
    doBorderBehavior() {
        if (this.onYEdge()) {
            this.y = -(this.size / 2);
            this.x = random(1, width - length / 4);
            this.ySpeed = random(2, 10);
            this.size = random(20, 30);
        }
    }
    onYEdge() {
        if (this.y - (this.size / 2) >= 750) {
            return true;
        }
        else {
            return false;
        }
    }
}
//# sourceMappingURL=snowflakes.js.map