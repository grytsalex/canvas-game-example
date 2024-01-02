"use client";
import React from "react";
import Canvas from "@/components/Canvas";
import Button from "@/components/Button";

const GamePage = () => {
  const handleCallAlert = (message: string) => {
    alert(message);
  };

  return (
    <>
      <div className="flex items-center flex-col gap-[10px] min-h-screen pt-[60px]">
        <h1>Welcome to Next.js 14!</h1>
        <p>Edit this file to start building your app.</p>
        <div className="flex items-center gap-2">
          <Button onClick={() => handleCallAlert("Hello!")}>Call Alert!</Button>
          <Button variant={"danger"} onClick={() => handleCallAlert("Delete")}>
            Delete
          </Button>
          <Button
            variant={"secondary"}
            size={"sm"}
            onClick={() => handleCallAlert("Accept!")}
          >
            Delete
          </Button>
        </div>
      </div>
      <div className="flex pt-[60px] m">
        <Canvas />
      </div>
    </>
  );
};

export default GamePage;
