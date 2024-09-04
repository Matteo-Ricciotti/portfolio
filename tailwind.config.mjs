/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./src/**/*.{astro,ts,tsx}"],
    prefix: "",
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
                primary: {
                    DEFAULT: "var(--primary)",
                },
                accent: {
                    DEFAULT: "var(--accent)",
                    hover: "var(--accent-hover)",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                wiggle: {
                    "0%, 100%": { transform: "rotate(-2deg)" },
                    "50%": { transform: "rotate(2deg)" },
                },
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                wiggle: "wiggle 500ms infinite",
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
