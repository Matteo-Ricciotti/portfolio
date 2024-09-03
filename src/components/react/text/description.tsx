import { cn } from "@/utils";
import type { PropsWithChildren, ReactNode } from "react";

type DescriptionProps = {
    className?: string;
};

export const Description = ({ className, children }: PropsWithChildren<DescriptionProps>) => {
    return (
        <p className="my-6 max-w-full text-sm leading-6 tracking-widest text-white/80 md:max-w-[300px] lg:max-w-[500px] lg:text-base lg:leading-8">
            {children}
        </p>
    );
};
