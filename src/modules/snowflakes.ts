export class Snowflake {
    private x: number; // snowflake's starting point x
    private y: number; // snowlfake's starting point y
    private size: number; // the lines length of the flakes
    private ySpeed: number = random(2, 5);  // the falling speed of the flakes
    private stopped: boolean = false;
    private color: string = "pink"; //the color of the flake
    // to build the snowflakes
    constructor(x: number, y: number, size: number, color: string) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
    }

    public stop() {
        this.stopped = true;
    }

    public go() {
        this.stopped = false;
    }

    // Return if ball is moving or not
    public isStopped(): boolean {
        return this.stopped;
    }

    public draw(): void {
        stroke(this.color);
        line(this.x, this.y + this.size / 2, this.x, this.y - this.size / 2);
        line(this.x + this.size / 2, this.y, this.x - this.size / 2, this.y);
        line(this.x - this.size / 3, this.y - this.size / 3, this.x + this.size / 3, this.y + this.size / 3);
        line(this.x - this.size / 3, this.y + this.size / 3, this.x + this.size / 3, this.y - this.size / 3);
    }
    // increasing y's value to simulate the flakes falling
    public move(): void {
        if (this.stopped == false) {
            this.y = this.y + this.ySpeed;
            this.doBorderBehavior();
        }
    }

    public distFromMouse(): number {
        return dist(this.x, this.y, mouseX, mouseY);
    }

    public touchingMouse(): boolean {
        return this.distFromMouse() < this.size / 2;
    }

    private doBorderBehavior() {
        if (this.onYEdge()) {
            this.y = - (this.size / 2);
            this.x = random(1, width - length / 4);
            this.ySpeed = random(2, 10);
            this.size = random(20, 30);
        }
    }

    private onYEdge(): boolean {
        if (this.y - (this.size / 2) >= 750) {
            return true;
        } else {
            return false;
        }
    }

}
