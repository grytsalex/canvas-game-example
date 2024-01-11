import spaceShip from "@/images/spaceship.webp";

const SPEED = 7;
const SCALE = 0.15;
const ROTATION = 0.15;

interface IPosition {
  x: number;
  y: number;
}

type TCanvasCtx = CanvasRenderingContext2D | null;
type TKeys = {
  [key: string]: {
    pressed: boolean;
  };
};

class Player {
  position: IPosition;
  velocity: IPosition;
  rotation: number
  width: number = 0;
  height: number = 0;
  image: HTMLImageElement;
  private ctx: TCanvasCtx;
  private keys: TKeys;

  constructor(ctx: TCanvasCtx, keys: TKeys) {
    this.ctx = ctx;
    this.keys = keys;

    this.rotation = 0;

    this.position = {
      x: 100,
      y: 100,
    };
    this.velocity = { x: 0, y: 0 };

    const image = new Image();
    image.src = spaceShip.src;
    this.image = image;

    this.image.onload = () => {
      this.width = image.width * SCALE;
      this.height = image.height * SCALE;

      if (!ctx) return;
      this.position.x = ctx.canvas.width / 2 - this.width / 2;
      this.position.y = ctx.canvas.height - this.height - 20;
    };

    this.animate = this.animate.bind(this);
  }

  animate() {
    requestAnimationFrame(this.animate);
    if (!this.ctx) return;
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.update();

    if (this.keys.a.pressed && this.position.x >= 0) {
      this.velocity.x = -SPEED;
      this.rotation = -ROTATION;
    } else if (
      this.keys.d.pressed &&
      this.position.x + this.width <= this.ctx!.canvas.width
    ) {
      this.velocity.x = SPEED;
      this.rotation = ROTATION;
    } else {
      this.velocity.x = 0;
      this.rotation = 0;
    }
  }

  draw() {
    if (!this.ctx) return;
    if (!this.image) return;
  
    // save current context
    this.ctx.save();
    this.ctx.translate(
      this.position.x + this.width / 2,
      this.position.y + this.height / 2
    );

    this.ctx.rotate(this.rotation);

    // return to original position
    this.ctx.translate(
      -this.position.x - this.width / 2,
      -this.position.y - this.height / 2
    );

    this.ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );

    // restore context
    this.ctx.restore();
  }

  update() {
    if (!this.image) return;
    this.draw();
    this.position.x += this.velocity.x;
  }
}

export default Player;
