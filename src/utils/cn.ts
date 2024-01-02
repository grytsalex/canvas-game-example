import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export default function cn(...inputs: ClassValue[]) {
    console.log({ inputs });
    console.log('clsx(inputs)', clsx(inputs));
    console.log('twMerge(clsx(inputs))', twMerge(clsx(inputs)));
    return twMerge(clsx(inputs));
}