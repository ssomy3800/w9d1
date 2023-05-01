
console.log("Webpack is working!");

import MovingObject from "./moving_object.js";
import Asteroid from "./asteroid.js";

window.MovingObject = MovingObject;

const canvas = document.getElementById("game-canvas");
canvas.width = 500;
canvas.height = 500;

const ctx = canvas.getContext("2d");
// const first = new MovingObject({
//     pos: [30, 30],
//     vel: [10, 10],
//     radius: 10,
//     color: "black"
//   });

// first.draw(ctx);
// first.move();
// first.move();

// first.draw(ctx);

let second = new Asteroid({ pos: [30, 30] });
console.log(second);
console.log(second.RADIUS);
second.draw(ctx);

// canvas.backgroundcolor = red;

// ctx.fillStyle = "black";
// ctx.arc(250, 250, 80, 0, 2 * Math.PI, true);