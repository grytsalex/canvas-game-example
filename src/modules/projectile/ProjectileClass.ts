interface IPosition {
  x: number;
  y: number;
}
type TCanvasCtx = CanvasRenderingContext2D | null;

class ProjectileClass {
  position: IPosition;
  velocity: IPosition;
  radius: number;
  private ctx: TCanvasCtx;

  constructor(ctx: TCanvasCtx, position: IPosition, velocity: IPosition) {
    this.ctx = ctx;

    this.position = position;
    this.velocity = velocity;
    this.ctx

    this.radius = 3;

    this.draw = this.draw.bind(this);
  }

  draw() {
    if(!this.ctx) return;
    this.ctx.beginPath();
    this.ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = "red";
    this.ctx.fill();
    this.ctx.closePath();
  }

  update() {
    if(!this.ctx) return;
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
}

export default ProjectileClass;
