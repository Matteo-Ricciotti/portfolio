import { cn } from "@/utils";
import type { PropsWithChildren, ReactNode } from "react";

type TitleProps = {
    className?: string;
};

export const Title = ({ className, children }: PropsWithChildren<TitleProps>) => {
    return <h1 className={`${cn("text-4xl font-medium xl:text-6xl", className)}`}>{children}</h1>;
};
