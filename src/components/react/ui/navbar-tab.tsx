import { cn } from "@/utils";

type NavbarTabProps = {
    path: string;
    pathname: string;
    label: string;
};

export const NavbarTab = ({ path, pathname, label }: NavbarTabProps) => {
    return (
        <li>
            <a
                href={path}
                className={`${cn("transition-all hover:text-accent-hover", pathname === path && "text-accent")}`}
            >
                {label}
            </a>
        </li>
    );
};
