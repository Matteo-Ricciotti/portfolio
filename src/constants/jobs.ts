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
        startDate: "05/01/2023",
        endDate: "07/31/2023",
    },
    {
        role: "Full Stack Developer",
        company: "Coolshop",
        startDate: "11/01/2023",
        endDate: undefined,
    },
];
