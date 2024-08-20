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
        extend: {
            colors: {
                primary: "#1c1c22",
                accent: {
                    DEFAULT: "#00ff99",
                    hover: "#00ff9990",
                },
            },
        },
    },
    plugins: [],
};
