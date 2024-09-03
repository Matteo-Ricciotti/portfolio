import type { PropsWithChildren } from "react";

type SkillLinkProps = {
    url: string;
};

export const SkillLink = ({ url, children }: PropsWithChildren<SkillLinkProps>) => {
    return (
        <li>
            <a
                href={url}
                target="_blank"
                className="text-base font-medium text-accent hover:text-accent-hover lg:text-lg"
            >
                {children}
            </a>
        </li>
    );
};
