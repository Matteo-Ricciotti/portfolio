import type { AnchorHTMLAttributes } from "react";

type SkillCardProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export const SkillCard = (props: SkillCardProps) => {
    return (
        <a
            target="_blank"
            className="group rounded-md bg-black/20 p-8 transition-all hover:scale-[1.1] hover:bg-white/5 sm:p-16"
            {...props}
        />
    );
};
