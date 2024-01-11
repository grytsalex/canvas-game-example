"use client";
import { useLayoutEffect, useRef } from "react";
import Player from "@/modules/player/PlayerClass";

export const keys = {
  a: { 
    pressed: false,
  },
  d: { 
    pressed: false,
  },
  space: { 
    pressed: false,
  }
};

const projectiles = [];

const Canvas: React.FC = (props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas?.getContext("2d");
    // const projectiles = [];

    if (context) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const player = new Player(context, keys);
      player.animate();

      window.addEventListener("keydown", ({ key }) => {
        switch (key) {
          case "a":
            keys.a.pressed = true;
            break;
          case "d":
            keys.d.pressed = true;
            break;
          case " ":
            keys.space.pressed = true;
            break;
        }
      });

      window.addEventListener("keyup", ({ key }) => {
        switch (key) {
          case "a":
            keys.a.pressed = false;
            break;
          case "d":
            keys.d.pressed = false;
            break;
          case " ":
            keys.space.pressed = false;
            break;
        }
      });
    }
  }, []);

  return <canvas ref={canvasRef} {...props} />;
};

export default Canvas;
