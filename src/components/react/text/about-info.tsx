import type { PropsWithChildren } from "react";

type AboutInfoProps = {
    durationElementId?: string;
    name: string;
};

export const AboutInfo = ({ durationElementId, name, children }: PropsWithChildren<AboutInfoProps>) => {
    return (
        <div className="flex flex-col items-center font-medium text-white/50 max-md:gap-2 md:flex-row">
            {name}
            <span id={durationElementId} className="text-lg text-white md:ml-6 md:max-lg:text-base">
                {children}
            </span>
        </div>
    );
};
