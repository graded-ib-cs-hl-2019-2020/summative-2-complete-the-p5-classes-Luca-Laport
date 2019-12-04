// let canvas: HTMLCanvasElement;
// let canvas_context: CanvasRenderingContext2D;
// let width: number;
// let height: number;
// let mouseX: number;
// let mouseY: number;


// //                          Functions related to canvas
// function createCanvas(width: number, height: number) {
//     // get canvas element from html page
//     canvas = <HTMLCanvasElement>document.getElementById('canvas')
//     // set canvas wdith and height
//     canvas.width = width;
//     canvas.height = height;

//     width = width;
//     height = height;


//     //get canvas 2d context
//     canvas_context = <CanvasRenderingContext2D>canvas.getContext("2d");
// }
// // this function configures the the color of the background of the canvas
// function background(color: string) {
//     //configure to drawn behind elements current in cnavas
//     canvas_context.globalCompositeOperation = 'destination-over';
//     //now draw!
//     canvas_context.fillStyle = color;
//     canvas_context.fillRect(0, 0, canvas.width, canvas.height);
//     // Reset default behavior
//     canvas_context.globalCompositeOperation = 'source-over';

// }
// function onClick(e: MouseEvent) {
// }


// //                          Drawing Related Functions
// // to fill in the object with a color
// function fill(color: string) {
//     canvas_context.fillStyle = color;
//     canvas_context.fill();
// }
// //to fill in the outline of the shape with a color
// function stroke(color: string) {
//     canvas_context.strokeStyle = color;
//     canvas_context.stroke();
// }
// // to draw the circle
// function ellipse(circle_center_x: number, circle_center_y: number, radius: number) {
//     canvas_context.beginPath();
//     canvas_context.arc(circle_center_x, circle_center_y, radius, 0, 2 * Math.PI);
// }
// //draw line 
// function line(origin_x: number, origin_y: number, end_x: number, end_y: number) {
//     canvas_context.moveTo(origin_x, origin_y);
//     canvas_context.lineTo(end_x, end_y);
//     canvas_context.stroke();
// }


// //                          Axuiliar functions
// function random(min: number, max: number): number {
//     return Math.floor(Math.random() * (max - min + 1) + min);

// }
// // resturns the distance between two points
// function dist(x1: number, y1: number, x2: number, y2: number): number {
//     let diff_x: number = x1 - x2;
//     let diff_y: number = y1 - y2;
//     let distance = Math.sqrt(diff_x * diff_x + diff_y * diff_y);
//     return distance;
// }
