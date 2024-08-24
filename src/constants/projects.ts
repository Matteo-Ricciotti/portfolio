export type Project = {
    code: string;
    name: string;
    description: string;
    image: string;
    stack: string[];
    link: string | null;
    github: string | null;
};

export const PROJECTS: Project[] = [
    {
        code: "project-1",
        name: "Project 1",
        description: "Description 1",
        image: "sample.jpg",
        stack: ["react-js", "node-js", "typescript"],
        link: "https://google.com",
        github: null,
    },
    {
        code: "project-2",
        name: "Project 2",
        description: "Description 2",
        image: "sample.jpg",
        stack: ["react-js", "node-js", "typescript"],
        link: null,
        github: null,
    },
    {
        code: "project-3",
        name: "Project 3",
        description: "Description 3",
        image: "sample.jpg",
        stack: ["react-js", "node-js", "typescript"],
        link: null,
        github: "https://github.com",
    },
    {
        code: "project-4",
        name: "Project 4",
        description: "Description 4",
        image: "sample.jpg",
        stack: ["react-js", "node-js", "typescript"],
        link: "https://google.com",
        github: "https://github.com",
    },
    {
        code: "project-5",
        name: "Project 5",
        description: "Description 5",
        image: "sample.jpg",
        stack: ["react-js", "node-js", "typescript"],
        link: "https://google.com",
        github: "https://github.com",
    },
];
