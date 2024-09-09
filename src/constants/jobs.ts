export type Job = {
    role: string;
    company: string;
    website: string;
    startDate: string;
    endDate: string | undefined;
};

export const JOBS: Job[] = [
    {
        role: "Front End Developer",
        company: "Enhancers",
        website: "https://enhancers.it/en",
        startDate: "May 2023",
        endDate: "July 2023",
    },
    {
        role: "Full Stack Developer",
        company: "Coolshop",
        website: "https://www.coolshop.it/en",
        startDate: "November 2023",
        endDate: undefined,
    },
];
