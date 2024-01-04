import spaceShip from "@/images/spaceship.webp";

interface IPosition {
  x: number;
  y: number;
}

type TCanvasCtx = CanvasRenderingContext2D | null;

class Player {
  position: IPosition;
  velocity: IPosition;
  width: number;
  height: number;
  image: HTMLImageElement;
  private ctx: TCanvasCtx;

  constructor(ctx: TCanvasCtx) {
    this.position = { x: 200, y: 200 };
    this.velocity = { x: 0, y: 0 };

    const image = new Image();
    image.src = spaceShip.src;
    this.image = image;
    this.image.onload = () => {
      this.width = image.width;
      this.height = image.height
    }
    this.ctx = ctx;

    this.animate = this.animate.bind(this);
  }

  animate() {
    requestAnimationFrame(this.animate);
    if (this.ctx) {
      this.ctx.fillStyle = "black";
      this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }
    this.draw();
  }

  draw() {
    if (!this.ctx) return;
    this.ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}

export default Player;
