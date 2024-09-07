import clsx from "clsx";
import { twMerge, type ClassNameValue } from "tailwind-merge";

export const cn = (...inputs: ClassNameValue[]) => twMerge(clsx(...inputs));

export const getDuration = (timestamp: number) => {
    const now = Date.now();
    const diff = now - timestamp;

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const years = Math.floor(days / 365);

    const remainingDaysAfterYear = days % 365;
    const remainingMonths = Math.floor(remainingDaysAfterYear / 30);
    const remainingDaysAfterMonth = remainingDaysAfterYear % 30;

    const remainingHours = hours % 24;
    const remainingMinutes = minutes % 60;
    const remainingSeconds = seconds % 60;

    const yearsStr = years > 0 ? `${years} Year ` : "";
    const monthsStr = remainingMonths > 0 ? `${remainingMonths} Months ` : "";
    const daysStr = remainingDaysAfterMonth > 0 ? `${remainingDaysAfterMonth} Days ` : "";
    const hoursStr = remainingHours > 0 ? `${remainingHours} Hours ` : "";
    const minutesStr = remainingMinutes > 0 ? `${remainingMinutes} Minutes ` : "";

    return {
        partial: `${yearsStr}${monthsStr}`.trim(),
        full: `${yearsStr}${monthsStr}${daysStr}${hoursStr}${minutesStr}`.trim(),
    };
};
