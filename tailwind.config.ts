import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                primary: "#696FC7",
            },
            fontFamily: {
                primary: ["var(--font-manrope)"],
                secondary: ["var(--font-roboto)"],
            },
        },
    },
    plugins: [],
};
export default config;
