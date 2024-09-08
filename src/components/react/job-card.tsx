import type { Job } from "@/constants/jobs";

type JobCardProps = Job;

export const JobCard = ({ role, company, startDate, endDate }: JobCardProps) => {
    return (
        <div className="group rounded-md bg-white/10 p-8 transition-all hover:scale-[1.1] hover:bg-white/5 sm:p-16" />
    );
};
