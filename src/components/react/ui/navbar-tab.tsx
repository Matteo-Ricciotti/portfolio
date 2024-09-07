import { cn } from "@/utils";
import type { PropsWithChildren } from "react";

type NavbarTabProps = {
    path: string;
    pathName: string;
};

export const NavbarTab = ({ path, pathName, children }: PropsWithChildren<NavbarTabProps>) => {
    return (
        <li>
            <a
                href={path}
                className={cn(
                    "transition-all hover:text-accent-hover",
                    path.replaceAll("/", "") === pathName.replaceAll("/", "") &&
                        "text-accent underline underline-offset-[10px]",
                )}
            >
                {children}
            </a>
        </li>
    );
};
