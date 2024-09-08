import clsx from "clsx";
import { twMerge, type ClassNameValue } from "tailwind-merge";

export const cn = (...inputs: ClassNameValue[]) => twMerge(clsx(...inputs));

export const getDuration = (timestamp: number, withString?: boolean) => {
    const now = Date.now();
    const diff = now - timestamp;

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    let years = Math.floor(days / 365);

    const remainingDaysAfterYear = days % 365;
    const remainingMonths = Math.floor(remainingDaysAfterYear / 30);

    if (remainingMonths >= 6) {
        years++;
    }

    const yearsStr = years > 0 ? `${years} Year${years > 1 ? "s" : ""}` : "";

    return withString ? yearsStr : years;
};
