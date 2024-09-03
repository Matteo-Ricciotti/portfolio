import type { PropsWithChildren } from "react";

export const OutlineText = ({ children }: PropsWithChildren) => {
    return (
        <p className="outline-text mb-4 text-6xl font-extrabold leading-none text-transparent md:text-7xl xl:text-8xl">
            {children}
        </p>
    );
};
