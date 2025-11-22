import React from "react";
import IconPlay from "../icons/IconPlay";
import IconExplore from "../icons/IconExplore";
import { menuItems } from "@/constants";
import Link from "next/link";

const Sidebar = () => {
    return (
        <div className="p-5 border-r border-r-gray-300 ">
            <a href="/" className="font-bold text-2xl inline-block mb-10">
                Udemy
            </a>
            <ul className="flex flex-col gap-2">
                {menuItems.map((item, index) => (
                    <MenuItem
                        key={index}
                        url={item.url}
                        title={item.title}
                        icons={item.icons}
                    />
                ))}
            </ul>
        </div>
    );
};

function MenuItem({
    url = "/",
    title = "",
    icons,
}: {
    url: string;
    title: string;
    icons: React.ReactNode;
}) {
    return (
        <li>
            <Link
                href={url}
                className="p-3 rounded-md flex items-center gap-3 hover:bg-gray-200 hover:text-primary hover:bg-primary bg hover:bg-opacity-10"
            >
                {icons}
                {title}
            </Link>
        </li>
    );
}

export default Sidebar;
