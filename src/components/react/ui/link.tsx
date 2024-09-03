import type { AnchorHTMLAttributes } from "react";

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link = (props: LinkProps) => {
    return (
        <a
            className="flex items-center gap-2 rounded-full border border-accent-hover px-6 py-3 font-medium tracking-wide text-accent-hover transition-all hover:bg-accent-hover hover:text-primary"
            {...props}
        />
    );
};
