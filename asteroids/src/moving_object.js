class MovingObject {
  constructor(parameter) {
    this.pos = parameter.pos;
    this.vel = parameter.vel;
    this.radius = parameter.radius;
    this.color = parameter.color;
  }
  draw(ctx) {
    // ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}
export default MovingObject;
