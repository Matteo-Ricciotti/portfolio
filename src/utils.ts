import clsx from "clsx";
import { twMerge, type ClassNameValue } from "tailwind-merge";

export const cn = (...inputs: ClassNameValue[]) => twMerge(clsx(...inputs));
