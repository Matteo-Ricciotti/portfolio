import { twMerge } from "tailwind-merge";
import { clsx, ClassValue } from "clsx";

export default (...inputs: ClassValue[]) => twMerge(clsx(...inputs));
