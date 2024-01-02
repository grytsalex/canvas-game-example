"use client";
// import React, { PropsWithChildren } from "react";
// import clsx from "clsx";

// type ButtonProps = {
//   variant?: "primary" | "secondary" | "success" | "danger";
//   size?: "small" | "medium" | "large";
//   onClick?: () => void;
// };

// const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
//   variant = "primary",
//   size = "medium",
//   onClick,
//   children,
// }) => {
//   const getVariantClasses = () => {
//     switch (variant) {
//       case "secondary":
//         return "bg-gray-300 text-gray-700";
//       case "success":
//         return "bg-green-500 text-white";
//       case "danger":
//         return "bg-red-500 text-white";
//       default:
//         return "bg-blue-500 text-white";
//     }
//   };

//   const getSizeClasses = () => {
//     switch (size) {
//       case "small":
//         return "px-2 py-1 text-sm";
//       case "large":
//         return "px-4 py-2 text-lg";
//       default:
//         return "px-3 py-2 text-base";
//     }
//   };

//   const buttonClasses = clsx(
//     "rounded-md",
//     getVariantClasses(),
//     getSizeClasses()
//   );

//   return (
//     <button className={buttonClasses} onClick={onClick}>
//       {children}
//     </button>
//   );
// };

// export default Button;

import { ButtonHTMLAttributes, ReactNode } from "react";
import { VariantProps, cva } from "class-variance-authority";
import cn from "@/utils/cn";

interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  onClick?: () => void;
}

const Button = ({
  children,
  className,
  variant,
  size,
  ...rest
}: IButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;

const buttonVariants = cva("rounded-md", {
  variants: {
    variant: {
      primary:
        "border-2 border-blue-200 bg-white text-black hover:bg-neutral-200",
      secondary:
        "border-2 border-blue-200 bg-neutral-200 text-green-500 hover:bg-neutral-800 hover:border-none",
      danger: "border-none bg-red-500 text-white hover:bg-red-600",
    },
    size: {
      sm: "text-sm px-1 py-0",
      md: "text-base px-2 py-1",
      lg: "text-xl px-4 py-2",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});
