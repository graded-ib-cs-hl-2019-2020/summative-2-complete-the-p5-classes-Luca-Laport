
export class Ball {
  private x: number;
  private y: number;
  private size: number;
  private xSpeed: number = random(-3, 3);
  private ySpeed: number = random(-3, 3);
  private stopped: boolean = false;
  private color: string = "red";
  private borderColor: string = "black";

  constructor(x: number, y: number, size: number, color: string, borderColor: string) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.borderColor = borderColor;

    /* TODO OPTIONAL - add optional parameters to set color and borderColor on creation of the object DONE */
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
    // to fill in the bubbles color
    fill(this.color);
    // to add the bubbles borders with a color
    stroke(this.borderColor);
    // draw the bubble
    ellipse(this.x, this.y, this.size);

  }

  public move(): void {
    if (this.stopped == false) {
      this.x = this.xSpeed + this.x;
      this.y = this.ySpeed + this.y;
      this.doBorderBehavior();
    }
  }

  public distFromMouse(): number {
    return dist(this.x, this.y, mouseX, mouseY);
  }

  public touchingMouse(): boolean {
    return this.distFromMouse() < this.size / 2;
  }

  /* This border behavior implements a bounce */
  private doBorderBehavior() {
    if (this.x < this.size / 2) {
      this.x = this.size / 2;
      this.xSpeed = -this.xSpeed;
    } else if (this.x > width - this.size / 2) {
      this.x = width - this.size / 2;
      this.xSpeed = -this.xSpeed;
    }
    if (this.y < this.size / 2) {
      this.y = this.size / 2;
      this.ySpeed = -this.ySpeed;
    } else if (this.y > height - this.size / 2) {
      this.ySpeed = -this.ySpeed;
      this.y = height - this.size / 2;
    }
  }

}
