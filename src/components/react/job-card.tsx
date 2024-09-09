import type { Job } from "@/constants/jobs";

type JobCardProps = Job;

export const JobCard = ({ role, company, website, startDate, endDate }: JobCardProps) => {
    return (
        <button
            className="group rounded-md bg-black/20 p-4 text-center transition-all hover:cursor-pointer hover:bg-white/5 sm:p-6 md:text-start md:hover:scale-[1.05]"
            onClick={() => window && window.open(website)}
        >
            <p className="text-sm tracking-wide text-accent">
                {startDate} - {endDate || "Now"}
            </p>
            <p className="mt-3 text-lg">{role}</p>
            <div className="mt-6 flex items-center justify-center gap-2 md:justify-start">
                <div className="size-1.5 rounded-full bg-accent"></div>
                <p className="tracking-widest text-white/50">{company}</p>
            </div>
        </button>
    );
};
