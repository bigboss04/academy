import { Manrope, Roboto } from "next/font/google";
import localFont from "next/font/local";
const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-manrope",
});
const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    variable: "--font-roboto",
});

const dm_sans = localFont({
    src: [
        {
            path: "../app/DMSans-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../app/DMSans-Italic.ttf",
            weight: "400",
            style: "italic",
        },

        {
            path: "../app/DMSans-Bold.ttf",
            weight: "700",
            style: "normal",
        },

        {
            path: "../app/DMSans-BoldItalic.ttf",
            weight: "700",
            style: "italic",
        },
        {
            path: "../app/DMSans-Medium.ttf",
            weight: "500",
        },
    ],
});

export { manrope, roboto, dm_sans };
