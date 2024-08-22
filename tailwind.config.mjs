/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.astro"],
    theme: {
        container: {
            center: true,
            padding: "1rem",
            screens: {
                sm: "640px",
                md: "768px",
                lg: "960px",
                xl: "1200px",
            },
        },
        screens: {
            sm: "640px",
            md: "768px",
            lg: "960px",
            xl: "1200px",
        },
        extend: {
            colors: {
                primary: "rgba(25, 31, 45, 1)",
                accent: {
                    DEFAULT: "rgba(83, 221, 108, 1)",
                    hover: "rgba(70, 188, 108, 1)",
                },
            },
        },
    },
    plugins: [],
};
