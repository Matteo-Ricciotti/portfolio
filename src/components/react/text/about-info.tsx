import type { PropsWithChildren } from "react";

type AboutInfoProps = {
    title?: string;
    name: string;
};

export const AboutInfo = ({ title, name, children }: PropsWithChildren<AboutInfoProps>) => {
    return (
        <p className="flex flex-col items-center font-medium text-white/50 max-md:gap-2 md:flex-row">
            {name}
            <span title={title} className="text-lg text-white md:ml-6 md:max-lg:text-base">
                {children}
            </span>
        </p>
    );
};
