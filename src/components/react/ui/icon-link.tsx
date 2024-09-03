import { cn } from "@/utils";
import type { AnchorHTMLAttributes, DetailedHTMLProps, PropsWithChildren } from "react";

type IconLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    darker?: boolean;
    disabledTitle?: string;
};

export const IconLink = ({ href, darker, disabledTitle, children, ...props }: PropsWithChildren<IconLinkProps>) => {
    return (
        <a
            title={!href ? disabledTitle : href}
            href={href}
            aria-disabled={!href}
            className={`${cn(
                "rounded-full border border-accent-hover p-1.5 text-accent-hover transition-all",
                !darker && "hover:bg-accent-hover hover:text-primary",
                darker && "border-none bg-white/10 text-white",
                darker && href && "hover:text-accent-hover",
                !href && "cursor-not-allowed opacity-50",
            )}`}
            {...props}
        >
            {children}
        </a>
    );
};
