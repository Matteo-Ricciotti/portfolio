import type { AnchorHTMLAttributes } from "react";

type SkillCardProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export const SkillCard = (props: SkillCardProps) => {
    return (
        <a
            target="_blank"
            className="hover:animate-wiggle group rounded-md bg-white/10 p-8 transition-colors hover:bg-white/5 sm:p-16"
            {...props}
        />
    );
};
