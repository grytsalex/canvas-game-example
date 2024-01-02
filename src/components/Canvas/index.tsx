"use client"
import { useEffect, useRef } from 'react';

interface CanvasProps {
    width?: number;
    height?: number;
}

const Canvas: React.FC<CanvasProps> = ({ width = 800, height = 600, ...rest }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');

        if (context) {
            // Your canvas drawing logic goes here
            // For example, you can draw a rectangle:
            context.fillStyle = 'red';
            context.fillRect(0, 0, width, height);
        }
    }, [width, height]);

    return <canvas ref={canvasRef} width={width} height={height} {...rest}/>;
};

export default Canvas;
