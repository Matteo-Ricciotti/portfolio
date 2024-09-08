export type Job = {
    role: string;
    company: string;
    startDate: string;
    endDate: string | undefined;
};

export const JOBS: Job[] = [
    {
        role: "Front End Developer",
        company: "Enhancers",
        startDate: "May 2023",
        endDate: "July 2023",
    },
    {
        role: "Full Stack Developer",
        company: "Coolshop",
        startDate: "November 2023",
        endDate: undefined,
    },
];
