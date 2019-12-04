
export class Bubble {
    private x: number; // x of the circle center point
    private y: number; // y of the circle center point
    private size: number; // the circle's radius
    private xSpeed: number = random(-10, 10);
    private ySpeed: number = random(1, 3);
    private stopped: boolean = false;
    private color: string = "blue"; // the color of the bubble
    private borderColor: string = "purple"; // the color bubble's boarder
    // to build the bubble
    constructor(x: number, y: number, size: number, color: string, borderColor: string) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.borderColor = borderColor;
    }


    public stop() {
        this.stopped = true;
    }

    public go() {
        this.stopped = false;
    }

    public draw(): void {
        // to fill in the bubbles color
        fill(this.color);
        // to add the bubbles borders with a color
        stroke(this.borderColor);
        // draw the bubble
        ellipse(this.x, this.y, this.size);


    }

    public move(): void {
        if (this.stopped == false) {
            this.y = this.y - this.ySpeed;
            this.doBorderBehavior();
        }
    }

    // Return if ball is moving or not
    public isStopped(): boolean {
        return this.stopped;
    }

    public distFromMouse(): number {
        return dist(this.x, this.y, mouseX, mouseY);
    }

    public touchingMouse(): boolean {
        return this.distFromMouse() < this.size / 2;
    }

    /* This border behavior implements a wrap, so bubbles will flip over to the other side */
    private doBorderBehavior() {
        if (this.x < -this.size / 2) {
            this.x = width + this.size / 2;
        } else if (this.x > width + this.size / 2) {
            this.x = -this.size / 2;
        }
        if (this.y < -this.size / 2) {
            this.y = height + this.size / 2;
        } else if (this.y > height + this.size / 2) {
            this.y = -this.size / 2;
        }
    }
}

