"use client";
import { useLayoutEffect, useRef } from "react";
import Player from "@/modules/player/PlayerClass";

const Canvas: React.FC = (props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas?.getContext("2d");

    if (context) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const player = new Player(context);
      player.animate();
    }
  }, []);

  return <canvas ref={canvasRef} {...props} />;
};

export default Canvas;
