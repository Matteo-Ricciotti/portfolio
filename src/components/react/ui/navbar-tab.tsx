import type { PropsWithChildren } from "react";

type NavbarTabProps = {
    path: string;
};

export const NavbarTab = ({ path, children }: PropsWithChildren<NavbarTabProps>) => {
    return (
        <li>
            <a href={path} className="transition-all hover:text-accent-hover">
                {children}
            </a>
        </li>
    );
};
