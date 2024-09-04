export type Project = {
    code: string;
    name: string;
    description: string;
    image: string;
    stack: string[];
    link: string | undefined;
    github: string | undefined;
};

export const PROJECTS: Project[] = [
    {
        code: "1",
        name: "Project 1",
        description: "Description 1",
        image: "sample.jpg",
        stack: ["react-js", "node-js", "typescript"],
        link: "https://google.com",
        github: undefined,
    },
    {
        code: "2",
        name: "Project 2",
        description: "Description 2",
        image: "sample.jpg",
        stack: ["react-js", "node-js", "typescript"],
        link: undefined,
        github: undefined,
    },
    {
        code: "3",
        name: "Project 3",
        description: "Description 3",
        image: "sample.jpg",
        stack: ["react-js", "node-js", "typescript"],
        link: undefined,
        github: "https://github.com",
    },
    {
        code: "4",
        name: "Project 4",
        description: "Description 4",
        image: "sample.jpg",
        stack: ["react-js", "node-js", "typescript"],
        link: "https://google.com",
        github: "https://github.com",
    },
    {
        code: "5",
        name: "Project 5",
        description: "Description 5",
        image: "sample.jpg",
        stack: ["react-js", "node-js", "typescript"],
        link: "https://google.com",
        github: "https://github.com",
    },
];
